const SignUpForm = () => {
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor='displayName'>Display Name</label>
        <input type='text' required />

        <label htmlFor='email'>Email</label>
        <input type='email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' required />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' required />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
