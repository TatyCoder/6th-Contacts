import { Contact } from './Contacts';
import { Address } from './Address';
import { contacts } from './globals';

const addNewContactHandler = () => {
    const c = new Contact(null, '', new Address('', '', '', ''), '');
    c.isNewContact = true;
    c.renderUpdate();
}

const showAllContacts = () => {
    //  const updateList = document.getElementById('contacts');
    removeAllChildNodes('contacts');
    // const updateForm = document.getElementById('updateForm');
    removeAllChildNodes('updateForm');
    for (let i = 0; i < contacts.length; i++) {
        contacts[i].render();
    }
}

const removeAllChildNodes = (nodeID /* String */ ) => {
    const parent = document.getElementById(nodeID);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const c1 = new Contact();
c1.fetchContacts();  // This is the entry point of the app: first line of execution.

window.showAllContacts = showAllContacts;

const addNewContactButton = document.getElementById('addNewContactButton');
addNewContactButton.addEventListener('click', addNewContactHandler);