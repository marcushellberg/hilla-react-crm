import {atom, selector} from "recoil";
import {contactListState} from "Frontend/state/contactState";
import Contact from "Frontend/generated/com/example/application/data/entity/Contact";

const filterState = atom({
  key: 'contactListFilter',
  default: ''
});

const selectedContactState = atom<Contact | null>({
  key: 'selectedContact',
  default: null
})

const filteredContacts = selector({
  key: 'filteredContacts',
  get: ({get}) => {
    const filter = new RegExp(get(filterState), 'i');
    const contacts = get(contactListState);
    return contacts.filter((contact) =>
      filter.test(`${contact.firstName} ${contact.lastName}`)
    );
  }
});

export {
  filterState,
  filteredContacts,
  selectedContactState
}