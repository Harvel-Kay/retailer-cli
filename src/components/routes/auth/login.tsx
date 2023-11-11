import { Form, useActionData, useNavigation } from "react-router-dom";
import FormG from "../../formG/formG";
import FormBtn from "../../formBtn/formbtn";
import IError from "../../error/errorInput";
import PasswordInput from "../../passwordInput/passwordField";
import "./styles.css";

export default function Login() {
  const { state } = useNavigation();
  const error = useActionData() as IError;
  return (
    <div className="login-cont grid">
      <p className="_link login-title">
        Admin Login
      </p>
      <Form method="post" className="auth-form grid">
        <FormG
          args={{ required: true, maxLength: 20, minLength: 3 }}
          brand="Username"
          error={error}
          pholder="username"
          name="username"
          contClass="grid"
        />
        <PasswordInput error={error} pholder="password" />
        <FormBtn brand="Login" btn_event={() => {}} navState={state} />
      </Form>
    </div>
  );
}
