import { useEffect, useState } from "react";
import "./Konten.css";
import axios from "axios";

export default function Konten() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".index-content");
        hiddenElements.forEach((el) => observer.observe(el));

        getListPenyakit();
    }, []);

    const [ListPenyakit, setListPenyakit] = useState([]);

    async function getListPenyakit() {
        const response = await axios
            .get("http://localhost:8000/api/penyakit/")
            .then((response) => response)
            .catch((error) => error);
        const temp = response.data.slice(0, 10);
        setListPenyakit(temp);
    }

    return (
        <div class="container konten">
            <section id="info-penyakit" class="index-content">
                <div class="video">
                    <video
                        src="./media/virus.mp4"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    />
                </div>

                <div class="isi">
                    <div class="judul-konten">
                        <h1> Informasi Penyakit </h1>
                    </div>

                    <div class="deskripsi">
                        <p>
                            HeyHealth menyediakan berbagai jenis informasi seputar penyakit yang dapat anda akses mendapatkan informasi yang terupdate seputar penyakit yang memberikan informasi penyakit detail seperti gejala, penyebab, pencegahan, dan pengobatan yang dapat ditelusuri website kami.
                        </p>
                    </div>

                    <div class="konten-penyakit">
                        {ListPenyakit.map((penyakit) => {
                            return (
                                <a
                                    key={penyakit.id}
                                    href={"/penyakit/" + penyakit.nama}
                                >
                                    {penyakit.nama}
                                </a>
                            );
                        })}

                        <a href="">
                            Telusuri
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="obat-suplemen" class="index-content">
                <div class="isi">
                    <div class="judul-konten">
                        <h1> Obat & Suplemen </h1>
                    </div>

                    <div class="deskripsi">
                        <p>
                            HeyHealth menyediakan berbagai jenis obat dan suplemen untuk mengobati penyakit yang diderita dan juga suplemen untuk meningkatkan kesehatan seseorang seperti meningkatkan imunitas pada virus dan dapat dibeli diwebsite kami ini.
                        </p>
                    </div>

                    <div class="item">
                        <a href=""> Obat </a>
                        <a href=""> Suplemen </a>

                        <a href="">
                            Telusuri
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </a>
                    </div>
                </div>

                <div class="video">
                    <video
                        src="./media/medicine.mp4"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    >
                        {" "}
                    </video>
                </div>
            </section>

            <section id="janji-medis" class="index-content">
                <div class="video">
                    <video
                        src="./media/doctor.mp4"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    >
                        {" "}
                    </video>
                </div>

                <div class="isi">
                    <div class="judul-konten">
                        <h1> Janji Medis </h1>
                    </div>

                    <div class="deskripsi">
                        <p>
                            HeyHealth menyediakan fitur janji medis seperti janji temu pada dokter dokter terpilih yang kalian inginkan juga mereka semua dari pilihan rumah sakit terbaik yang ada masing masing daerahnya.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
