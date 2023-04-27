import axios from "axios";
import "./Register.css";
import { useRef } from "react";

export default function Register() {
    const email_ref = useRef();
    const nama_lengkap_ref = useRef();
    const username_ref = useRef();
    const usia_ref = useRef();
    const nomor_telepon_ref = useRef();
    const password_ref = useRef();
    const confirm_password_ref = useRef();

    async function register() {
        if (password_ref.current.value === confirm_password_ref.current.value) {
            const res = await axios.post("http://localhost:8000/auth/signup/", {
                email: email_ref.current.value,
                nama_lengkap: nama_lengkap_ref.current.value,
                username: username_ref.current.value,
                usia: usia_ref.current.value,
                nomor_telepon: nomor_telepon_ref.current.value,
                password: password_ref.current.value,
            });
            if (res.status === 201) {
                window.location.href = "/login";
            }
        } else {
            console.log("beda password");
        }
    }
    return (
        <section class="page">
            <div class="register">
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
                        <h1> Register </h1>
                    </div>

                    <div>
                        <div class="input-container">
                            <input
                                ref={nama_lengkap_ref}
                                type="text"
                                class="input"
                                placeholder="Nama Lengkap"
                                required
                            />
                            <input
                                ref={username_ref}
                                type="text"
                                class="input"
                                placeholder="Username"
                                required
                            />
                            <input
                                ref={email_ref}
                                type="email"
                                class="input"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div class="menyamping">
                            <input
                                ref={usia_ref}
                                type="number"
                                id="umur"
                                class="input"
                                placeholder="Umur"
                                required
                            />
                            <input
                                ref={nomor_telepon_ref}
                                type="number"
                                id="nomor"
                                class="input"
                                placeholder="Nomor Telepon"
                                required
                            />
                        </div>

                        <div class="input-container">
                            <input
                                ref={password_ref}
                                type="password"
                                class="input"
                                placeholder="Password"
                                required
                            />
                            <input
                                ref={confirm_password_ref}
                                type="password"
                                class="input"
                                placeholder="Konfirmasi Password"
                                required
                            />
                        </div>

                        <div class="button-container">
                            <input
                                onClick={register}
                                class="button"
                                value="Sign Up"
                            />
                        </div>

                        <div class="signup">
                            <p>
                                Have an account?
                                <a href="/login">Login Now!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
