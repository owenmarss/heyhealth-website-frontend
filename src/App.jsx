import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Konten from "./Home/Konten";
import Info from "./informasi/info";
import Penyakit from "./informasi/penyakit";
import Item from "./Item/Item";
import Preview from "./Item/Preview";
import Janji from "./Janji/Janji";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";

function App() {
    const [ListItem, setListItem] = useState([]);
    async function getAllItems() {
        const response = await axios
            .get("http://localhost:8000/api/item/")
            .then((res) => res)
            .catch((error) => error);
        setListItem(response.data);
    }
    useEffect(() => {
        getAllItems();
    }, []);

    const [ListPenyakit, setListPenyakit] = useState([]);
    useEffect(() => {
        getListPenyakit();
    }, []);

    async function getListPenyakit() {
        const response = await axios
            .get("http://localhost:8000/api/penyakit/")
            .then((response) => response)
            .catch((error) => error);

        setListPenyakit(response.data);
    }

    function formatRupiah(angka = "") {
        angka = angka.toString();
        var number_string = angka.replace(/[^,\d]/g, "").toString(),
            split = number_string.split(","),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if (ribuan) {
            let separator = sisa ? "." : "";
            rupiah += separator + ribuan.join(".");
        }

        rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
        return "Rp. " + rupiah + ",00";
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout ListPenyakit={ListPenyakit} />}
                >
                    <Route index element={<Konten />} />
                    <Route
                        path="informasi"
                        element={<Info ListPenyakit={ListPenyakit} />}
                    />
                    <Route
                        path="penyakit/:nama"
                        element={<Penyakit ListPenyakit={ListPenyakit} />}
                    />
                    <Route
                        path="item"
                        element={
                            <Item
                                formatRupiah={formatRupiah}
                                ListItem={ListItem}
                            />
                        }
                    />
                    <Route
                        path="item/:nama"
                        element={
                            <Preview
                                formatRupiah={formatRupiah}
                                ListItem={ListItem}
                            />
                        }
                    />
                    <Route path="cart" element={<Cart formatRupiah={formatRupiah} ListItem={ListItem} />} />
                    <Route path="janji" element={<Janji />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
