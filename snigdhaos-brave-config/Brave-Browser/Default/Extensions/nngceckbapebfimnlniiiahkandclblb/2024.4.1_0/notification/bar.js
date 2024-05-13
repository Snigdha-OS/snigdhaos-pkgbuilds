/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/encryption-type.enum.ts
var EncryptionType;
(function (EncryptionType) {
    EncryptionType[EncryptionType["AesCbc256_B64"] = 0] = "AesCbc256_B64";
    EncryptionType[EncryptionType["AesCbc128_HmacSha256_B64"] = 1] = "AesCbc128_HmacSha256_B64";
    EncryptionType[EncryptionType["AesCbc256_HmacSha256_B64"] = 2] = "AesCbc256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_B64"] = 3] = "Rsa2048_OaepSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_B64"] = 4] = "Rsa2048_OaepSha1_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_HmacSha256_B64"] = 5] = "Rsa2048_OaepSha256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_HmacSha256_B64"] = 6] = "Rsa2048_OaepSha1_HmacSha256_B64";
})(EncryptionType || (EncryptionType = {}));
/** The expected number of parts to a serialized EncString of the given encryption type.
 * For example, an EncString of type AesCbc256_B64 will have 2 parts, and an EncString of type
 * AesCbc128_HmacSha256_B64 will have 3 parts.
 *
 * Example of annotated serialized EncStrings:
 * 0.iv|data
 * 1.iv|data|mac
 * 2.iv|data|mac
 * 3.data
 * 4.data
 *
 * @see EncString
 * @see EncryptionType
 * @see EncString.parseEncryptedString
 */
const EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE = {
    [EncryptionType.AesCbc256_B64]: 2,
    [EncryptionType.AesCbc128_HmacSha256_B64]: 3,
    [EncryptionType.AesCbc256_HmacSha256_B64]: 3,
    [EncryptionType.Rsa2048_OaepSha256_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha1_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64]: 2,
    [EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64]: 2,
};

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/file-upload-type.enum.ts
var FileUploadType;
(function (FileUploadType) {
    FileUploadType[FileUploadType["Direct"] = 0] = "Direct";
    FileUploadType[FileUploadType["Azure"] = 1] = "Azure";
})(FileUploadType || (FileUploadType = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/hash-purpose.enum.ts
var HashPurpose;
(function (HashPurpose) {
    HashPurpose[HashPurpose["ServerAuthorization"] = 1] = "ServerAuthorization";
    HashPurpose[HashPurpose["LocalAuthorization"] = 2] = "LocalAuthorization";
})(HashPurpose || (HashPurpose = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/html-storage-location.enum.ts
var HtmlStorageLocation;
(function (HtmlStorageLocation) {
    HtmlStorageLocation["Local"] = "local";
    HtmlStorageLocation["Memory"] = "memory";
    HtmlStorageLocation["Session"] = "session";
})(HtmlStorageLocation || (HtmlStorageLocation = {}));

;// CONCATENATED MODULE: ../../libs/common/src/auth/models/domain/kdf-config.ts
class KdfConfig {
    constructor(iterations, memory, parallelism) {
        this.iterations = iterations;
        this.memory = memory;
        this.parallelism = parallelism;
    }
}

;// CONCATENATED MODULE: ../../libs/common/src/platform/misc/range-with-default.ts
/**
 * A range with a default value.
 *
 * Enforces constraints to ensure min > default > max.
 */
class RangeWithDefault {
    constructor(min, max, defaultValue) {
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        if (min > max) {
            throw new Error(`${min} is greater than ${max}.`);
        }
        if (this.inRange(defaultValue) === false) {
            throw new Error("Default value is not in range.");
        }
    }
    inRange(value) {
        return value >= this.min && value <= this.max;
    }
}

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/kdf-type.enum.ts


var KdfType;
(function (KdfType) {
    KdfType[KdfType["PBKDF2_SHA256"] = 0] = "PBKDF2_SHA256";
    KdfType[KdfType["Argon2id"] = 1] = "Argon2id";
})(KdfType || (KdfType = {}));
const ARGON2_MEMORY = new RangeWithDefault(16, 1024, 64);
const ARGON2_PARALLELISM = new RangeWithDefault(1, 16, 4);
const ARGON2_ITERATIONS = new RangeWithDefault(2, 10, 3);
const DEFAULT_KDF_TYPE = KdfType.PBKDF2_SHA256;
const PBKDF2_ITERATIONS = new RangeWithDefault(600000, 2000000, 600000);
const DEFAULT_KDF_CONFIG = new KdfConfig(PBKDF2_ITERATIONS.defaultValue);

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/key-suffix-options.enum.ts
var KeySuffixOptions;
(function (KeySuffixOptions) {
    KeySuffixOptions["Auto"] = "auto";
    KeySuffixOptions["Biometric"] = "biometric";
    KeySuffixOptions["Pin"] = "pin";
})(KeySuffixOptions || (KeySuffixOptions = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/log-level-type.enum.ts
var LogLevelType;
(function (LogLevelType) {
    LogLevelType[LogLevelType["Debug"] = 0] = "Debug";
    LogLevelType[LogLevelType["Info"] = 1] = "Info";
    LogLevelType[LogLevelType["Warning"] = 2] = "Warning";
    LogLevelType[LogLevelType["Error"] = 3] = "Error";
})(LogLevelType || (LogLevelType = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/storage-location.enum.ts
var StorageLocation;
(function (StorageLocation) {
    StorageLocation["Both"] = "both";
    StorageLocation["Disk"] = "disk";
    StorageLocation["Memory"] = "memory";
})(StorageLocation || (StorageLocation = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/theme-type.enum.ts
var ThemeType;
(function (ThemeType) {
    ThemeType["System"] = "system";
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
    ThemeType["Nord"] = "nord";
    ThemeType["SolarizedDark"] = "solarizedDark";
})(ThemeType || (ThemeType = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/index.ts










;// CONCATENATED MODULE: ../../libs/common/src/platform/services/console-log.service.ts

class ConsoleLogService {
    constructor(isDev, filter = null) {
        this.isDev = isDev;
        this.filter = filter;
        this.timersMap = new Map();
    }
    debug(message) {
        if (!this.isDev) {
            return;
        }
        this.write(LogLevelType.Debug, message);
    }
    info(message) {
        this.write(LogLevelType.Info, message);
    }
    warning(message) {
        this.write(LogLevelType.Warning, message);
    }
    error(message) {
        this.write(LogLevelType.Error, message);
    }
    write(level, message) {
        if (this.filter != null && this.filter(level)) {
            return;
        }
        switch (level) {
            case LogLevelType.Debug:
                // eslint-disable-next-line
                console.log(message);
                break;
            case LogLevelType.Info:
                // eslint-disable-next-line
                console.log(message);
                break;
            case LogLevelType.Warning:
                // eslint-disable-next-line
                console.warn(message);
                break;
            case LogLevelType.Error:
                // eslint-disable-next-line
                console.error(message);
                break;
            default:
                break;
        }
    }
}

;// CONCATENATED MODULE: ./src/tools/enums/fileless-import.enums.ts
const FilelessImportType = {
    LP: "LP",
};
const FilelessImportPort = {
    NotificationBar: "fileless-importer-notification-bar",
    LpImporter: "lp-fileless-importer",
};


;// CONCATENATED MODULE: ./src/autofill/notification/bar.ts



__webpack_require__(265);
const logService = new ConsoleLogService(false);
let notificationBarIframeInitData = {};
let windowMessageOrigin;
const notificationBarWindowMessageHandlers = {
    initNotificationBar: ({ message }) => initNotificationBar(message),
    saveCipherAttemptCompleted: ({ message }) => handleSaveCipherAttemptCompletedMessage(message),
};
globalThis.addEventListener("load", load);
function load() {
    setupWindowMessageListener();
    postMessageToParent({ command: "initNotificationBar" });
}
function initNotificationBar(message) {
    const { initData } = message;
    if (!initData) {
        return;
    }
    notificationBarIframeInitData = initData;
    const { isVaultLocked } = notificationBarIframeInitData;
    setNotificationBarTheme();
    document.getElementById("logo").src = isVaultLocked
        ? chrome.runtime.getURL("images/icon38_locked.png")
        : chrome.runtime.getURL("images/icon38.png");
    const i18n = {
        appName: chrome.i18n.getMessage("appName"),
        close: chrome.i18n.getMessage("close"),
        never: chrome.i18n.getMessage("never"),
        folder: chrome.i18n.getMessage("folder"),
        notificationAddSave: chrome.i18n.getMessage("notificationAddSave"),
        notificationAddDesc: chrome.i18n.getMessage("notificationAddDesc"),
        notificationEdit: chrome.i18n.getMessage("edit"),
        notificationChangeSave: chrome.i18n.getMessage("notificationChangeSave"),
        notificationChangeDesc: chrome.i18n.getMessage("notificationChangeDesc"),
        notificationUnlock: chrome.i18n.getMessage("notificationUnlock"),
        notificationUnlockDesc: chrome.i18n.getMessage("notificationUnlockDesc"),
        filelessImport: chrome.i18n.getMessage("filelessImport"),
        lpFilelessImport: chrome.i18n.getMessage("lpFilelessImport"),
        cancelFilelessImport: chrome.i18n.getMessage("no"),
        lpCancelFilelessImport: chrome.i18n.getMessage("lpCancelFilelessImport"),
        startFilelessImport: chrome.i18n.getMessage("startFilelessImport"),
    };
    setupLogoLink(i18n);
    // i18n for "Add" template
    const addTemplate = document.getElementById("template-add");
    const neverButton = addTemplate.content.getElementById("never-save");
    neverButton.textContent = i18n.never;
    const selectFolder = addTemplate.content.getElementById("select-folder");
    selectFolder.hidden = isVaultLocked || removeIndividualVault();
    selectFolder.setAttribute("aria-label", i18n.folder);
    const addButton = addTemplate.content.getElementById("add-save");
    addButton.textContent = i18n.notificationAddSave;
    const addEditButton = addTemplate.content.getElementById("add-edit");
    // If Remove Individual Vault policy applies, "Add" opens the edit tab, so we hide the Edit button
    addEditButton.hidden = removeIndividualVault();
    addEditButton.textContent = i18n.notificationEdit;
    addTemplate.content.getElementById("add-text").textContent = i18n.notificationAddDesc;
    // i18n for "Change" (update password) template
    const changeTemplate = document.getElementById("template-change");
    const changeButton = changeTemplate.content.getElementById("change-save");
    changeButton.textContent = i18n.notificationChangeSave;
    const changeEditButton = changeTemplate.content.getElementById("change-edit");
    changeEditButton.textContent = i18n.notificationEdit;
    changeTemplate.content.getElementById("change-text").textContent = i18n.notificationChangeDesc;
    // i18n for "Unlock" (unlock extension) template
    const unlockTemplate = document.getElementById("template-unlock");
    const unlockButton = unlockTemplate.content.getElementById("unlock-vault");
    unlockButton.textContent = i18n.notificationUnlock;
    unlockTemplate.content.getElementById("unlock-text").textContent = i18n.notificationUnlockDesc;
    // i18n for "Fileless Import" (fileless-import) template
    const isLpImport = initData.importType === FilelessImportType.LP;
    const importTemplate = document.getElementById("template-fileless-import");
    const startImportButton = importTemplate.content.getElementById("start-fileless-import");
    startImportButton.textContent = i18n.startFilelessImport;
    const cancelImportButton = importTemplate.content.getElementById("cancel-fileless-import");
    cancelImportButton.textContent = isLpImport
        ? i18n.lpCancelFilelessImport
        : i18n.cancelFilelessImport;
    importTemplate.content.getElementById("fileless-import-text").textContent = isLpImport
        ? i18n.lpFilelessImport
        : i18n.filelessImport;
    // i18n for body content
    const closeButton = document.getElementById("close-button");
    closeButton.title = i18n.close;
    const notificationType = initData.type;
    if (initData.type === "add") {
        handleTypeAdd();
    }
    else if (notificationType === "change") {
        handleTypeChange();
    }
    else if (notificationType === "unlock") {
        handleTypeUnlock();
    }
    else if (notificationType === "fileless-import") {
        handleTypeFilelessImport();
    }
    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendPlatformMessage({
            command: "bgCloseNotificationBar",
        });
    });
    window.addEventListener("resize", adjustHeight);
    adjustHeight();
}
function handleTypeAdd() {
    setContent(document.getElementById("template-add"));
    const addButton = document.getElementById("add-save");
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        // If Remove Individual Vault policy applies, "Add" opens the edit tab
        sendSaveCipherMessage(removeIndividualVault(), getSelectedFolder());
    });
    if (removeIndividualVault()) {
        // Everything past this point is only required if user has an individual vault
        return;
    }
    const editButton = document.getElementById("add-edit");
    editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true, getSelectedFolder());
    });
    const neverButton = document.getElementById("never-save");
    neverButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendPlatformMessage({
            command: "bgNeverSave",
        });
    });
    loadFolderSelector();
}
function handleTypeChange() {
    setContent(document.getElementById("template-change"));
    const changeButton = document.getElementById("change-save");
    changeButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(false);
    });
    const editButton = document.getElementById("change-edit");
    editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true);
    });
}
function sendSaveCipherMessage(edit, folder) {
    sendPlatformMessage({
        command: "bgSaveCipher",
        folder,
        edit,
    });
}
function handleSaveCipherAttemptCompletedMessage(message) {
    const addSaveButtonContainers = document.querySelectorAll(".add-change-cipher-buttons");
    const notificationBarOuterWrapper = document.getElementById("notification-bar-outer-wrapper");
    if (message === null || message === void 0 ? void 0 : message.error) {
        addSaveButtonContainers.forEach((element) => {
            element.textContent = chrome.i18n.getMessage("saveCipherAttemptFailed");
            element.classList.add("error-message");
            notificationBarOuterWrapper.classList.add("error-event");
        });
        logService.error(`Error encountered when saving credentials: ${message.error}`);
        return;
    }
    const messageName = notificationBarIframeInitData.type === "add"
        ? "saveCipherAttemptSuccess"
        : "updateCipherAttemptSuccess";
    addSaveButtonContainers.forEach((element) => {
        element.textContent = chrome.i18n.getMessage(messageName);
        element.classList.add("success-message");
        notificationBarOuterWrapper.classList.add("success-event");
    });
    setTimeout(() => sendPlatformMessage({ command: "bgCloseNotificationBar" }), 1250);
}
function handleTypeUnlock() {
    setContent(document.getElementById("template-unlock"));
    const unlockButton = document.getElementById("unlock-vault");
    unlockButton.addEventListener("click", (e) => {
        sendPlatformMessage({
            command: "bgReopenUnlockPopout",
        });
    });
}
/**
 * Sets up a port to communicate with the fileless importer content script.
 * This connection to the background script is used to trigger the action of
 * downloading the CSV file from the LP importer or importing the data into
 * the Bitwarden vault.
 */
function handleTypeFilelessImport() {
    const importType = notificationBarIframeInitData.importType;
    const port = chrome.runtime.connect({ name: FilelessImportPort.NotificationBar });
    setContent(document.getElementById("template-fileless-import"));
    const startFilelessImportButton = document.getElementById("start-fileless-import");
    const startFilelessImport = () => {
        port.postMessage({ command: "startFilelessImport", importType });
        document.getElementById("fileless-import-buttons").textContent =
            chrome.i18n.getMessage("importing");
        startFilelessImportButton.removeEventListener("click", startFilelessImport);
    };
    startFilelessImportButton.addEventListener("click", startFilelessImport);
    const cancelFilelessImportButton = document.getElementById("cancel-fileless-import");
    cancelFilelessImportButton.addEventListener("click", () => {
        port.postMessage({ command: "cancelFilelessImport", importType });
    });
    const handlePortMessage = (msg) => {
        if (msg.command !== "filelessImportCompleted" && msg.command !== "filelessImportFailed") {
            return;
        }
        port.disconnect();
        const filelessImportButtons = document.getElementById("fileless-import-buttons");
        const notificationBarOuterWrapper = document.getElementById("notification-bar-outer-wrapper");
        if (msg.command === "filelessImportCompleted") {
            filelessImportButtons.textContent = chrome.i18n.getMessage("dataSuccessfullyImported");
            filelessImportButtons.classList.add("success-message");
            notificationBarOuterWrapper.classList.add("success-event");
            return;
        }
        filelessImportButtons.textContent = chrome.i18n.getMessage("dataImportFailed");
        filelessImportButtons.classList.add("error-message");
        notificationBarOuterWrapper.classList.add("error-event");
        logService.error(`Error Encountered During Import: ${msg.importErrorMessage}`);
    };
    port.onMessage.addListener(handlePortMessage);
}
function setContent(template) {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const newElement = template.content.cloneNode(true);
    content.appendChild(newElement);
}
function sendPlatformMessage(msg, responseCallback) {
    chrome.runtime.sendMessage(msg, (response) => {
        if (responseCallback) {
            responseCallback(response);
        }
    });
}
function loadFolderSelector() {
    const populateFolderData = (folderData) => {
        const select = document.getElementById("select-folder");
        if (!(folderData === null || folderData === void 0 ? void 0 : folderData.length)) {
            select.appendChild(new Option(chrome.i18n.getMessage("noFoldersFound"), null, true));
            select.setAttribute("disabled", "true");
            return;
        }
        select.appendChild(new Option(chrome.i18n.getMessage("selectFolder"), null, true));
        folderData.forEach((folder) => {
            // Select "No Folder" (id=null) folder by default
            select.appendChild(new Option(folder.name, folder.id || "", false));
        });
    };
    sendPlatformMessage({ command: "bgGetFolderData" }, populateFolderData);
}
function getSelectedFolder() {
    return document.getElementById("select-folder").value;
}
function removeIndividualVault() {
    return notificationBarIframeInitData.removeIndividualVault;
}
function adjustHeight() {
    const data = {
        height: document.querySelector("body").scrollHeight,
    };
    sendPlatformMessage({
        command: "bgAdjustNotificationBar",
        data,
    });
}
function setupWindowMessageListener() {
    globalThis.addEventListener("message", handleWindowMessage);
}
function handleWindowMessage(event) {
    if (!windowMessageOrigin) {
        windowMessageOrigin = event.origin;
    }
    if (event.origin !== windowMessageOrigin) {
        return;
    }
    const message = event.data;
    const handler = notificationBarWindowMessageHandlers[message.command];
    if (!handler) {
        return;
    }
    handler({ message });
}
function setupLogoLink(i18n) {
    const logoLink = document.getElementById("logo-link");
    logoLink.title = i18n.appName;
    const setWebVaultUrlLink = (webVaultURL) => {
        const newVaultURL = webVaultURL && decodeURIComponent(webVaultURL);
        if (newVaultURL && newVaultURL !== logoLink.href) {
            logoLink.href = newVaultURL;
        }
    };
    sendPlatformMessage({ command: "getWebVaultUrlForNotification" }, setWebVaultUrlLink);
}
function setNotificationBarTheme() {
    let theme = notificationBarIframeInitData.theme;
    if (theme === ThemeType.System) {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? ThemeType.Dark
            : ThemeType.Light;
    }
    document.documentElement.classList.add(`theme_${theme}`);
}
function postMessageToParent(message) {
    window.parent.postMessage(message, windowMessageOrigin || "*");
}

})();

/******/ })()
;