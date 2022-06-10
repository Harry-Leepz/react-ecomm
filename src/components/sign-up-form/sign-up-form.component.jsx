import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // reset form
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check passwords match
    if (password !== confirmPassword) {
      alert("Your passwords do not match!!");
      return;
    }

    try {
      // create new user with email and password authentication
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // if new user is created via form, update the displayname using form data
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use!");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  // set state with user form input values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          name='displayName'
          value={displayName}
          onChange={handleChange}
          type='text'
          required
        />

        <FormInput
          label={"Email"}
          name='email'
          value={email}
          onChange={handleChange}
          type='email'
          required
        />

        <FormInput
          label={"Password"}
          name='password'
          value={password}
          onChange={handleChange}
          type='password'
          autoComplete='on'
          required
        />

        <FormInput
          label={"Confirm Password"}
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          type='password'
          autoComplete='on'
          required
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
