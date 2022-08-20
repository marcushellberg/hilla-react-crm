import {atom} from "recoil";
import {CrmEndpoint} from "Frontend/generated/endpoints";

const companyListState = atom({
  key: 'companies',
  default: CrmEndpoint.getCompanies()
})


export {
  companyListState
}