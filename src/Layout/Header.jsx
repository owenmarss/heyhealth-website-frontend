import { useEffect, useState } from "react";
import "./Header.css";

export default function Header(props) {
    const { ListPenyakit } = props;
    const [isOpen, setIsOpen] = useState(false);
    function openSideBar() {
        setIsOpen(isOpen ? false : true);
    }

    const [ListPenyakit10, setListPenyakit10] = useState([]);
    useEffect(() => {
        const temp = ListPenyakit.slice(0, 10);
        setListPenyakit10(temp);
    }, [ListPenyakit]);

    return (
        <>
            <header>
                <span
                    id="hamburger"
                    onClick={openSideBar}
                    class="material-symbols-outlined"
                >
                    menu
                </span>

                <div class="left">
                    <div className="logo-header">
                        <img src="/media/logoputih.png" alt="" />
                    </div>

                    <div class="navbar">
                        <div class="menu">
                            <a href="" class="judul">
                                <div> Beranda </div>
                            </a>
                        </div>

                        <div class="menu">
                            <a href="" class="judul">
                                <div>
                                    Informasi Penyakit
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>
                            </a>

                            <div class="penyakit-content dropdown">
                                {ListPenyakit10.map((lp, index) => {
                                    return (
                                        <a key={index} href="">
                                            {" "}
                                            {lp.nama}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div class="menu">
                            <a href="" class="judul">
                                <div>
                                    Obat & Suplemen
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>
                            </a>

                            <div class="item-content dropdown">
                                <a href=""> Obat </a>
                                <a href=""> Suplemen </a>
                            </div>
                        </div>

                        <div class="menu">
                            <a href="" class="judul">
                                <div>Janji Medis</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <a href="" class="cart-button">
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </a>

                    <a href="" class="login-button">
                        <button> Login </button>
                    </a>
                </div>
            </header>

            <div id="sideBarWrapper">
                <div
                    className="sidebar"
                    style={{ display: isOpen ? "flex" : "none" }}
                >
                    <div>
                        <span class="material-symbols-outlined">home</span>
                        <a href=""> Beranda </a>
                    </div>

                    <div>
                        <span class="material-symbols-outlined">
                            coronavirus
                        </span>
                        <a href=""> Informasi Penyakit </a>
                    </div>

                    <div>
                        <span class="material-symbols-outlined">syringe</span>
                        <a href=""> Obat & Suplemen </a>
                    </div>

                    <div>
                        <span class="material-symbols-outlined">
                            clinical_notes
                        </span>
                        <a href=""> Janji Medis </a>
                    </div>
                </div>
            </div>
        </>
    );
}
