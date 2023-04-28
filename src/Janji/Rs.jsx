import { useEffect, useState } from "react";
import "./Rs.css";
import { useParams } from "react-router-dom";

export default function Rs({ rs, ListDokter = [] }) {
    const [rs_now, setrs_now] = useState({});
    const router = useParams();

    const [Otherrs, setOtherrs] = useState([]);
    useEffect(() => {
        let indexOfItem = 0;
        for (let i = 0; i < rs.length; i++) {
            if (rs[i].nama === router.nama) {
                let indexOfItem = i;
                setrs_now(rs[i]);
                break;
            }
        }

        const temp = [];
        for (let i = 1; i <= 3; i++) {
            if (indexOfItem + i < rs.length) {
                temp.push(rs[indexOfItem + i]);
            } else {
                temp.push(rs[indexOfItem + i - rs.length]);
            }
        }
        setOtherrs(temp);
    }, [rs]);

    return (
        <section class="page">
            <div class="preview">
                <div class="rs">
                    <div class="image-container">
                        <img src="../media/rs.jpg" alt="" />
                    </div>

                    <div class="detail-rs">
                        <div class="detail-top">
                            <div class="judul-rs">
                                <h1> {rs_now.nama} </h1>
                            </div>

                            <div class="alamat-rs">
                                <p> {rs_now.alamat} </p>
                            </div>

                            <div class="daerah-rs">
                                <h4> {rs_now.daerah} </h4>
                            </div>
                            <div class="no-telp">
                                <p> {rs_now.no_telepon} </p>
                            </div>

                            <div class="button-cek">
                                <button> Cek Dokter di Rumah Sakit Ini </button>
                            </div>
                        </div>

                        <div id="deskripsi" class="field">
                            <h1> Deskripsi </h1>
                            <p>{rs_now.deskripsi}</p>
                        </div>

                        <div id="fasilitas" class="field">
                            <h1> Fasilitas </h1>
                            <p>{rs_now.fasilitas}</p>
                            {/* <ul>
                                <li> Mata </li>
                                <li> Mata </li>
                                <li> Mata </li>
                                <li> Mata </li>
                                <li> Mata </li>
                            </ul> */}
                        </div>

                        <div class="field">
                            <h1> List Dokter </h1>

                            <div class="dr-grid">
                                {ListDokter.map((d = {}) => {
                                    return d.lokasi_praktek.nama ===
                                        rs_now.nama ? (
                                        <div class="dr-cards">
                                            <img src="../media/dr.jpg" alt="" />
                                            <div class="dr-info">
                                                <h1> {d.nama} </h1>
                                                <h5> {d.bidang} </h5>
                                                <p> {d.pengalaman} </p>
                                                <h4>
                                                    {" "}
                                                    {d.lokasi_praktek.nama}{" "}
                                                </h4>
                                                <a href={"/janji/" + d.nama}>
                                                    <button>
                                                        {" "}
                                                        Lihat Selengkapnya{" "}
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="extra">
                    <div class="suggestions">
                        <div class="judul-suggestions">
                            <h1> Rumah Sakit Lainnya </h1>
                        </div>

                        <div class="suggestions-grid">
                            {Otherrs.map((ors = {}) => {
                                return (
                                    <div class="rs-cards">
                                        <img src={ors.image} alt="" />
                                        <div class="rs-info">
                                            <h1> {ors.nama} </h1>
                                            <p> {ors.alamat} </p>
                                            <h4> {ors.daerah} </h4>
                                            <a href={"/rs/" + ors.nama}>
                                                <button>
                                                    {" "}
                                                    Lihat Selengkapnya{" "}
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
