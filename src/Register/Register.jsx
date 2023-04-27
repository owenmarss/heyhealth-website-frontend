import './Register.css'

export default function Register() {
    return (
        <section class="page">
            <div class="register">
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
                        <h1> Register </h1>
                    </div>
    
                    <form action="">
                        <div class="input-container">
                            <input type="text" name="" id="" class="input" placeholder="Nama Lengkap" required/>
                            <input type="text" name="" id="" class="input" placeholder="Username" required/>
                            <input type="email" name="" id="" class="input" placeholder="Email" required/>
                        </div>
    
                        <div class="menyamping">
                            <input type="number" name="" id="umur" class="input" placeholder="Umur" required/>
                            <input type="text" name="" id="nomor" class="input" placeholder="Nomor Telepon" required/>
                        </div>
    
                        <div class="input-container">
                            <input type="password" name="" id="" class="input" placeholder="Password" required/>
                            <input type="password" name="" id="" class="input" placeholder="Konfirmasi Password" required/>
                        </div>
    
                        <div class="button-container">
                            <input type="submit" class="button" value="Sign Up"/>
                        </div>
    
                        <div class="signup">
                            <p>
                                Have an account?
                                <a href="">
                                    Login Now!
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}