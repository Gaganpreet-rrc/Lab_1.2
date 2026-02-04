// It runs the validation and and keep form clean.
import { useState } from "react";

export function useFormInput(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setMessage("");
  };

  const validate = (validator: (value: string) => string | null | undefined) => {
    const result = validator(value);
    if (result) {
      setMessage(result);
      return false;
    }
    return true;
  };

  return {
    value,
    onChange,
    message,
    validate,
    setValue,
  };
}
