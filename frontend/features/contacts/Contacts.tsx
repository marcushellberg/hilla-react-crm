import {Button, Grid, GridColumn, TextField} from "react-vaadin-components";
import ContactForm from "./ContactForm";
import {useRecoilState, useRecoilValue} from "recoil";
import {Suspense} from "react";
import {filteredContacts, filterState, selectedContactState} from "Frontend/features/contacts/contactViewState";
import {TextFieldChangeEvent} from "@vaadin/text-field";
import {GridActiveItemChangedEvent} from "@vaadin/grid";
import Contact from "Frontend/generated/com/example/application/data/entity/Contact";
import ContactModel from "Frontend/generated/com/example/application/data/entity/ContactModel";


export default function Contacts() {
  const contacts = useRecoilValue(filteredContacts);
  const [filter, setFilter] = useRecoilState(filterState);
  const [selectedContact, setSelectedContact] = useRecoilState(selectedContactState);

  const filterChanged = (e: Event) => setFilter((e as TextFieldChangeEvent).target.value);
  // TODO: fix type
  const handleGridSelection = (e: GridActiveItemChangedEvent<any>) => {
    setSelectedContact(e.detail.value as Contact);
  }
  const addContact = () => setSelectedContact(ContactModel.createEmptyValue());

  return (
    <div className="box-border flex flex-col p-m gap-s w-full h-full">
      <div className="toolbar flex gap-s">
        <TextField
          placeholder="Filter by name"
          clear-button-visible
          value={filter}
          onInput={filterChanged}
        />
        <Button onClick={addContact}>Add Contact</Button>
      </div>
      <div className="content flex gap-m h-full">
        <Suspense fallback={<div>Loading contacts...</div>}>
          <Grid
            className="h-full"
            items={contacts}
            onActiveItemChanged={handleGridSelection}
            selectedItems={[selectedContact]}
          >
            <GridColumn path="firstName" auto-width/>
            <GridColumn path="lastName" auto-width/>
            <GridColumn path="status.name" header="Status" auto-width/>
            <GridColumn path="company.name" header="Company" auto-width/>
          </Grid>
        </Suspense>
        {selectedContact && <ContactForm/>}
      </div>
    </div>
  )
}