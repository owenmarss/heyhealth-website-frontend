import { useParams } from "react-router-dom";
import "./Preview.css";
import { useEffect, useState } from "react";

export default function Preview(props) {
    const [show_notif, setShow_notif] = useState(false);

    const { ListItem, formatRupiah } = props;
    const router = useParams();
    const [item, setItem] = useState({});
    const [OtherItem, setOtherItem] = useState([]);

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        let indexOfItem = 0;
        ListItem.forEach((li, index) => {
            if (li.nama === router.nama) {
                setItem(li);
                indexOfItem = index;
            }
        });

        const temp = [];
        for (let i = 1; i <= 3; i++) {
            if (indexOfItem + i < ListItem.length) {
                temp.push(ListItem[indexOfItem + i]);
            } else {
                temp.push(ListItem[indexOfItem + i - ListItem.length]);
            }
        }
        setOtherItem(temp);

        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === item.id) {
                    setCounter(cart[i].quantity);
                    break;
                }
            }
        }
    }, [ListItem]);

    function editCart() {
        const newItem = { id: item.id, quantity: counter };
        const cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart);
        if (cart) {
            let ada_yang_sama = false;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === item.id) {
                    ada_yang_sama = true;
                    cart[i].quantity = counter;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    break;
                }
            }
            if (!ada_yang_sama) {
                cart.push(newItem);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        } else {
            localStorage.setItem("cart", JSON.stringify([newItem]));
        }
        setShow_notif(true);
    }

    return (
        <section class="page">
            <div class="preview">
                <div class="image-container">
                    <img src={item.image} alt="" />
                </div>

                <div class="detail-item">
                    <div class="detail-top">
                        <div class="judul-item">
                            <h1> {item.nama} </h1>
                        </div>

                        <div class="harga-item">
                            <h4> {formatRupiah(item.harga)} </h4>
                        </div>

                        <div class="satuan-item">
                            <p> Per Satuan </p>
                        </div>

                        <div class="quantity-item">
                            <button
                                onClick={() => {
                                    setCounter(counter - 1);
                                }}
                                id="minus"
                                disabled={counter === 1}
                            >
                                <span class="material-symbols-outlined">
                                    do_not_disturb_on
                                </span>
                            </button>

                            <p> {counter} </p>

                            <button
                                onClick={() => {
                                    setCounter(counter + 1);
                                }}
                                id="add"
                            >
                                <span class="material-symbols-outlined">
                                    add_circle
                                </span>
                            </button>
                        </div>

                        <div class="button-cart">
                            <button onClick={editCart}>
                                {" "}
                                Tambahkan ke Keranjang{" "}
                            </button>
                        </div>
                    </div>

                    <div id="deskripsi" class="preview-field">
                        <h1> Deskripsi </h1>
                        <p>{item.deskripsi}</p>
                    </div>

                    <div id="khasiat" class="preview-field">
                        <h1> Khasiat </h1>
                        <p>{item.khasiat}</p>
                    </div>

                    <div id="dosis" class="preview-field">
                        <h1> Dosis </h1>
                        <p>{item.dosis}</p>
                    </div>
                </div>

                <div class="extra">
                    <div class="preview-suggestions">
                        <div class="judul-preview-suggestions">
                            <h1> Penyakit Lainnya </h1>
                        </div>

                        <div class="preview-suggestions-grid">
                            {OtherItem.map((myItem = {}) => {
                                return (
                                    <div key={myItem.id} class="preview-grid-cards">
                                        <img src={myItem.image} alt="" />
                                        <div class="item-info">
                                            <h1> {myItem.nama} </h1>
                                            <p> {myItem.satuan} </p>
                                            <h4>
                                                {" "}
                                                {formatRupiah(
                                                    myItem.harga
                                                )}{" "}
                                            </h4>
                                            <a href={"/item/" + myItem.nama}>
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

            <div
                className="popup-box"
                style={{ display: show_notif ? "flex" : "none" }}
            >
                <div className="popup-top">
                    <button onClick={() => setShow_notif(false)}>
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="popup-comment">
                    <h1> Berhasil Menambahkan Item ke Keranjang </h1>
                    <a href=""> Cek Keranjang Sekarang </a>
                </div>
            </div>
        </section>
    );
}
