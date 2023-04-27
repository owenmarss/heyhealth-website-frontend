import axios from "axios";
import "./Login.css";
import { useRef } from "react";

export default function Login() {
    const username_ref = useRef();
    const password_ref = useRef();
    async function login() {
        const res = await axios.post("http://localhost:8000/auth/login/", {
            username: username_ref.current.value,
            password: password_ref.current.value,
        });
        if (res.data.tokens) {
            localStorage.setItem("tokens", res.data.tokens);
            window.location.href = "/";
        }
        console.log(res);
    }
    return (
        <section class="page">
            <div class="login">
                <div class="logo">
                    <img src="../media/logo.png" alt="" />
                    <h5>
                        Say
                        <span class="slogan">HEY!!!</span>
                        to your new healthy life with
                        <span class="hey">
                            Hey
                            <span class="health">
                                Health
                                <span class="titik">.</span>
                            </span>
                        </span>
                        <span class="material-symbols-outlined">
                            waving_hand
                        </span>
                    </h5>
                </div>

                <div class="form-container">
                    <div class="judul">
                        <h1> Login </h1>
                    </div>

                    <div>
                        <div class="input-container">
                            <input
                                ref={username_ref}
                                type="text"
                                class="input"
                                placeholder="Masukan username anda"
                                required
                            />
                            <input
                                ref={password_ref}
                                type="password"
                                class="input"
                                placeholder="Masukan password anda"
                                required
                            />
                        </div>

                        <div class="button-container">
                            <input
                                onClick={login}
                                class="button"
                                value="Log In"
                            />
                        </div>

                        <div class="signup">
                            <p>
                                Don't have an account?
                                <a href="../register/register.html">
                                    Register Now!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
