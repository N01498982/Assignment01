import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

export const UserLogin = () => {
    console.log("Clothing is generated");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (event) => {
        navigate("/Marketplace");
    };
    const form = (
        <>
            <div className="first">
                <div className="second">
                    <div className="banner">
                        <h1>mystore.ca</h1>
                        <input
                            type="text"
                            value={username}
                            placeholder="Your Username"
                            className="detail"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <div className="password">
                            <input
                                type="password"
                                value={password}
                                placeholder="Your Password"
                                className="detail"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <div className="login-button">
                                <button
                                    disabled={username.length === 0 || password.length === 0}
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    return form;
};
