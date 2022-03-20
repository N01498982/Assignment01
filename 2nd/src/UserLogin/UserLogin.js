import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

export const UserLogin = ({ username, setUsername, password, setPassword, setownerOnly }) => {
    console.log();
    const storeOwner = { username: "admin", password: "admin" };
    const navigate= useNavigate();
    const handleLogin = (event) => {
        navigate("/admin");
        if (username === storeOwner.username && password === storeOwner.password) {
            setownerOnly("admin");
        } else {
            setownerOnly("customer");
        }
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
