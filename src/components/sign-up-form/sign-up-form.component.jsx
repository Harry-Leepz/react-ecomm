import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your passwords do not match!!");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='displayName'>Display Name</label>
        <input
          name='displayName'
          value={displayName}
          onChange={handleChange}
          type='text'
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          name='email'
          value={email}
          onChange={handleChange}
          type='email'
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          name='password'
          value={password}
          onChange={handleChange}
          type='password'
          autoComplete='on'
          required
        />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
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
