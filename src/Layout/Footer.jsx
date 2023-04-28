import './Footer.css'

export default function Footer() {
    return (
        <footer>
        <section class="top">
            <div class="logo-footer">
                <a href="../index/konten.html">
                    <img src="../media/logo.png" alt=""/>
                </a>
            </div>

            <div id="company" class="content">
                <div class="judul">
                    <h1> Company </h1>
                </div>
                
                <div class="link">
                    <a href=""> About Us </a>
                    <a href=""> Informasi Penyakit </a>
                    <a href=""> Obat & Suplemen </a>
                    <a href=""> Janji Medis </a>
                    <a href=""> Contact Us </a>
                </div>
            </div>

            <div id="support" class="content">
                <div class="judul">
                    <h1> Support </h1>
                </div>

                <div class="link">
                    <p> Help Center </p>
                    <p> Privacy Policy </p>
                    <p> Terms & Conditions </p>
                    <p> Security & Safety </p>
                    <p> Cookie Center </p>
                </div>
            </div>

            <div id="app" class="content">
                <div class="judul">
                    <h1> Mobile App </h1>
                </div>

                <div class="gambar">
                    <img src="media/1.png" alt="" id="play-store"/>
    
                    <img src="media/2.png" alt="" id="app-store"/>
                </div>
            </div>
        </section>

        <section class="bottom">
            <div class="left">
                <p> © 2023 HeyHealth Corporation </p>
            </div>

            <div class="right">
                <p> All rights reserved </p>
            </div>
        </section>
    </footer>
    )
}