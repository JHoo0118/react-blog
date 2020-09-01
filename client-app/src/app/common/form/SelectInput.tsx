import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps } from "semantic-ui-react";

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

const SelectInput: React.FC<IProps> = ({
  input,
  placeholder,
  meta: { touched, error },
  inputOnChange,
}) => {
  return (
    <div className={"form__group " + (touched && !!error ? "error" : "")}>
      <div className="form__select">
        <select
          name={input.name}
          value={input.value}
          onChange={inputOnChange}
          placeholder={placeholder}
          className="form__select--input"
        >
          <option key="none" value="" disabled hidden>
            카테고리
          </option>
          <option key="javascript" value="Javascript">
            Javascript
          </option>
          <option key="css" value="CSS">
            CSS
          </option>
          <option key="aspdotnet-core" value="ASP.NET Core">
            ASP.NET Core
          </option>
          <option key="python" value="Python">
            Python
          </option>
          <option key="react" value="React">
            React
          </option>
          <option key="IT" value="IT">
            IT
          </option>
        </select>
      </div>
      {touched && error && <span className="form__error-message">{error}</span>}
    </div>
  );
};

export default SelectInput;
