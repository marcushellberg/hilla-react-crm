import {Button, ComboBox, EmailField, TextField} from "react-vaadin-components";
import {useFormik} from "formik";
import * as yup from 'yup';
import {useSelector} from "react-redux";
import {RootState} from "Frontend/app/store";

export default function ContactForm() {
  const companies = useSelector((state: RootState) => state.contacts.companies);
  const statuses = useSelector((state: RootState) => state.contacts.statuses);
  const selectedContact = useSelector((state: RootState) => state.contacts.selected);

  const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Enter a valid email').required('Last name is required'),
    status: yup.number().required('Select a status'),
    company: yup.number().required('Select a company')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: 0,
      status: 0
    },
    validationSchema,
    onSubmit: (values) => {

    }
  });


  return (
    <form className="flex flex-col gap-s">
      <TextField label="First name"
                 name="firstName"
                 value={formik.values.firstName}
                 onChange={formik.handleChange}
                 errorMessage={(formik.touched.firstName && Boolean(formik.errors.firstName)) ? formik.errors.firstName : ''}/>
      <TextField label="Last name"
                 name="lastName"
                 value={formik.values.lastName}
                 onChange={formik.handleChange}
                 errorMessage={(formik.touched.lastName && Boolean(formik.errors.lastName)) ? formik.errors.lastName : ''}/>
      <EmailField label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  errorMessage={(formik.touched.email && Boolean(formik.errors.email)) ? formik.errors.email : ''}/>

      <ComboBox label="Status"
                name="status"
                items={statuses}
                itemLabelPath="name"
        // value={formik.values.status}
                onChange={formik.handleChange}
                errorMessage={(formik.touched.status && Boolean(formik.errors.status)) ? formik.errors.status : ''}/>
      <ComboBox label="Company"
                name="company"
                items={companies}
                itemLabelPath="name"
        // value={formik.values.company}
                onChange={formik.handleChange}
                errorMessage={(formik.touched.company && Boolean(formik.errors.company)) ? formik.errors.company : ''}/>

      <div className="flex gap-s">
        <Button theme="primary">Save</Button>
        <Button theme="error">Delete</Button>
        <Button theme="tertiary">Cancel</Button>
      </div>
    </form>
  );
}