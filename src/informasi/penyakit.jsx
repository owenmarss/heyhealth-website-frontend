import { useParams } from "react-router-dom";
import "./penyakit.css";
import { useEffect, useState } from "react";

export default function Penyakit(props) {
    const { ListPenyakit } = props;
    const [penyakit, setPenyakit] = useState({});
    const router = useParams();

    useEffect(() => {}, [router, ListPenyakit]);

    const [OtherPenyakit, setOtherPenyakit] = useState([]);
    useEffect(() => {
        let indexOfItem = 0;
        for (let i = 0; i < ListPenyakit.length; i++) {
            if (ListPenyakit[i].nama === router.nama) {
                setPenyakit(ListPenyakit[i]);
                indexOfItem = i;
                break;
            }
        }

        const temp = [];
        for (let i = 1; i <= 3; i++) {
            if (indexOfItem + i < ListPenyakit.length) {
                temp.push(ListPenyakit[indexOfItem + i]);
            } else {
                temp.push(ListPenyakit[indexOfItem + i - ListPenyakit.length]);
            }
        }
        setOtherPenyakit(temp);
    }, [ListPenyakit]);

    return (
        <section class="page-penyakit">
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

                        <p>{penyakit.deskripsi}</p>
                    </div>

                    <div id="penyebab" class="field">
                        <h1> Penyebab {penyakit.nama} </h1>

                        <p>{penyakit.penyebab}</p>
                    </div>

                    <div id="gejala" class="field">
                        <h1> Gejala {penyakit.nama} </h1>

                        <p>{penyakit.gejala}</p>
                    </div>

                    <div id="pencegahan" class="field">
                        <h1> Pencegahan {penyakit.nama} </h1>

                        <p>{penyakit.pencegahan}</p>
                    </div>

                    <div id="penanganan" class="field">
                        <h1> Penanganan {penyakit.nama} </h1>

                        <p>{penyakit.pengobatan}</p>
                    </div>
                </div>

                <div class="extra">
                    <div class="ad">
                        <a href="">
                            <video
                                src="./media/ad.mp4"
                                autoPlay={true}
                                loop={true}
                                muted={true}
                            >
                                {" "}
                            </video>
                        </a>
                    </div>

                    <div class="suggestions">
                        <div class="judul-suggestions">
                            <h1> Penyakit Lainnya </h1>
                        </div>

                        <div class="suggestions-grid">
                            {OtherPenyakit.map((penyakit={}) => {
                                return (
                                    <div key={penyakit.id} class="grid-cards">
                                        <a href={"/penyakit/" + penyakit.nama}>
                                            <img src={penyakit.image} alt="" />
                                            {penyakit.nama}
                                        </a>
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
