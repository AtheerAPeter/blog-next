import { useRef, useEffect } from "react";
const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-page">
        <input
          ref={usernameRef}
          onKeyDown={(e) =>
            e.key == "Enter" ? passwordRef.current.focus() : ""
          }
          type="text"
          placeholder="username"
        />
        <input
          onKeyDown={(e) => (e.key == "Enter" ? buttonRef.current.focus() : "")}
          ref={passwordRef}
          type="password"
          placeholder="password"
        />
        <button ref={buttonRef}>Login</button>
      </div>
    </div>
  );
};

export default Login;
