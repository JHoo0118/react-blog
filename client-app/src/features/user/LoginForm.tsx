import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form } from "semantic-ui-react";
import TextInput from "../../app/common/form/TextInput";
import { RootStoreContext } from "../../app/stores/rootStore";
import { IUserFormValues } from "../../app/models/user";
import { combineValidators, isRequired } from "revalidate";
import { FORM_ERROR } from "final-form";
import ErrorMessage from "../../app/common/form/ErrorMessage";
import RegisterForm from "./RegisterForm";

const validate = combineValidators({
  email: isRequired({ message: "필수 입력 항목입니다." }),
  password: isRequired({ message: "필수 입력 항목입니다." }),
});

const LoginForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;
  const { openModal } = rootStore.modalStore;
  return (
    <FinalForm
      onSubmit={(values: IUserFormValues) =>
        login(values).catch((error) => ({
          [FORM_ERROR]: error,
        }))
      }
      validate={validate}
      render={({
        handleSubmit,
        submitting,
        submitError,
        invalid,
        pristine,
        dirtySinceLastSubmit,
      }) => (
        <Form onSubmit={handleSubmit} error>
          <div className="user__form__content">
            <div className="user__form__logo">
              <i className="fas fa-code"></i>
            </div>
            <div className="user__form__content__field">
              <h2 className="user__form__header">HOOBLOG 로그인</h2>
              <Field name="email" component={TextInput} placeholder="이메일" />
              <Field
                name="password"
                component={TextInput}
                placeholder="비밀번호"
                type="password"
              />
              {submitError && !dirtySinceLastSubmit && (
                <ErrorMessage
                  internalError={false}
                  error={submitError}
                  text="이메일 혹은 비밀번호가 틀렸습니다."
                />
              )}
            </div>
            <button
              type="submit"
              className={
                "btn btn--blue width--full font-size--md margin-top-sm" +
                ((invalid && !dirtySinceLastSubmit) || pristine
                  ? "disabled"
                  : "")
              }
              disabled={(invalid && !dirtySinceLastSubmit) || pristine}
            >
              {submitting && (
                <i className="fas fa-circle-notch fa-spin loading"></i>
              )}
              로그인
            </button>
            <div className="user__form__footer">
              <span>아직 계정이 없으신가요?&nbsp;</span>
              <span
                className="user__form__footer__link"
                onClick={() => openModal(<RegisterForm />)}
              >
                회원가입
              </span>
            </div>
          </div>
        </Form>
      )}
    />
  );
};

export default LoginForm;
