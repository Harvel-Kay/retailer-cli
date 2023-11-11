import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import PasswordInput from "../../passwordInput/passwordField";
import FormBtn from "../../formBtn/formbtn";
import FormG from "../../formG/formG";
import IError from "../../error/errorInput";

export default function Register() {
  const error = useActionData() as IError;
  const { state } = useNavigation();

  const formgCls = "grid auth-g";
  return (
    <Form method="post" className="login-cont grid">
      <Link to="/auth" className="_link login-title">
        Go to Login
      </Link>
      <FormG
        args={{ required: true, maxLength: 20, minLength: 3 }}
        brand="Username"
        error={error}
        pholder="Username"
        name="username"
        contClass={formgCls}
      />
      <FormG
        args={{ required: true, maxLength: 100, minLength: 3 }}
        brand="Email"
        error={error}
        pholder="Email"
        name="email"
        type="email"
        contClass={formgCls}
      />
      <FormG
        args={{ required: true, maxLength: 20, minLength: 3 }}
        brand="Password"
        error={error}
        pholder="Password"
        name="confirm"
        contClass={formgCls}
      />
      <PasswordInput error={error} contClass={formgCls} />

      <FormG
        args={{ required: true, maxLength: 20, minLength: 3 }}
        brand="Phone"
        error={error}
        pholder="Phone"
        type="number"
        name="phone"
        contClass={formgCls}
      />
      <FormBtn brand="Register" btn_event={() => {}} navState={state} />
    </Form>
  );
}
