import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Instantiate the use of the sser context
  const { setCurrentUser } = useContext(UserContext);

  // reset form
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Login with Google Popup
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password from this Email!");
          break;
        case "auth/user-not-found":
          alert("No User associated with this Email!");
          break;
        default:
          console.log(error);
      }

      console.log(error);
    }
  };

  // set state with user form input values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account ?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
