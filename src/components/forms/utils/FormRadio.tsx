import { FieldHookConfig, useField } from "formik";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  StackDirection,
} from "@chakra-ui/react";

interface FormRadioProps {
  helperText?: string;
  label: string;
  data: string[];
  direction: StackDirection;
}
const FormRadio = (props: FormRadioProps & FieldHookConfig<string>) => {
  const { helperText, label, name, direction, data } = props;
  const [field] = useField(props);

  return (
    <FormControl py={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <RadioGroup>
        <Stack direction={direction}>
          {data.map((value) => (
            <Radio
              key={value}
              aria-label={value}
              id={value}
              {...field}
              value={value}
            >
              {value}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default FormRadio;
