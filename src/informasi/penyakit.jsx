import { useParams } from "react-router-dom";
import "./penyakit.css";
import { useEffect, useState } from "react";

export default function Penyakit(props) {
    const { ListPenyakit } = props;
    const [penyakit, setPenyakit] = useState({})
    const router = useParams()

    useEffect(()=>{
        for (let i = 0; i < ListPenyakit.length; i++) {
            if(ListPenyakit[i].nama === router.nama){
                setPenyakit(ListPenyakit[i])
                break
            }
        }
    },[router, ListPenyakit])

    return (
        <section class="page penyakit">
            <div class="penyakit">
                <div class="detail">
                    <div class="judul">
                        <h1> {penyakit.nama} </h1>
                    </div>

                    <div class="image-container">
                        <img src={penyakit.image} alt="" />
                    </div>

                    <div id="deskripsi" class="field">
                        <h1> Apa itu {penyakit.nama}?</h1>

                        <p>
                            {penyakit.deskripsi}
                        </p>
                    </div>

                    <div id="penyebab" class="field">
                        <h1> Penyebab {penyakit.nama} </h1>

                        <p>
                            {penyakit.penyebab}
                        </p>
                    </div>

                    <div id="gejala" class="field">
                        <h1> Gejala {penyakit.nama} </h1>

                        <p>
                            {penyakit.gejala}
                        </p>
                    </div>

                    <div id="pencegahan" class="field">
                        <h1> Pencegahan {penyakit.nama} </h1>

                        <p>
                            {penyakit.pencegahan}
                        </p>
                    </div>

                    <div id="penanganan" class="field">
                        <h1> Penanganan {penyakit.nama} </h1>

                        <p>
                            {penyakit.pengobatan}
                        </p>
                    </div>
                </div>

                <div class="extra">
                    <div class="ad">
                        <a href="">
                            <video
                                src="./media/ad.mp4"
                                autoplay
                                loop
                                muted
                            ></video>
                        </a>
                    </div>

                    <div class="suggestions">
                        <div class="judul-suggestions">
                            <h1> Penyakit Lainnya </h1>
                        </div>

                        <div class="suggestions-grid">
                            <div class="grid-cards">
                                <a href="">
                                    <img src="./media/sick.jpg" alt="" />
                                    Penyakit Lain 1
                                </a>
                            </div>

                            <div class="grid-cards">
                                <a href="">
                                    <img src="./media/sick.jpg" alt="" />
                                    Penyakit Lain 1
                                </a>
                            </div>

                            <div class="grid-cards">
                                <a href="">
                                    <img src="./media/sick.jpg" alt="" />
                                    Penyakit Lain 1
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
