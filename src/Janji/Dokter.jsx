import { useEffect, useRef, useState } from "react";
import "./Dokter.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Dokter({ ListDokter = [] }) {
    const [dokter_now, setdokter_now] = useState({});
    const [lokasi_praktek, setlokasi_praktek] = useState("");
    const router = useParams();

    const date_ref = useRef();
    const time_ref = useRef();
    const keluhan_ref = useRef();

    useEffect(() => {
        for (let i = 0; i < ListDokter.length; i++) {
            if (ListDokter[i].nama === router.dokter) {
                setdokter_now(ListDokter[i]);
                setlokasi_praktek(ListDokter[i].lokasi_praktek.nama);
                break;
            }
        }
    }, [ListDokter]);

    function handleJanji() {
        const res = axios
            .post(
                "http://localhost:8000/api/janji/",
                {
                    dokter: dokter_now.id,
                    date: date_ref.current.value,
                    time: time_ref.current.value,
                    keluhan: keluhan_ref.current.value,
                },
                {
                    headers: {
                        Authorization: `Token ${localStorage.getItem(
                            "tokens"
                        )}`,
                    },
                }
            )
            .then((res) => res)
            .catch((err) => err);
    }

    return (
        <section class="page">
            <div class="preview">
                <div class="image-container">
                    <a href="">
                        <img src="../media/dr.jpg" alt="" />
                    </a>
                </div>
                {console.log(dokter_now)}
                <div class="detail-dr">
                    <div class="detail-top">
                        <div class="judul-dr">
                            <h1> {dokter_now.nama} </h1>
                        </div>

                        <div class="bidang-dr">
                            <p> {dokter_now.bidang} </p>
                        </div>

                        <div class="usia-dr">
                            <p> {dokter_now.usia} </p>
                        </div>

                        <div class="daerah-dr">
                            <h4> {dokter_now.daerah} </h4>
                        </div>

                        <div class="button-janji">
                            <button> Buat Janji Dokter </button>
                        </div>
                    </div>

                    <div id="pengalaman" class="field">
                        <h1> Pengalaman </h1>
                        <p>{dokter_now.pengalaman}</p>
                    </div>

                    <div id="lokasi-praktek" class="field">
                        <h1> Lokasi Praktek </h1>
                        <ul>
                            <li> {lokasi_praktek} </li>
                        </ul>
                    </div>

                    <div id="jam-praktek" class="field">
                        <h1> Jam Praktek </h1>
                        <ul>
                            <li> 07.00-09.00 </li>
                            <li> 07.00-09.00 </li>
                            <li> 07.00-09.00 </li>
                            <li> 07.00-09.00 </li>
                            <li> 07.00-09.00 </li>
                        </ul>
                    </div>

                    <div id="janji-dokter" class="field">
                        <h1> Janji Dokter </h1>

                        <div class="form-container">
                            <form action="">
                                <div id="hari-tanggal" class="input-field">
                                    <h1> Tanggal: </h1>
                                    <input ref={date_ref} type="date" />
                                </div>

                                <div id="hari-tanggal" class="input-field">
                                    <h1> Jam: </h1>
                                    <input ref={time_ref} type="time" />
                                </div>

                                <div id="keluhan" class="input-field">
                                    <h1> Keluhan: </h1>
                                    <input ref={keluhan_ref} type="text" />
                                </div>

                                <div id="send" className="input-button">
                                    <button onClick={handleJanji}>
                                        {" "}
                                        Submit{" "}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="extra">
                    <div class="suggestions">
                        <div class="judul-suggestions">
                            <h1> Penyakit Lainnya </h1>
                        </div>

                        <div class="suggestions-grid">
                            <div class="dr-cards">
                                <img src="../media/dr.jpg" alt="" />
                                <div class="dr-info">
                                    <h1> Nama Dokter </h1>
                                    <h5> Bidang </h5>
                                    <p> x tahun </p>
                                    <h4> Lokasi Praktek </h4>
                                    <a href="">
                                        <button> Lihat Selengkapnya </button>
                                    </a>
                                </div>
                            </div>
                            <div class="dr-cards">
                                <img src="../media/dr.jpg" alt="" />
                                <div class="dr-info">
                                    <h1> Nama Dokter </h1>
                                    <h5> Bidang </h5>
                                    <p> x tahun </p>
                                    <h4> Lokasi Praktek </h4>
                                    <a href="">
                                        <button> Lihat Selengkapnya </button>
                                    </a>
                                </div>
                            </div>
                            <div class="dr-cards">
                                <img src="../media/dr.jpg" alt="" />
                                <div class="dr-info">
                                    <h1> Nama Dokter </h1>
                                    <h5> Bidang </h5>
                                    <p> x tahun </p>
                                    <h4> Lokasi Praktek </h4>
                                    <a href="">
                                        <button> Lihat Selengkapnya </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
