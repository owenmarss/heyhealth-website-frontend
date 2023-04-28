import './Dokter.css'

export default function Dokter() {
    return (
        <section class="page">
        <div class="preview">
            <div class="image-container">
                <a href="">
                    <img src="../media/dr.jpg" alt=""/>
                </a>
            </div>
    
            <div class="detail-dr">
                <div class="detail-top">
                    <div class="judul-dr">
                        <h1> Nama Dr </h1>
                    </div>
    
                    <div class="bidang-dr">
                        <p> Bidang </p>
                    </div>

                    <div class="usia-dr">
                        <p> Usia </p>
                    </div>

                    <div class="daerah-dr">
                        <h4> Daerah </h4>
                    </div>

                    <div class="button-janji">
                        <button> Buat Janji Dokter </button>
                    </div>
                </div>
    
                <div id="pengalaman" class="field">
                    <h1> Pengalaman </h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione accusamus maxime maiores qui ab neque. A quibusdam voluptatum modi, labore molestias voluptate sint eveniet corrupti praesentium, aspernatur earum. Libero. </p>
                </div>
                
                <div id="lokasi-praktek" class="field">
                    <h1> Lokasi Praktek </h1>
                    <ul>
                        <li> Nama Rumah Sakit, Daerah </li> 
                    </ul>
                </div>

                <div id="jam-praktek" class="field">
                    <h1> Jam Praktek </h1>
                    <ul>
                        <li> 07.00-09.00 </li>
                        <li> 07.00-09.00 </li>
                        <li> 07.00-09.00 </li>
                        <li> 07.00-09.00 </li>
                        <li> 07.00-09.00 </li>
                    </ul>
                </div>

                <div id="janji-dokter" class="field">
                    <h1> Janji Dokter </h1>

                    <div class="form-container">
                        <form action="">
                            <div id="hari-tanggal" class="input-field">
                                <h1> Tanggal: </h1>
                                <input type="date" name="" id=""/>
                            </div>

                            <div id="hari-tanggal" class="input-field">
                                <h1> Jam: </h1>
                                <input type="time" name="" id=""/>
                            </div>

                            <div id="keluhan" class="input-field">
                                <h1> Keluhan: </h1>
                                <input type="text" name="" id=""/>
                            </div>

                            <div id='send' className='input-button'>
                                <button> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="extra">
                <div class="suggestions">
                    <div class="judul-suggestions">
                        <h1> Penyakit Lainnya </h1>
                    </div>
    
                    <div class="suggestions-grid">
                        <div class="dr-cards">
                            <img src="../media/dr.jpg" alt=""/>
                            <div class="dr-info">
                                <h1> Nama Dokter </h1>
                                <h5> Bidang </h5>
                                <p> x tahun </p>
                                <h4> Lokasi Praktek </h4>
                                <a href="">
                                    <button> Lihat Selengkapnya </button>
                                </a>
                            </div>
                        </div>
                        <div class="dr-cards">
                            <img src="../media/dr.jpg" alt=""/>
                            <div class="dr-info">
                                <h1> Nama Dokter </h1>
                                <h5> Bidang </h5>
                                <p> x tahun </p>
                                <h4> Lokasi Praktek </h4>
                                <a href="">
                                    <button> Lihat Selengkapnya </button>
                                </a>
                            </div>
                        </div>
                        <div class="dr-cards">
                            <img src="../media/dr.jpg" alt=""/>
                            <div class="dr-info">
                                <h1> Nama Dokter </h1>
                                <h5> Bidang </h5>
                                <p> x tahun </p>
                                <h4> Lokasi Praktek </h4>
                                <a href="">
                                    <button> Lihat Selengkapnya </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}