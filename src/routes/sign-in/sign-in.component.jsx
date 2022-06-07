import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // Login with Google Popup
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>This is the Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
    </div>
  );
};

export default SignIn;
