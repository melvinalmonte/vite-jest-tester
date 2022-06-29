import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
  StackDirection,
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";

interface FormCheckboxProps {
  helperText?: string;
  label: string;
  data: string[];
  direction: StackDirection;
}
const FormCheckbox = (props: FormCheckboxProps & FieldHookConfig<string>) => {
  const { helperText, label, name, direction, data } = props;
  const [field] = useField(props);
  return (
    <FormControl py={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <CheckboxGroup>
        <Stack direction={direction}>
          {data.map((value) => (
            <Checkbox
              key={value}
              aria-label={value}
              id={value}
              {...field}
              value={value}
            >
              {value}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default FormCheckbox;
