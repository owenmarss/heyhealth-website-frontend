import { useEffect, useRef, useState } from "react";
import "./Item.css";

export default function Item(props) {
    const { ListItem, formatRupiah } = props;
    const [filtered_ListItem, setfiltered_ListItem] = useState([]);
    const search_ref = useRef();

    useEffect(() => {
        setfiltered_ListItem(ListItem);
    }, [ListItem]);

    const [jenis, setJenis] = useState("0");
    const list_jenis = [
        { value: "0", text: "Obat & Suplemen" },
        { value: "1", text: "Obat" },
        { value: "2", text: "Suplemen" },
    ];

    function search(e) {
        const value = parseInt(e.target.value);
        // kalau dia pake button buat filter
        const temp = [];
        if (isNaN(value)) {
            ListItem.forEach((li) => {
                const local_name = li.nama.toLowerCase();
                const local_input = search_ref.current.value.toLowerCase();
                if (local_name.startsWith(local_input)) {
                    if (jenis !== "0") {
                        if (li.jenis === list_jenis[parseInt(jenis)].text)
                            temp.push(li);
                    } else {
                        temp.push(li);
                    }
                }
            });
        }
        // kalau pakai on change di searching
        else {
            setJenis(e.target.value);
            ListItem.forEach((li) => {
                const local_name = li.nama.toLowerCase();
                const local_input = search_ref.current.value.toLowerCase();
                if (local_name.startsWith(local_input)) {
                    if (value !== 0) {
                        if (li.jenis === list_jenis[value].text) temp.push(li);
                    } else {
                        temp.push(li);
                    }
                }
            });
        }
        setfiltered_ListItem(temp);
    }

    return (
        // <>
        // qwihud</>
        <section class="page">
            <div className="content">
                <div class="search-box">
                    <select
                        defaultChecked={"0"}
                        onChange={search}
                        name="jenis"
                        id="jenis"
                        class="jenis-input"
                    >
                        {list_jenis.map((lj) => {
                            return (
                                <option key={lj.value} value={lj.value}>
                                    {" "}
                                    {lj.text}{" "}
                                </option>
                            );
                        })}
                    </select>

                    <div class="input-field">
                        <input
                            ref={search_ref}
                            type="search"
                            name=""
                            id=""
                            class="input"
                        />
                    </div>

                    <div class="search-button">
                        <button onClick={search} class="input">
                            Search
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                </div>

                <div class="result">
                    <div class="result-judul">
                        <h1> {list_jenis[parseInt(jenis)].text} </h1>
                    </div>

                    <div class="item-grid">
                        {filtered_ListItem.map((i) => {
                            return (
                                <div key={i.id} class="item-cards">
                                    <img src={i.image} alt="" />
                                    <div class="item-info">
                                        <h1> {i.nama} </h1>
                                        <p> {i.satuan} </p>
                                        <h4> {formatRupiah(i.harga)} </h4>
                                        <a href={"item/" + i.nama}>
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
        </section>
    );
}
