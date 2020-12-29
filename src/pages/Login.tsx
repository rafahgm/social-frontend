import React, { useState } from "react";
import { useAppState } from "../AppContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useAppState();

    function attemptLogin() {
        fetch("http://localhost:3333/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ email: email, password: password }),
        }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    dispatch({ type: "LOG_IN", payload: data.token });
                });
            }
        });
    }
    return (
        <div className="container">
            <div className="background-image"></div>
            <div className="login">
                <div className="login__inputs">
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login__buttons">
                    <button
                        onClick={() => {
                            attemptLogin();
                        }}
                    >
                        Entar
                    </button>
                    <button>Criar conta</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
