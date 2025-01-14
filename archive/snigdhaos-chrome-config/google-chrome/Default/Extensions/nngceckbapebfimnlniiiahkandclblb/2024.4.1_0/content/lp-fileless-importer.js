/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/tools/enums/fileless-import.enums.ts
const FilelessImportType = {
    LP: "LP",
};
const FilelessImportPort = {
    NotificationBar: "fileless-importer-notification-bar",
    LpImporter: "lp-fileless-importer",
};


;// CONCATENATED MODULE: ./src/tools/content/lp-fileless-importer.ts

class LpFilelessImporter {
    constructor() {
        this.portMessageHandlers = {
            verifyFeatureFlag: ({ message }) => this.handleFeatureFlagVerification(message),
            triggerCsvDownload: () => this.triggerCsvDownload(),
            startLpFilelessImport: () => this.startLpImport(),
        };
        /**
         * Initializes the importing mechanism used to import the CSV file into Bitwarden.
         * This is done by observing the DOM for the addition of the LP importer element.
         */
        this.loadImporter = () => {
            this.mutationObserver = new MutationObserver(this.handleMutation);
            this.mutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
            });
        };
        /**
         * Handles mutations that are observed by the mutation observer. When the exported data
         * element is added to the DOM, the export data is extracted and the import prompt is
         * displayed.
         *
         * @param mutations - The mutations that were observed.
         */
        this.handleMutation = (mutations) => {
            let textContent;
            for (let index = 0; index < (mutations === null || mutations === void 0 ? void 0 : mutations.length); index++) {
                const mutation = mutations[index];
                textContent = Array.from(mutation.addedNodes)
                    .filter((node) => node.nodeName.toLowerCase() === "pre")
                    .map((node) => { var _a; return (_a = node.textContent) === null || _a === void 0 ? void 0 : _a.trim(); })
                    .find((text) => (text === null || text === void 0 ? void 0 : text.indexOf("url,username,password")) >= 0);
                if (textContent) {
                    break;
                }
            }
            if (textContent) {
                this.exportData = textContent;
                this.postPortMessage({ command: "displayLpImportNotification" });
                this.mutationObserver.disconnect();
            }
        };
        /**
         * Handles messages that are sent from the background script.
         *
         * @param message - The message that was sent.
         * @param port - The port that the message was sent from.
         */
        this.handlePortMessage = (message, port) => {
            const handler = this.portMessageHandlers[message.command];
            if (!handler) {
                return;
            }
            handler({ message, port });
        };
    }
    /**
     * Initializes the LP fileless importer.
     */
    init() {
        this.setupMessagePort();
    }
    /**
     * Enacts behavior based on the feature flag verification message. If the feature flag is
     * not enabled, the message port is disconnected. If the feature flag is enabled, the
     * download of the CSV file is suppressed.
     *
     * @param message - The port message, contains the feature flag indicator.
     */
    handleFeatureFlagVerification(message) {
        var _a;
        if (!message.filelessImportEnabled) {
            (_a = this.messagePort) === null || _a === void 0 ? void 0 : _a.disconnect();
            return;
        }
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", this.loadImporter);
            return;
        }
        this.loadImporter();
    }
    /**
     * Posts a message to the LP importer to trigger the download of the CSV file.
     */
    triggerCsvDownload() {
        this.postWindowMessage({ command: "triggerCsvDownload" });
    }
    /**
     * If the export data is present, sends a message to the background with
     * the export data to start the import process.
     */
    startLpImport() {
        var _a;
        if (!this.exportData) {
            return;
        }
        this.postPortMessage({ command: "startLpImport", data: this.exportData });
        (_a = this.messagePort) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    /**
     * Posts a message to the background script.
     *
     * @param message - The message to post.
     */
    postPortMessage(message) {
        var _a;
        (_a = this.messagePort) === null || _a === void 0 ? void 0 : _a.postMessage(message);
    }
    /**
     * Posts a message to the global context of the page.
     *
     * @param message - The message to post.
     */
    postWindowMessage(message) {
        globalThis.postMessage(message, "https://lastpass.com");
    }
    /**
     * Sets up the message port that is used to facilitate communication between the
     * background script and the content script.
     */
    setupMessagePort() {
        this.messagePort = chrome.runtime.connect({ name: FilelessImportPort.LpImporter });
        this.messagePort.onMessage.addListener(this.handlePortMessage);
    }
}
(function () {
    if (!globalThis.lpFilelessImporter) {
        globalThis.lpFilelessImporter = new LpFilelessImporter();
        globalThis.lpFilelessImporter.init();
    }
})();

/******/ })()
;