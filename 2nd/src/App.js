import React, { useState } from "react";
import { UserLogin } from "./UserLogin/UserLogin";
export function App() {

  console.log("App rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <UserLogin
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
}
