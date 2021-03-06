import { Formik, Field, Form } from "formik";
import { useCallback } from "react";

type myFormProps = {
  onSubmit: (values: object) => null;
};

export const MyForm = ({ onSubmit }: myFormProps) => {
  const handleSubmit = useCallback(
    (values: object) => {
      onSubmit(values);
    },
    [onSubmit]
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
