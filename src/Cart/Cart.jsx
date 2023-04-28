import axios from "axios";
import "./Cart.css";
import { useEffect, useState } from "react";

function CartSatuan({ c = {}, setCart, index, init }) {
    const [counter, setCounter] = useState(c.quantity);

    function plusItem() {
        const newValue = counter + 1;
        setCounter(newValue);
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart[index].quantity = newValue;
        setCart(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        init();
        window.location.reload();
    }

    function minusItem() {
        const newValue = counter - 1;

        if (counter === 1) {
            deleteItem();
        } else {
            setCounter(newValue);
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart[index].quantity = newValue;
            setCart(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            init();
            window.location.reload();
        }
    }

    function deleteItem() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        cart.splice(index, 1);
        setCart(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        init();
        window.location.reload();
    }

    return (
        <div key={c.id} class="cart-cards">
            <img src="../media/sick.jpg" alt="" />
            <div class="cart-info">
                <h1> {c.nama} </h1>
                <h5> {c.jenis} </h5>
                <p> {c.satuan} </p>
                <h4> {c.harga} </h4>
                <div class="quantity-cart">
                    <button id="minus" onClick={minusItem}>
                        <span class="material-symbols-outlined">
                            do_not_disturb_on
                        </span>
                    </button>

                    <p> {counter} </p>

                    <button onClick={plusItem} id="add">
                        <span class="material-symbols-outlined">
                            add_circle
                        </span>
                    </button>

                    <button id="delete" onClick={deleteItem}>
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>

            <div class="checkmark">
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    );
}

export default function Cart({ ListItem, formatRupiah }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        init();
    }, [ListItem]);

    function init() {
        const temp = [];
        let temp_total = 0;
        const temp_cart = JSON.parse(localStorage.getItem("cart"));
        temp_cart.forEach((tc) => {
            for (let i = 0; i < ListItem.length; i++) {
                if (tc.id === ListItem[i].id) {
                    temp_total += tc.quantity * ListItem[i].harga;
                    temp.push({ ...ListItem[i], quantity: tc.quantity });
                    break;
                }
            }
        });
        setTotal(temp_total);
        setCart(temp);
    }

    return (
        <section class="page cart">
            <div class="content">
                <div class="cart-container">
                    <div class="judul-cart">
                        <h1> Keranjang </h1>
                    </div>

                    <div class="cart-grid">
                        {cart.map((c = {}, index) => {
                            return (
                                <CartSatuan
                                    init={init}
                                    c={c}
                                    index={index}
                                    setCart={setCart}
                                />
                            );
                        })}
                    </div>

                    <div class="total-cart">
                        <h1> Total Harga </h1>
                        <p> {formatRupiah(total)} </p>
                    </div>

                    <div class="checkout">
                        <button> Bayar Sekarang </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
