import './Login.css'

export default function Login() {
    return (
        <section class="page">
            <div class="login">
                <div class="logo">
                    <img src="../media/logo.png" alt=""/>
                    <h5>
                        Say
                            <span class="slogan">
                                HEY!!!
                                
                            </span>
                        to your new healthy life with
                            <span class="hey">
                                Hey
                                <span class="health">
                                    Health
                                    <span class="titik">
                                        .
                                    </span>
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

                    <form action="">
                        <div class="input-container">
                            <input type="text" name="" id="" class="input" placeholder="Masukan username anda" required/>
                            <input type="password" name="" id="" class="input" placeholder="Masukan password anda" required/>
                        </div>

                        <div class="button-container">
                            <input type="submit" class="button" value="Log In"/>
                        </div>

                        <div class="forgot">
                            <a href=""> Forgot Password? </a>
                        </div>

                        <div class="signup">
                            <p>
                                Don't have an account?
                                <a href="../register/register.html">
                                    Register Now!
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
