import { useState } from "react";
import "./info.css";
import { useEffect } from "react";

export default function Info(props) {
    const {ListPenyakit} = props
    const [listPenyakitAbjad, setListPenyakitAbjad] = useState([])
    useEffect(()=>{
        const temp = []
        for (let i = 5; i < ListPenyakit.length+5; i+=10) {
            temp.push(ListPenyakit.slice(i-5, i))
        }
        setListPenyakitAbjad(temp)
    },[ListPenyakit])

    return (
        <section class="page">
            <div class="top">
                <div class="search-box">
                    <input type="search" name="" id="" class="search" />
                    <button>
                        Search
                        <span class="material-symbols-outlined">search</span>
                    </button>
                </div>

                <div class="result">
                    <div class="result-headline">
                        <h1> Search From Alphabet </h1>
                    </div>

                    <div class="link">
                        {listPenyakitAbjad.map((penyakitAbjad) => {
                            return (
                                <div id="a" class="alphabet">
                                    {penyakitAbjad.map((penyakit) => {
                                        return (
                                            <a key={penyakit.id} href={"./penyakit/"+penyakit.nama}>
                                                {penyakit.nama}
                                            </a>
                                        );
                                    })}
                                </div>
                            );
                        })}
                        {/* <div id="a" class="alphabet">
                        <a href="penyakit.html"> Asma </a>
                        <a href="penyakit.html"> Artritis </a>
                        <a href="penyakit.html"> Aterosklerosis </a>
                        <a href="penyakit.html"> Asbestosis </a>
                        <a href="penyakit.html"> Apendisitis </a>
                    </div>
    
                    <div id="b" class="alphabet">
                        <a href=""> Bronkitis </a>
                        <a href=""> Batu ginjal </a>
                        <a href=""> Bisul </a>
                        <a href=""> Botulisme </a>
                        <a href=""> Bell's Palsy </a>
                    </div>
    
                    <div id="c" class="alphabet">
                        <a href=""> Cacar air </a>
                        <a href=""> Campak </a>
                        <a href=""> Cystitis </a>
                        <a href=""> Chikungunya </a>
                        <a href=""> Cushing Syndrome </a>
                    </div>
    
                    <div id="d" class="alphabet">
                        <a href=""> Demam Berdarah </a>
                        <a href=""> Diabetes </a>
                        <a href=""> Demensia </a>
                        <a href=""> Dermatitis </a>
                        <a href=""> Disleksia </a>
                    </div>
    
                    <div id="e" class="alphabet">
                        <a href=""> Eksim </a>
                        <a href=""> Epilepsi </a>
                        <a href=""> Eritrositosis </a>
                        <a href=""> Ebola </a>
                        <a href=""> Ensefalitis </a>
                    </div>
    
                    <div id="f" class="alphabet">
                        <a href=""> Flu Burung </a>
                        <a href=""> Flu Biasa </a>
                        <a href=""> Fibromyalgia </a>
                        <a href=""> Faringitis </a>
                        <a href=""> Fisura anus </a>
                    </div>
    
                    <div id="g" class="alphabet">
                        <a href=""> Gagal Ginjal </a>
                        <a href=""> Gagal Jantung </a>
                        <a href=""> Gondok </a>
                        <a href=""> Gonore </a>
                        <a href=""> Gastroenteritis </a>
                    </div>
                    
                    <div id="h" class="alphabet">
                        <a href=""> Herpes </a>
                        <a href=""> Hepatitis </a>
                        <a href=""> Hipertensi </a>
                        <a href=""> HIV/AIDS </a>
                        <a href=""> Hipotermia </a>
                    </div>
    
                    <div id="i" class="alphabet">
                        <a href=""> Infeksi Saluran Kemih </a>
                        <a href=""> Influenza </a>
                        <a href=""> Insomnia </a>
                        <a href=""> IBS </a>
                        <a href=""> Iskemia </a>
                    </div>
    
                    <div id="j" class="alphabet">
                        <a href=""> Jantung Koroner </a>
                        <a href=""> Jerawat </a>
                        <a href=""> Jerman Measles </a>
                        <a href=""> Jock Itch </a>
                        <a href=""> Jaundice </a>
                    </div>
    
                    <div id="k" class="alphabet">
                        <a href=""> Kanker </a>
                        <a href=""> Katarak </a>
                        <a href=""> Kencing Manis </a>
                        <a href=""> Keloid </a>
                        <a href=""> Kolesterol </a>
                    </div>
    
                    <div id="l" class="alphabet">
                        <a href=""> Lupus </a>
                        <a href=""> Leukemia </a>
                        <a href=""> Laringitis </a>
                        <a href=""> Luka Bakar </a>
                        <a href=""> Listeriosis </a>
                    </div>
    
                    <div id="m" class="alphabet">
                        <a href=""> Malaria </a>
                        <a href=""> Meningitis </a>
                        <a href=""> Miopia </a>
                        <a href=""> Migren </a>
                        <a href=""> Multiple Sclerosis </a>
                    </div>
    
                    <div id="n" class="alphabet">
                        <a href=""> Nefritis </a>
                        <a href=""> Nyeri Kepala </a>
                        <a href=""> Norovirus </a>
                        <a href=""> Nyeri Punggung </a>
                        <a href=""> Nyeri Sendi </a>
                    </div>
    
                    <div id="o" class="alphabet">
                        <a href=""> Obesitas </a>
                        <a href=""> Osteoporosis </a>
                        <a href=""> Otitis </a>
                        <a href=""> Ovarium Cyst </a>
                        <a href=""> Ovarian Hyperthecosis </a>
                    </div>
    
                    <div id="p" class="alphabet">
                        <a href=""> Pneumonia </a>
                        <a href=""> Psoriasis </a>
                        <a href=""> Penyakit Kuning </a>
                        <a href=""> Polio </a>
                        <a href=""> Parkinson </a>
                    </div>
    
                    <div id="q" class="alphabet">
                        <a href=""> Q Fever </a>
                        <a href=""> Quinsy </a>
                        <a href=""> Quickening of the Heart </a>
                        <a href=""> Quinine Allergy </a>
                        <a href=""> Q10 Deficiency </a>
                    </div>
    
                    <div id="r" class="alphabet">
                        <a href=""> RHS </a>
                        <a href=""> Rematik </a>
                        <a href=""> Rabies </a>
                        <a href=""> Reumatoid Arthritis </a>
                        <a href=""> Rubella </a>
                    </div>
    
                    <div id="s" class="alphabet">
                        <a href=""> Stroke </a>
                        <a href=""> Sinusitis </a>
                        <a href=""> Sakit kepala </a>
                        <a href=""> SARS </a>
                        <a href=""> Skizofrenia </a>
                    </div>
    
                    <div id="t" class="alphabet">
                        <a href=""> Tifus </a>
                        <a href=""> TBC (Tuberkulosis) </a>
                        <a href=""> Tonsilitis </a>
                        <a href=""> Thalasemia </a>
                        <a href=""> Tay-Sachs Disease </a>
                    </div>
    
                    <div id="u" class="alphabet">
                        <a href=""> Urtikaria </a>
                        <a href=""> Ulkus peptikum </a>
                        <a href=""> Uveitis </a>
                        <a href=""> Usus buntu </a>
                        <a href=""> Uretritis </a>
                    </div>
    
                    <div id="v" class="alphabet">
                        <a href=""> Varises </a>
                        <a href=""> Vaginitis </a>
                        <a href=""> Vertigo </a>
                        <a href=""> Varicella </a>
                        <a href=""> Variola Virus </a>
                    </div>
    
                    <div id="w" class="alphabet">
                        <a href=""> Wasir (Hemoroid) </a>
                        <a href=""> Williams Syndrome </a>
                        <a href=""> Wilson's Disease </a>
                        <a href=""> Wolf Syndrome </a>
                        <a href=""> Wilms' Tumor </a>
                    </div>
    
                    <div id="x" class="alphabet">
                        <a href=""> Xanthelasma </a>
                        <a href=""> Xerophthalmia </a>
                        <a href=""> Xerosis </a>
                    </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
