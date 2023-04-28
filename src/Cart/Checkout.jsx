import { useEffect, useRef, useState } from "react";
import "./Checkout.css";
import axios from "axios";

export default function Checkout({ ListItem, formatRupiah }) {
    const [cart, setCart] = useState([]);
    const address_ref = useRef();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let temp_total = 0;
        const temp = [];
        const cart_temp = JSON.parse(localStorage.getItem("cart"));
        cart_temp.forEach((ct) => {
            for (let i = 0; i < ListItem.length; i++) {
                if (ct.id === ListItem[i].id) {
                    temp.push({ ...ListItem[i], quantity: ct.quantity });
                    temp_total += ct.quantity * ListItem[i].harga;
                    break;
                }
            }
        });

        setCart(cart_temp);
    }, []);

    async function checkout() {
        const address = address_ref.current.value;
        const cart = JSON.parse(localStorage.getItem("cart"));
        const quantities = [];
        const items = [];

        cart.forEach((c) => {
            quantities.push(c.quantity);
            items.push(c.id);
        });

        if(cart.length > 0){

            return await axios
                .post("http://localhost:8000/api/order/", {
                    items: items,
                    quantities: quantities,
                    alamat: address,
                    nomor_telepon: "088888888888",
                    pembayaran: "COD",
                })
                .then((res) => res)
                .catch((err) => err);
        }
        console.log("keranjang kosong");
    }

    return (
        <section class="page">
            <div class="form-container">
                <div class="judul-form">
                    <h1> Checkout </h1>
                </div>

                <form action="">
                    <div class="cart-grid">
                        {cart.map((c) => {
                            <div class="cart-cards">
                                <img src={c.image} alt="" />
                                <div class="cart-info">
                                    <h1> {c.nama} </h1>
                                    <h5> {c.jenis} </h5>
                                    <p> {c.satuan} </p>
                                    <h4> {formatRupiah(c.harga)} </h4>
                                    <div class="quantity-cart">
                                        <p> {c.quantity} </p>
                                    </div>
                                </div>

                                <div class="checkmark">
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>;
                        })}
                    </div>

                    <div class="alamat">
                        <h1> Alamat Pengiriman: </h1>
                        <input type="text" ref={address_ref} required />
                    </div>

                    {/* <div class="payment">
                        <h1> Metode Pembayaran: </h1>

                        <div class="payment-grid">
                            <div class="payment-option">
                                <img src="../media/bca.png" alt="" />
                                <div>
                                    <h1> Mobile BCA </h1>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>

                            <div class="payment-option">
                                <img src="../media/gopay.png" alt="" />
                                <div>
                                    <h1> GoPay </h1>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>

                            <div class="payment-option">
                                <img src="../media/shopeepay.png" alt="" />
                                <div>
                                    <h1> ShopeePay </h1>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>

                            <div class="payment-option">
                                <img src="../media/ovo.png" alt="" />
                                <div>
                                    <h1> OVO </h1>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>

                            <div class="payment-option">
                                <img src="../media/cod.png" alt="" />
                                <div>
                                    <h1> COD </h1>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="ringkasan">
                        <h1> Ringkasan Pembayaran </h1>

                        <div class="rincian">
                            <div class="rincian-field">
                                <p> Total Belanja </p>
                                <p> {formatRupiah(total)} </p>
                            </div>

                            <div class="rincian-field">
                                <p> Pajak </p>
                                <p> Rp 2.000,00 </p>
                            </div>

                            <div class="rincian-field">
                                <p> Biaya Jasa Aplikasi </p>
                                <p> Rp 1.000,00 </p>
                            </div>

                            <div id="total" class="rincian-field">
                                <h2> Total Harga </h2>
                                <h2> {formatRupiah(total + 3000)} </h2>
                            </div>
                        </div>
                    </div>

                    <div class="button-beli">
                        <button onClick={checkout}> Bayar </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
