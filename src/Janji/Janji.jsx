import { useEffect, useState } from "react";
import "./Janji.css";
import { useParams } from "react-router-dom";

export default function Janji({ rs }) {
    return (
        <section class="janji-page">
            <div class="janji-content">
                <div class="search-box">
                    <select name="jenis" id="jenis" class="jenis-input">
                        <option value=""> Pilih </option>
                        <option value=""> Jakarta Utara </option>
                        <option value=""> Jakarta Selatan </option>
                        <option value=""> Jakarta Pusat </option>
                        <option value=""> Jakarta Barat </option>
                        <option value=""> Jakarta Timur </option>
                    </select>

                    <div class="input-field">
                        <input type="search" name="" id="" class="input" />
                    </div>

                    <div class="search-button">
                        <button class="input">
                            Search
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                </div>

                <div class="result">
                    <div class="result-rs">
                        <div class="rs-judul">
                            <h1> Rekomendasi Rumah Sakit </h1>
                        </div>

                        <div class="rs-grid">
                            {rs.map((r = {}) => {
                                return (
                                    <div key={r.id} class="rs-cards">
                                        <img src={r.image} alt="" />
                                        <div class="rs-info">
                                            <h1> {r.nama} </h1>
                                            <p> {r.alamat} </p>
                                            <h4> {r.daerah} </h4>
                                            <a href={"/rs/" + r.nama}>
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
