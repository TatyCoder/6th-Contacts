import { Contact } from './Contacts';
import { Address } from './Address';
import { contacts } from './globals';

//let contacts = [];

async function fetchContacts() {
    let response = await fetch('https://phone-contacts-service-cgpil.ondigitalocean.app/getAllContacts', {
        method: 'GET'
    });
    const contactJson = await response.json();
    for (const cj of contactJson) {
        const myContact = new Contact(
            cj.id,
            cj.name,
            new Address(cj.address.street, cj.address.city, cj.address.state, cj.address.zip),
            cj.phone
        )
        contacts.push(myContact);
    }
    console.log(contacts);
    window.showAllContacts();
}

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

fetchContacts();  // This is the entry point of the app: first line of execution.

window.showAllContacts = showAllContacts;

const addNewContactButton = document.getElementById('addNewContactButton');
addNewContactButton.addEventListener('click', addNewContactHandler);