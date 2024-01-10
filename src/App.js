// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
       <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" class="navbar-brand ml-lg-3">
            <h1 class="m-0 display-5"><span class="text-primary">Free</span>Folio</h1>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div class="navbar-nav m-auto py-0">
                <a href="#home" class="nav-item nav-link active">Home</a>
                <a href="#about" class="nav-item nav-link">About</a>
                <a href="#riwayat" class="nav-item nav-link">Riwayat</a>
                <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
                <a href="#contact" class="nav-item nav-link">Contact</a>
            </div>
            <a href="" class="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
        </div>
    </nav>

    <div className="container-fluid bg-info d-flex align-items-center mb-5 py-5" id="home" style={{minheight: "100vh" }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    <img className="img-fluid w-100 rounded-circle shadow-sm" src="assets/img/about1.jpg" alt="" />
                </div>
                <div className="col-lg-7 text-center text-lg-left">
                <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                <h1 className="display-3 text-uppercase mb-2" style={{ color: "transparent", WebkitTextStroke: "2px #000" }}>Daniel Reza..</h1>
                    <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
                    <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="" className="btn btn-outline-light mr-5">Download CV</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid py-5" id="about">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase mb-2" style={{ color: "transparent", WebkitTextStroke: "2px #fff" }}>About</h1>
                <h1 className="position-absolute text-uppercase text-primary" style={{ WebkitTextStroke: "2px #000" }}>About Me</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0">
                    <img className="img-fluid rounded w-100" src="assets/img/about1.jpg" alt="" />
                </div>
                <div className="col-lg-7">
                    <h3 className="mb-4">Siswa Smk Negri 6 Jember</h3>
                    <p>Saya adalah siswa jurusan RPL di Sekolah SMK Negri 6 Jember</p>
                    <div className="row mb-3">
                        <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Mochamad Daniel Reza</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">19 Januari 2005</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Status: <span className="text-secondary">Siswa</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Umur: <span className="text-secondary">18 Tahun</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+62 896 ****</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">webdaniel20@gmail.com</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Alamat: <span className="text-secondary">Gambirono Bangsalsari</span></h6></div>
                    </div>
                    <a href="" className="btn btn-outline-primary mr-4">Hire Me</a>
                    <a href="" className="btn btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5" id="riwayat">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase " style={{ color: "transparent", WebkitTextStroke: "2px #fff" }}>Riwayat</h1>
                <h1 className="position-absolute text-uppercase text-primary" style={{ color: "#000", WebkitTextStroke: "2px #000" }}>Riwayat</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3 className="mb-4">Pendidikan</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{top: "2px", left: "-32px" }}></i>
                            <h5 className="font-weight-bold mb-1">TK HARAPAN BANGSA</h5>
                            <p className="mb-2"><strong>Tk</strong> | <small>2008 - 2011</small></p>
                            <p>Lokasi : Gambirono Bangsalsari</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{top: "2px", left: "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">SDN GAMBIRONO 04</h5>
                            <p className="mb-2"><strong>Sd</strong> | <small>2011 - 2017</small></p>
                            <p>Lokasi : Gambirono Bangsalsari</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{top: "2px", left: "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">MTS NEGRI 4 JEMBER</h5>
                            <p className="mb-2"><strong>Mts</strong> | <small>2017 - 2020</small></p>
                            <p>Lokasi : Gambirono Bangsalsari</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{top: "2px", left: "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">SMK NEGRI 6 JEMBER</h5>
                            <p className="mb-2"><strong>Smk</strong> | <small>2020 - 2024</small></p>
                            <p>Lokasi : Tanggul</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="mb-4">Magang</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{top: "2px", left: "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">CV ASP TRIJAYA</h5>
                            <p className="mb-2"><strong>Cv</strong> | <small>6 BULAN</small></p>
                            <p>Lokasi : Jember</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid pt-5 pb-3" id="portfolio">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase" style={{ color: "transparent", WebkitTextStroke: "2px #fff" }}>Portfolio</h1>
                <h1 class="position-absolute text-uppercase text-primary" style={{ WebkitTextStroke: "2px #000" }}>Portfolio</h1>
            </div>
            <div class="row">
                <div class="col-12 text-center mb-2">
                    <ul class="list-inline mb-4" id="portfolio-flters">
                        <li class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li class="btn btn-sm btn-outline-primary m-1" data-filter=".desain">Design</li>
                        <li class="btn btn-sm btn-outline-primary m-1" data-filter=".website">Website</li>
                        <li class="btn btn-sm btn-outline-primary m-1" data-filter=".aplikasi">Aplikasi</li>
                    </ul>
                </div>
            </div>
            <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item desain">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src="assets/img/1.png" alt="" />
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/1.png" data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={{fontsize: "60px"}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item website">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src="assets/img/2.png" alt="" />
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/2.png" data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={{fontsize: "60px"}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item aplikasi">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src="assets/img/3.png" alt="" />
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/3.png" data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={{fontsize: "60px"}}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5" id="contact">
        <div class="container text-center py-5">
            <div class="d-flex justify-content-center mb-4">
                <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-instagram"></i></a>
                <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-youtube"></i></a>
                <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-whatsapp"></i></a>
                <a class="btn btn-light btn-social" href="https://github.com/danielrpl2"><i class="fab fa-github"></i></a>
            </div>
            <div class="d-flex justify-content-center mb-3">
                <a class="text-white" href="#">Privacy</a>
                <span class="px-3">|</span>
                <a class="text-white" href="#">Terms</a>
                <span class="px-3">|</span>
                <a class="text-white" href="#">FAQs</a>
                <span class="px-3">|</span>
                <a class="text-white" href="#">Help</a>
            </div>
            <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#">Dnl</a>. Mochamad Daniel Reza <a class="text-white font-weight-bold" href="https://htmlcodex.com">Portofolio</a>
            </p>
        </div>
    </div>
   
    </div>
  );
}

export default App;
