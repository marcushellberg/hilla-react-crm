import {Button, ComboBox, EmailField, TextField} from "react-vaadin-components";
import {useRecoilValue} from "recoil";
import {companyListState} from "Frontend/state/companyState";
import {statusesState} from "Frontend/state/contactState";

export default function ContactForm() {
  const companies = useRecoilValue(companyListState);
  const statuses = useRecoilValue(statusesState);

  return (
    <div className="flex flex-col gap-s">
      <TextField label="First name"/>

      <TextField label="Last name"/>
      <EmailField label="Email"/>
      <ComboBox label="Status" items={statuses} itemLabelPath="name"/>
      <ComboBox label="Company" items={companies} itemLabelPath="name"/>

      <div className="flex gap-s">
        <Button theme="primary">Save</Button>
        <Button theme="error">Delete</Button>
        <Button theme="tertiary">Cancel</Button>
      </div>
    </div>
  );
}