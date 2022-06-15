import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  // Login with Google Popup
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>This is the Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>

      <SignUpForm />
    </div>
  );
};

export default Authentication;
