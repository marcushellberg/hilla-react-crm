import {atom} from "recoil";
import {CrmEndpoint} from "Frontend/generated/endpoints";

const contactListState = atom({
  key: 'contacts',
  default: CrmEndpoint.getContacts()
})

const statusesState = atom({
  key: 'statuses',
  default: CrmEndpoint.getStatuses()
})

export {
  contactListState,
  statusesState
}