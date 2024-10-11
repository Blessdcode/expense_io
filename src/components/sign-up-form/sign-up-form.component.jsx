import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createAUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  updateUserProfile,
} from "../../config/firebaseConfig";

import Button from '../../components/buttons/button.copmonent'
import FormInput from "../form-input/form-input-component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const restFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const { user } = await createAUserWithEmailAndPassword(email, password);

      updateUserProfile({ displayName: formFields.displayName });
      await createUserDocumentFromAuth(user, { displayName });
      restFormFields();
      console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Don't have an account yet?</h2>
      <p>Create an account with email and password</p>
      <form onSubmit={handleSubmitForm}>
        <FormInput
          label="Full Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
