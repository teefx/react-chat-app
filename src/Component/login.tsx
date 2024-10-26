import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleSignup = () => {
    const data = {
      email,
      password,
      passwordAgain,
    };
    console.log(data);
  };
  const handleSignin = () => {
    const data = {
      email,
      password,
    };
    console.log(data);
  };
  return (
    <div className="w-full lg:w-1/3 md:w-1/2 mx-auto p-10">
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
        {login ? "Login" : "Register"}
      </h1>
      <div className=" flex flex-col gap-3 bg-white p-6 min-[150px] drop-shadow-2xl rounded-xl  ">
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!login && (
          <Input
            name="password again"
            type="password"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
        )}
        {login ? (
          <>
            {" "}
            <Button
              text="Login"
              onClick={handleSignin} />
            <Button
              onClick={() => setLogin(false)}
              text="Register"
              secondary
              className="hover:drop-shadow-lg "
            />
          </>
        ) : (
          <>
            <Button
              onClick={handleSignup}
              text="Register"
              className="hover:drop-shadow-lg "
            />
            <Button secondary onClick={() => setLogin(true)} text="Login" />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
