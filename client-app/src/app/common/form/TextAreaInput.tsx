import React from "react";
import { FieldRenderProps } from "react-final-form";

interface IProps extends FieldRenderProps<string, HTMLElement> {}

const TextAreaInput: React.FC<IProps> = ({
  input,
  rows,
  placeholder,
  meta: { touched, error },
  inputOnChange,
  style,
}) => {
  const inputProps = {
    ...input,
    onChange: (e: any) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };
  return (
    <div className="form__group ">
      <textarea
        {...inputProps}
        rows={rows}
        placeholder={placeholder}
        className={
          "form__textarea " +
          (touched && !!error ? "form__textarea__error" : "")
        }
        style={style}
      />
      {touched && error && <span className="form__error-message">{error}</span>}
    </div>
  );
};

export default TextAreaInput;
