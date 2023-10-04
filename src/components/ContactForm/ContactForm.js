import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { PatternFormat } from 'react-number-format';

export const ContactForm = () => {
  const NameSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .matches(
        /^[A-Za-zА-Яа-яЄєІіЇїҐґ\s]+$/,
        'Only alphabets and spaces are allowed'
      )
      .required('Required'),
    number: Yup.string()
      .required('Required')
      .matches(/^\+1 \(\d{3}\) \d{4} \d{3}$/, 'Invalid format!'),
  });
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    
   
    const newContact = {
      name: values.name,
      phone: values.number,
    };

    dispatch(addContact(newContact))
    action.resetForm();
  };

   const handleNumberChange =
     form =>
     ({ formattedValue }) => {
       form.setFieldValue('number', formattedValue);
     };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={NameSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field>
            <label>Name</label>
            <Field type="text" name="name" placeholder="John Doe" />
            <ErrorMessage name="name" component="div" />
          </Field>

          <div>
            <label>Number</label>
            <Field name="number">
              {({ field, form }) => (
                <PatternFormat
                  format="+1 (###) #### ###"
                  allowEmptyFormatting
                  mask="_"
                  value={form.values.number}
                  onValueChange={handleNumberChange(form)}
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage name="number" component="div" />
          </div>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </>
  );
};
