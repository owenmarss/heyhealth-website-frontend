import './Checkout.css'

export default function Checkout() {
  return (
    <section class="page">
        <div class="form-container">
            <div class="judul-form">
                <h1> Checkout </h1>
            </div>

            <form action="">
                <div class="cart-grid">
                    <div class="cart-cards">
                        <img src="../media/sick.jpg" alt=""/>
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
                            <input type="checkbox" name="" id=""/>
                        </div>
                    </div>
                    
                    <div class="cart-cards">
                        <img src="../media/sick.jpg" alt=""/>
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
                            <input type="checkbox" name="" id=""/>
                        </div>
                    </div>

                    <div class="cart-cards">
                        <img src="../media/sick.jpg" alt=""/>
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
                            <input type="checkbox" name="" id=""/>
                        </div>
                    </div>
                </div>

                <div class="alamat">
                    <h1> Alamat Pengiriman: </h1>
                    <input type="text" name="" id="" required/>
                </div>

                <div class="payment">
                    <h1> Metode Pembayaran: </h1>
                    
                    <div class="payment-grid">
                        <div class="payment-option">
                            <img src="../media/bca.png" alt=""/>
                            <div>
                                <h1> Mobile BCA </h1>
                                <input type="checkbox" name="" id=""/>
                            </div>
                        </div>

                        <div class="payment-option">
                            <img src="../media/gopay.png" alt=""/>
                            <div>
                                <h1> GoPay </h1>
                                <input type="checkbox" name="" id=""/>
                            </div>
                        </div>

                        <div class="payment-option">
                            <img src="../media/shopeepay.png" alt=""/>
                            <div>
                                <h1> ShopeePay </h1>
                                <input type="checkbox" name="" id=""/>
                            </div>
                        </div>

                        <div class="payment-option">
                            <img src="../media/ovo.png" alt=""/>
                            <div>
                                <h1> OVO </h1>
                                <input type="checkbox" name="" id=""/>
                            </div>
                        </div>

                        <div class="payment-option">
                            <img src="../media/cod.png" alt=""/>
                            <div>
                                <h1> COD </h1>
                                <input type="checkbox" name="" id=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ringkasan">
                    <h1> Ringkasan Pembayaran </h1>

                    <div class="rincian">
                        <div class="rincian-field">
                            <p> Total Belanja </p>
                            <p> Rp xx.xxx,xx </p>
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
                            <h2> Rp xx.xxx,xx </h2>
                        </div>
                    </div>
                </div>

                <div class="button-beli">
                    <button> Bayar </button>
                </div>
            </form>
        </div>
    </section>
)}