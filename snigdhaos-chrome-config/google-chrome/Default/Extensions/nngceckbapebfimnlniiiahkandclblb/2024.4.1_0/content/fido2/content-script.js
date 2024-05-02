/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/vault/fido2/content/messaging/message.ts
var MessageType;
(function (MessageType) {
    MessageType[MessageType["CredentialCreationRequest"] = 0] = "CredentialCreationRequest";
    MessageType[MessageType["CredentialCreationResponse"] = 1] = "CredentialCreationResponse";
    MessageType[MessageType["CredentialGetRequest"] = 2] = "CredentialGetRequest";
    MessageType[MessageType["CredentialGetResponse"] = 3] = "CredentialGetResponse";
    MessageType[MessageType["AbortRequest"] = 4] = "AbortRequest";
    MessageType[MessageType["DisconnectRequest"] = 5] = "DisconnectRequest";
    MessageType[MessageType["ReconnectRequest"] = 6] = "ReconnectRequest";
    MessageType[MessageType["AbortResponse"] = 7] = "AbortResponse";
    MessageType[MessageType["ErrorResponse"] = 8] = "ErrorResponse";
})(MessageType || (MessageType = {}));

;// CONCATENATED MODULE: ../../libs/common/src/vault/abstractions/fido2/fido2-client.service.abstraction.ts
const UserRequestedFallbackAbortReason = "UserRequestedFallback";
/**
 * This class represents an abstraction of the WebAuthn Client as described by W3C:
 * https://www.w3.org/TR/webauthn-3/#webauthn-client
 *
 * The WebAuthn Client is an intermediary entity typically implemented in the user agent
 * (in whole, or in part). Conceptually, it underlies the Web Authentication API and embodies
 * the implementation of the Web Authentication API's operations.
 *
 * It is responsible for both marshalling the inputs for the underlying authenticator operations,
 * and for returning the results of the latter operations to the Web Authentication API's callers.
 */
class Fido2ClientService {
}
/**
 * Error thrown when the user requests a fallback to the browser's built-in WebAuthn implementation.
 */
class FallbackRequestedError extends Error {
    constructor() {
        super("FallbackRequested");
        this.fallbackRequested = true;
    }
}

;// CONCATENATED MODULE: ./src/vault/fido2/content/messaging/messenger.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const SENDER = "bitwarden-webauthn";
/**
 * A class that handles communication between the page and content script. It converts
 * the browser's broadcasting API into a request/response API with support for seamlessly
 * handling aborts and exceptions across separate execution contexts.
 */
class Messenger {
    /**
     * Creates a messenger that uses the browser's `window.postMessage` API to initiate
     * requests in the content script. Every request will then create it's own
     * `MessageChannel` through which all subsequent communication will be sent through.
     *
     * @param window the window object to use for communication
     * @returns a `Messenger` instance
     */
    static forDOMCommunication(window) {
        const windowOrigin = window.location.origin;
        return new Messenger({
            postMessage: (message, port) => window.postMessage(message, windowOrigin, [port]),
            addEventListener: (listener) => window.addEventListener("message", listener),
            removeEventListener: (listener) => window.removeEventListener("message", listener),
        });
    }
    constructor(broadcastChannel) {
        this.broadcastChannel = broadcastChannel;
        this.messageEventListener = null;
        this.onDestroy = new EventTarget();
        this.messengerId = this.generateUniqueId();
        this.messageEventListener = this.createMessageEventListener();
        this.broadcastChannel.addEventListener(this.messageEventListener);
    }
    /**
     * Sends a request to the content script and returns the response.
     * AbortController signals will be forwarded to the content script.
     *
     * @param request data to send to the content script
     * @param abortController the abort controller that might be used to abort the request
     * @returns the response from the content script
     */
    request(request, abortController) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestChannel = new MessageChannel();
            const { port1: localPort, port2: remotePort } = requestChannel;
            try {
                const promise = new Promise((resolve) => {
                    localPort.onmessage = (event) => resolve(event.data);
                });
                const abortListener = () => localPort.postMessage({
                    metadata: { SENDER },
                    type: MessageType.AbortRequest,
                });
                abortController === null || abortController === void 0 ? void 0 : abortController.signal.addEventListener("abort", abortListener);
                this.broadcastChannel.postMessage(Object.assign(Object.assign({}, request), { SENDER, senderId: this.messengerId }), remotePort);
                const response = yield promise;
                abortController === null || abortController === void 0 ? void 0 : abortController.signal.removeEventListener("abort", abortListener);
                if (response.type === MessageType.ErrorResponse) {
                    const error = new Error();
                    Object.assign(error, JSON.parse(response.error));
                    throw error;
                }
                return response;
            }
            finally {
                localPort.close();
            }
        });
    }
    createMessageEventListener() {
        return (event) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const windowOrigin = window.location.origin;
            if (event.origin !== windowOrigin || !this.handler) {
                return;
            }
            const message = event.data;
            const port = (_a = event.ports) === null || _a === void 0 ? void 0 : _a[0];
            if ((message === null || message === void 0 ? void 0 : message.SENDER) !== SENDER ||
                message.senderId == this.messengerId ||
                message == null ||
                port == null) {
                return;
            }
            const abortController = new AbortController();
            port.onmessage = (event) => {
                if (event.data.type === MessageType.AbortRequest) {
                    abortController.abort();
                }
            };
            let onDestroyListener;
            const destroyPromise = new Promise((_, reject) => {
                onDestroyListener = () => reject(new FallbackRequestedError());
                this.onDestroy.addEventListener("destroy", onDestroyListener);
            });
            try {
                const handlerResponse = yield Promise.race([
                    this.handler(message, abortController),
                    destroyPromise,
                ]);
                port.postMessage(Object.assign(Object.assign({}, handlerResponse), { SENDER }));
            }
            catch (error) {
                port.postMessage({
                    SENDER,
                    type: MessageType.ErrorResponse,
                    error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
                });
            }
            finally {
                this.onDestroy.removeEventListener("destroy", onDestroyListener);
                port.close();
            }
        });
    }
    /**
     * Cleans up the messenger by removing the message event listener
     */
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            this.onDestroy.dispatchEvent(new Event("destroy"));
            if (this.messageEventListener) {
                yield this.sendDisconnectCommand();
                this.broadcastChannel.removeEventListener(this.messageEventListener);
                this.messageEventListener = null;
            }
        });
    }
    sendReconnectCommand() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.request({ type: MessageType.ReconnectRequest });
        });
    }
    sendDisconnectCommand() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.request({ type: MessageType.DisconnectRequest });
        });
    }
    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
}

;// CONCATENATED MODULE: ./src/vault/fido2/content/content-script.ts
var content_script_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function isFido2FeatureEnabled() {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage({
            command: "checkFido2FeatureEnabled",
            hostname: window.location.hostname,
            origin: window.location.origin,
        }, (response) => resolve(response.result));
    });
}
function isSameOriginWithAncestors() {
    try {
        return window.self === window.top;
    }
    catch (_a) {
        return false;
    }
}
const messenger = Messenger.forDOMCommunication(window);
function injectPageScript() {
    // Locate an existing page-script on the page
    const existingPageScript = document.getElementById("bw-fido2-page-script");
    // Inject the page-script if it doesn't exist
    if (!existingPageScript) {
        const s = document.createElement("script");
        s.src = chrome.runtime.getURL("content/fido2/page-script.js");
        s.id = "bw-fido2-page-script";
        (document.head || document.documentElement).appendChild(s);
        return;
    }
    // If the page-script already exists, send a reconnect message to the page-script
    // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    messenger.sendReconnectCommand();
}
function initializeFido2ContentScript() {
    injectPageScript();
    messenger.handler = (message, abortController) => content_script_awaiter(this, void 0, void 0, function* () {
        const requestId = Date.now().toString();
        const abortHandler = () => chrome.runtime.sendMessage({
            command: "fido2AbortRequest",
            abortedRequestId: requestId,
        });
        abortController.signal.addEventListener("abort", abortHandler);
        if (message.type === MessageType.CredentialCreationRequest) {
            return new Promise((resolve, reject) => {
                const data = Object.assign(Object.assign({}, message.data), { origin: window.location.origin, sameOriginWithAncestors: isSameOriginWithAncestors() });
                chrome.runtime.sendMessage({
                    command: "fido2RegisterCredentialRequest",
                    data,
                    requestId: requestId,
                }, (response) => {
                    if (response && response.error !== undefined) {
                        return reject(response.error);
                    }
                    resolve({
                        type: MessageType.CredentialCreationResponse,
                        result: response.result,
                    });
                });
            });
        }
        if (message.type === MessageType.CredentialGetRequest) {
            return new Promise((resolve, reject) => {
                const data = Object.assign(Object.assign({}, message.data), { origin: window.location.origin, sameOriginWithAncestors: isSameOriginWithAncestors() });
                chrome.runtime.sendMessage({
                    command: "fido2GetCredentialRequest",
                    data,
                    requestId: requestId,
                }, (response) => {
                    if (response && response.error !== undefined) {
                        return reject(response.error);
                    }
                    resolve({
                        type: MessageType.CredentialGetResponse,
                        result: response.result,
                    });
                });
            }).finally(() => abortController.signal.removeEventListener("abort", abortHandler));
        }
        return undefined;
    });
}
function run() {
    return content_script_awaiter(this, void 0, void 0, function* () {
        if (!(yield isFido2FeatureEnabled())) {
            return;
        }
        initializeFido2ContentScript();
        const port = chrome.runtime.connect({ name: "fido2ContentScriptReady" });
        port.onDisconnect.addListener(() => {
            // Cleanup the messenger and remove the event listener
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            messenger.destroy();
        });
    });
}
// Only run the script if the document is an HTML document
if (document.contentType === "text/html") {
    void run();
}

/******/ })()
;