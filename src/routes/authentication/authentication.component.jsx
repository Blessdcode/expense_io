import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

import {AuthenticationContainer} from "./authentication.style"

const Authentication = () =>{
    return (
      <AuthenticationContainer>
        <SignUpForm />
        <SignInForm />
      </AuthenticationContainer>
    );
}

export default Authentication