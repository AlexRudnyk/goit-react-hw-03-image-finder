import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Input } from './Searchbar.styled';

const schema = yup.object().shape({
  searchInput: yup
    .string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('This field can not be empty'),
});

const initialValues = {
  searchInput: '',
};

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <header>
        <Form>
          <button type="submit">
            <span>Search</span>
          </button>

          <Input
            name="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchInput" />
        </Form>
      </header>
    </Formik>
  );
};

export default Searchbar;
