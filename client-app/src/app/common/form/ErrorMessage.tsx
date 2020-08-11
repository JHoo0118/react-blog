import React from "react";
import { AxiosResponse } from "axios";
import { Message } from "semantic-ui-react";

interface IProps {
  error: AxiosResponse;
  text?: string;
  internalError: boolean;
}

const ErrorMessage: React.FC<IProps> = ({ error, text, internalError }) => {
  return (
    <Message error className="margin-bottom-sm">
      {/* <Message.Header>{error.statusText}</Message.Header> */}
      {internalError &&
        error.data &&
        Object.keys(error.data.errors).length > 0 && (
          <Message.List>
            {Object.values(error.data.errors)
              .flat()
              .map((err: any, i) => (
                <Message.Item key={i}>{err}</Message.Item>
              ))}
          </Message.List>
        )}
      <div className="font-size--md">
        {text && <Message.Content content={text} />}
      </div>
    </Message>
  );
};

export default ErrorMessage;
