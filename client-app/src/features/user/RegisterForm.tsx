import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form } from "semantic-ui-react";
import TextInput from "../../app/common/form/TextInput";
import { RootStoreContext } from "../../app/stores/rootStore";
import { IUserFormValues } from "../../app/models/user";
import { FORM_ERROR } from "final-form";
import { combineValidators, isRequired } from "revalidate";
import ErrorMessage from "../../app/common/form/ErrorMessage";
import LoginForm from "./LoginForm";

const validate = combineValidators({
  username: isRequired({ message: "필수 입력 항목입니다." }),
  displayName: isRequired({ message: "필수 입력 항목입니다." }),
  email: isRequired({ message: "필수 입력 항목입니다." }),
  password: isRequired({ message: "필수 입력 항목입니다." }),
});

const RegisterForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;
  const { openModal } = rootStore.modalStore;
  return (
    <FinalForm
      onSubmit={(values: IUserFormValues) =>
        register(values).catch((error) => ({
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
              <h2 className="user__form__header">HOOBLOG 회원가입</h2>

              <Field
                name="username"
                component={TextInput}
                placeholder="사용자 명"
              />
              <Field
                name="displayName"
                component={TextInput}
                placeholder="닉네임"
              />
              <Field name="email" component={TextInput} placeholder="이메일" />
              <Field
                name="password"
                component={TextInput}
                placeholder="비밀번호"
                type="password"
              />
              {submitError && !dirtySinceLastSubmit && (
                <ErrorMessage internalError={true} error={submitError} />
              )}
            </div>
            <button
              type="submit"
              className={
                "btn btn--blue width--full font-size--md " +
                ((invalid && !dirtySinceLastSubmit) || pristine
                  ? "disabled"
                  : "")
              }
              disabled={(invalid && !dirtySinceLastSubmit) || pristine}
            >
              {submitting && (
                <i className="fas fa-circle-notch fa-spin loading"></i>
              )}
              회원가입
            </button>
            <div className="user__form__footer">
              <span>이미 계정이 있으신가요?&nbsp;</span>
              <span
                className="user__form__footer__link"
                onClick={() => openModal(<LoginForm />)}
              >
                로그인
              </span>
            </div>
          </div>
        </Form>
      )}
    />
  );
};

export default RegisterForm;
