import { FieldHookConfig, useField } from "formik";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface FormInputProps {
  helperText?: string;
  label: string;
}

const FormInput = (props: FormInputProps & FieldHookConfig<string>) => {
  const { helperText, label, name } = props;
  const [field] = useField(props);
  return (
    <FormControl py={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input aria-label={label} {...field} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default FormInput;
