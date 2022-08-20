import {selector} from "recoil";
import {contactListState} from "Frontend/state/contactState";

const contactCount = selector({
  key: 'contactCount',
  get: ({get}) => get(contactListState).length
})

const contactsPerCompany = selector({
  key: 'contactsPerCompany',
  get: ({get}) => {
    const countByCompany = get(contactListState).reduce((map, contact) => {
      const name = contact.company?.name || 'Unknown';
      return map.set(name, (map.get(name) || 0) + 1);
    }, new Map<string, number>());

    return Array.from(countByCompany.entries()).map(([company, employees]) => ({
      name: company,
      value: employees
    }));
  }
});

export {
  contactCount, contactsPerCompany
}