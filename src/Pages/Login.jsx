export default function Login() {
  return (
    <div className="login-container">
      <h1>Sign in to you account</h1>
      <form className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}
