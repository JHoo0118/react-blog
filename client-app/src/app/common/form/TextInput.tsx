import React from "react";
import { FieldRenderProps } from "react-final-form";

interface IProps extends FieldRenderProps<string, HTMLElement> {}

const TextInput: React.FC<IProps> = ({
  input,
  placeholder,
  meta: { touched, error },
  inputOnChange,
}) => {
  const inputProps = {
    ...input,
    onChange: (e: any) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };
  return (
    <div className={"form__group"}>
      <input
        {...inputProps}
        placeholder={placeholder}
        type={inputProps.type}
        className={
          "form__input " + (touched && !!error ? "form__input__error" : "")
        }
      />
      {touched && error && <span className="form__error-message">{error}</span>}
    </div>
  );
};

export default TextInput;
