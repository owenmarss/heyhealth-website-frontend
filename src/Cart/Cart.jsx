import './Cart.css'

export default function Cart() {
    return (
        <section class="page">
            <div class="content">
                <div class="cart-container">
                    <div class="judul-cart">
                        <h1> Keranjang </h1>
                    </div>

                    <div class="cart-grid">
                        <div class="cart-cards">
                            <img src="../media/sick.jpg" alt="" />
                            <div class="cart-info">
                                <h1> Nama Item </h1>
                                <h5> Jenis </h5>
                                <p> Satuan </p>
                                <h4> Rp xx.xxx.xx </h4>
                                <div class="quantity-cart">
                                    <button id="minus">
                                        <span class="material-symbols-outlined">
                                            do_not_disturb_on
                                        </span>
                                    </button>

                                    <p> 1 </p>

                                    <button id="add">
                                        <span class="material-symbols-outlined">
                                            add_circle
                                        </span>
                                    </button>

                                    <button id="delete">
                                        <span class="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div class="checkmark">
                                <input type="checkbox" name="" id="" />
                            </div>
                        </div>

                        <div class="cart-cards">
                            <img src="../media/sick.jpg" alt="" />
                            <div class="cart-info">
                                <h1> Nama Item </h1>
                                <h5> Jenis </h5>
                                <p> Satuan </p>
                                <h4> Rp xx.xxx.xx </h4>
                                <div class="quantity-cart">
                                    <button id="minus">
                                        <span class="material-symbols-outlined">
                                            do_not_disturb_on
                                        </span>
                                    </button>

                                    <p> 1 </p>

                                    <button id="add">
                                        <span class="material-symbols-outlined">
                                            add_circle
                                        </span>
                                    </button>

                                    <button id="delete">
                                        <span class="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div class="checkmark">
                                <input type="checkbox" name="" id="" />
                            </div>
                        </div>

                        <div class="cart-cards">
                            <img src="../media/sick.jpg" alt="" />
                            <div class="cart-info">
                                <h1> Nama Item </h1>
                                <h5> Jenis </h5>
                                <p> Satuan </p>
                                <h4> Rp xx.xxx.xx </h4>
                                <div class="quantity-cart">
                                    <button id="minus">
                                        <span class="material-symbols-outlined">
                                            do_not_disturb_on
                                        </span>
                                    </button>

                                    <p> 1 </p>

                                    <button id="add">
                                        <span class="material-symbols-outlined">
                                            add_circle
                                        </span>
                                    </button>

                                    <button id="delete">
                                        <span class="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div class="checkmark">
                                <input type="checkbox" name="" id="" />
                            </div>
                        </div>
                    </div>

                    <div class="total-cart">
                        <h1> Total Harga </h1>
                        <p> Rp xx.xxx,xx </p>
                    </div>

                    <div class="checkout">
                        <button> Bayar Sekarang </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
