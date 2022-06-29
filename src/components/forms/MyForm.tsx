import { Button, HStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import { useCallback } from "react";
import FormCheckbox from "./utils/FormCheckbox";
import FormInput from "./utils/FormInput";
import FormRadio from "./utils/FormRadio";
import FormSelect from "./utils/FormSelect";

type myFormProps = {
  onSubmit: (values: object) => void;
};

export const MyForm = ({ onSubmit }: myFormProps) => {
  const handleSubmit = useCallback(
    (values: object) => {
      onSubmit(values);
    },
    [onSubmit]
  );

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        radioButton: "",
        checkBoxes: [],
        selectValue: "",
      }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <FormInput
            id="firstName"
            name="firstName"
            placeholder="First Name"
            label="First Name"
          />
          <FormInput
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            label="Last Name"
          />

          <FormInput
            id="email"
            name="email"
            placeholder="Email"
            label="Email"
            type="email"
          />
          <FormSelect
            name="selectValue"
            label="Select an option"
            placeholder="View options"
            data={["Option 1", "Option 2", "Option 3", "Option 4"]}
          />
          <FormRadio
            direction="row"
            name="radioButton"
            label="Select a radio button"
            data={["Radio1", "Radio2", "Radio3", "Radio4"]}
          />
          <FormCheckbox
            direction="row"
            name="checkBoxes"
            label="Select some checkboxes"
            data={["CheckBox1", "CheckBox2", "CheckBox3", "CheckBox4"]}
          />

          <HStack py={4} spacing={4}>
            <Button type="submit">Submit</Button>
            <Button type="reset">Reset Form</Button>
          </HStack>
        </Form>
      )}
    </Formik>
  );
};
