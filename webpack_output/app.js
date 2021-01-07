/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "webpack_output";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Address.js":
/*!********************!*\
  !*** ./Address.js ***!
  \********************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Address\", function() { return Address; });\nclass Address {\r\n    // street;\r\n    // city;\r\n    // state;\r\n    // zip;\r\n\r\n    constructor(street, city, state, zip) {\r\n        this.street = street;\r\n        this.city = city;\r\n        this.state = state;\r\n        this.zip = zip;\r\n    }\r\n\r\n    render() {\r\n        const innerHTML = `\r\n        <p>${this.street}</p>\r\n        <p>${this.city}</p>\r\n        <p>${this.state}</p>\r\n        <p>${this.zip}</p>\r\n      `;\r\n        return innerHTML;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./Address.js?");

/***/ }),

/***/ "./Contacts.js":
/*!*********************!*\
  !*** ./Contacts.js ***!
  \*********************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Contact\", function() { return Contact; });\n/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address */ \"./Address.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ \"./globals.js\");\n\r\n\r\n\r\nclass Contact {\r\n    // id;\r\n    // name;\r\n    // address;\r\n    // phone;\r\n\r\n    constructor(id /* Number */, name /* String */, address /* Address object */, phone /* String */) {\r\n        if (id === null) {\r\n            this.id = Math.random().toString()\r\n        } else {\r\n            this.id = id\r\n        };\r\n        this.name = name;\r\n        this.address = address;\r\n        this.phone = phone;\r\n        this.isNewContact = false;\r\n    }\r\n\r\n    renderUpdate() {\r\n        const updateContactElement = document.createElement('div');\r\n        updateContactElement.innerHTML = `\r\n        <div id=\"addForm\">\r\n        <form id=\"form\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" value=\"${this.name}\"/>\r\n            <label for=\"street\">Street</label>\r\n            <input type=\"text\" name=\"street\" id=\"street\" value=\"${this.address.street}\"/>\r\n            <label for=\"city\">City</label>\r\n            <input type=\"text\" name=\"city\" id=\"city\" value=\"${this.address.city}\"/>\r\n            <label for=\"state\">State</label>\r\n            <input type=\"text\" name=\"state\" id=\"state\" value=\"${this.address.state}\"/>\r\n            <label for=\"zip\">Zip Code</label>\r\n            <input type=\"text\" name=\"zip\" id=\"zip\" value=\"${this.address.zip}\"/>\r\n            <label for=\"phone\">Phone</label>\r\n            <input type=\"text\" name=\"phone\" id=\"phone\" value=\"${this.phone}\"/>\r\n        </form>\r\n        <div class=\"actions\">\r\n            <button id=\"cancelUpdateContactButton\">Cancel</button>\r\n            <button id=\"saveUpdateContactButton\">Save</button>\r\n        </div>\r\n    </div>\r\n    `;\r\n\r\n        const updateForm = document.getElementById('updateForm');\r\n        updateForm.append(updateContactElement);\r\n\r\n        // Making cancelUpdateContactButton works:\r\n        const cancelUpdateContactButton = document.getElementById('cancelUpdateContactButton');\r\n        cancelUpdateContactButton.addEventListener('click', window.showAllContacts);\r\n\r\n        // Making saveUpdateContactButton works:\r\n        const saveUpdateContactButton = document.getElementById('saveUpdateContactButton');\r\n        saveUpdateContactButton.addEventListener('click', this.saveUpdatedContactHandler.bind(this));\r\n    }\r\n\r\n    async fetchContacts() {  \r\n        // first delete all the contacts in the array\r\n        _globals__WEBPACK_IMPORTED_MODULE_1__[\"contacts\"].splice(0,_globals__WEBPACK_IMPORTED_MODULE_1__[\"contacts\"].length);\r\n\r\n        let response = await fetch('https://phone-contacts-service-cgpil.ondigitalocean.app/getAllContacts', {\r\n            method: 'GET'\r\n        });\r\n        const contactJson = await response.json();\r\n        for (const cj of contactJson) {\r\n            const myContact = new Contact(\r\n                cj.id,\r\n                cj.name,\r\n                new _Address__WEBPACK_IMPORTED_MODULE_0__[\"Address\"](cj.address.street, cj.address.city, cj.address.state, cj.address.zip),\r\n                cj.phone\r\n            )\r\n            _globals__WEBPACK_IMPORTED_MODULE_1__[\"contacts\"].push(myContact);\r\n        }\r\n        console.log(_globals__WEBPACK_IMPORTED_MODULE_1__[\"contacts\"]);\r\n        window.showAllContacts();\r\n    }\r\n    \r\n\r\n    async saveUpdatedContactHandler() {\r\n        this.name = document.getElementById('name').value;\r\n        this.address.street = document.getElementById('street').value;\r\n        this.address.city = document.getElementById('city').value;\r\n        this.address.state = document.getElementById('state').value;\r\n        this.address.zip = document.getElementById('zip').value;\r\n        this.phone = document.getElementById('phone').value;\r\n\r\n        if (this.isNewContact === true) {\r\n            let response = await fetch('https://phone-contacts-service-cgpil.ondigitalocean.app/addContact', {\r\n                method: 'POST',\r\n                body: JSON.stringify(this),\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                }\r\n            });\r\n\r\n            const contactJson = await response.json();\r\n            console.log(contactJson);\r\n            _globals__WEBPACK_IMPORTED_MODULE_1__[\"contacts\"].push(this);\r\n            this.isNewContact = false;\r\n        } else {\r\n            let response = await fetch('https://phone-contacts-service-cgpil.ondigitalocean.app/updateContactByID', {\r\n            method: 'POST',\r\n            body: JSON.stringify(this),\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            }\r\n            });\r\n            \r\n            const contactJson = await response.json();\r\n            console.log(contactJson);\r\n        }\r\n\r\n        window.showAllContacts();\r\n    }\r\n\r\n    async deleteContactHandler() {\r\n        let response = await fetch('https://phone-contacts-service-cgpil.ondigitalocean.app/deleteContactByID', {\r\n            method: 'POST',\r\n            body: JSON.stringify(this),\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            }\r\n        });\r\n    \r\n        const contactJson = await response.json();\r\n        console.log(contactJson);\r\n    \r\n       this.fetchContacts();\r\n    }\r\n    \r\n    render() {\r\n        const newContactElement = document.createElement('div');\r\n        const addressHtml = this.address.render();\r\n\r\n        newContactElement.innerHTML = `\r\n      <div class='contact-element'>\r\n        <b>${this.name}</b>\r\n         ${addressHtml}\r\n        <p>${this.phone}</p>\r\n        <button class= \"deleteContactButton\" id=\"deleteContactButton${this.id}\">Delete</button>\r\n        <button class=\"updateContactButton\" id=\"updateContactButton${this.id}\">Update</button>\r\n      </div>\r\n    `;\r\n        const contactsList = document.getElementById('contacts');\r\n        contactsList.append(newContactElement);\r\n\r\n        const updateContactButton = document.getElementById('updateContactButton' + this.id);\r\n        updateContactButton.addEventListener('click', this.renderUpdate.bind(this));\r\n\r\n        const deleteContactButton = document.getElementById('deleteContactButton' + this.id);\r\n        deleteContactButton.addEventListener('click', this.deleteContactHandler.bind(this));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Contacts.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts */ \"./Contacts.js\");\n/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address */ \"./Address.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ \"./globals.js\");\n\r\n\r\n\r\n\r\n//let contacts = [];\r\n\r\nconst addNewContactHandler = () => {\r\n    const c = new _Contacts__WEBPACK_IMPORTED_MODULE_0__[\"Contact\"](null, '', new _Address__WEBPACK_IMPORTED_MODULE_1__[\"Address\"]('', '', '', ''), '');\r\n    c.isNewContact = true;\r\n    c.renderUpdate();\r\n}\r\n\r\nconst showAllContacts = () => {\r\n    //  const updateList = document.getElementById('contacts');\r\n    removeAllChildNodes('contacts');\r\n    // const updateForm = document.getElementById('updateForm');\r\n    removeAllChildNodes('updateForm');\r\n    for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_2__[\"contacts\"].length; i++) {\r\n        _globals__WEBPACK_IMPORTED_MODULE_2__[\"contacts\"][i].render();\r\n    }\r\n}\r\n\r\nconst removeAllChildNodes = (nodeID /* String */ ) => {\r\n    const parent = document.getElementById(nodeID);\r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n}\r\n\r\nconst c1 = new _Contacts__WEBPACK_IMPORTED_MODULE_0__[\"Contact\"]();\r\nc1.fetchContacts();  // This is the entry point of the app: first line of execution.\r\n\r\nwindow.showAllContacts = showAllContacts;\r\n\r\nconst addNewContactButton = document.getElementById('addNewContactButton');\r\naddNewContactButton.addEventListener('click', addNewContactHandler);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./globals.js":
/*!********************!*\
  !*** ./globals.js ***!
  \********************/
/*! exports provided: contacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contacts\", function() { return contacts; });\nconst contacts = [];\n\n//# sourceURL=webpack:///./globals.js?");

/***/ })

/******/ });