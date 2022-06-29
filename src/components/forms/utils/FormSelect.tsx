import { FieldHookConfig, useField } from "formik";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";

interface FormSelectProps {
  helperText?: string;
  label: string;
  data: string[];
  placeholder: string;
}
const FormSelect = (props: FormSelectProps & FieldHookConfig<string>) => {
  const { helperText, label, name, data, placeholder } = props;
  const [field] = useField(props);
  return (
    <FormControl py={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select placeholder={placeholder} {...field}>
        {data.map((value) => (
          <option key={value} aria-label={value} id={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default FormSelect;
