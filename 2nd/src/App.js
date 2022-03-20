import React, { useState } from "react";
import { Marketplace } from "./Marketplace/Marketplace";
import { UserLogin } from "./UserLogin/UserLogin";
import { RoleWrapper } from "./RoleWrapper";
export function App() {

  console.log();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [storeOwner, setownerOnly] = useState(false);

  return (
    <div className="App">
      <UserLogin
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        storeOwner={setownerOnly}
      />

      <RoleWrapper rolesAllowed={["admin"]} currentRole={storeOwner}>
        <Marketplace storeOwner = {storeOwner}/>
      </RoleWrapper>
    </div>
  );
}
