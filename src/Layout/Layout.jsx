import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout(props) {
    const {ListPenyakit} = props
    return (
        <>
            <Header ListPenyakit={ListPenyakit} />
            <Outlet/>
            <Footer/>
        </>
    );
}
