import {Button, Grid, GridColumn, TextField} from "react-vaadin-components";
import ContactForm from "./ContactForm";
import {TextFieldChangeEvent} from "@vaadin/text-field";
import {GridActiveItemChangedEvent} from "@vaadin/grid";
import Contact from "Frontend/generated/com/example/application/data/entity/Contact";
import {useSelector} from "react-redux";
import {getFilteredContacts, selectContact, updateFilter} from "Frontend/features/contacts/contactsSlice";
import {useAppDispatch} from "Frontend/app/hooks";
import {RootState} from "Frontend/app/store";


export default function Contacts() {
  const dispatch = useAppDispatch();
  const contacts = useSelector(getFilteredContacts);
  const selectedContact = useSelector((state: RootState) => state.contacts.selected);
  const filter = useSelector((state: RootState) => state.contacts.filterText);

  const filterChanged = (e: Event) => dispatch(updateFilter((e as TextFieldChangeEvent).target.value));

  // TODO: fix event type
  const handleGridSelection = (e: GridActiveItemChangedEvent<any>) => {
    dispatch(selectContact(e.detail.value as Contact));
  }

  const addContact = () => dispatch(selectContact({} as Contact));

  return (
    <div className="box-border flex flex-col p-m gap-s w-full h-full">
      <div className="toolbar flex gap-s">
        <TextField
          placeholder="Filter by name"
          clearButtonVisible
          value={filter}
          onInput={filterChanged}
        />
        <Button onClick={addContact}>Add Contact</Button>
      </div>
      <div className="content flex gap-m h-full">
        <Grid
          className="h-full"
          items={contacts}
          onActiveItemChanged={handleGridSelection}
          selectedItems={[selectedContact]}>
          <GridColumn path="firstName" auto-width/>
          <GridColumn path="lastName" auto-width/>
          <GridColumn path="status.name" header="Status" auto-width/>
          <GridColumn path="company.name" header="Company" auto-width/>
        </Grid>
        {selectedContact && <ContactForm/>}
      </div>
    </div>
  )
}