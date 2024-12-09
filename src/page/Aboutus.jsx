import React, { useEffect, useState } from 'react';
import '../css/about.css'
import styles from '../css/about.css'
import bgimg1 from '../assest/aboutmain.jpg';
import about from '../assest/about.jpg';
// import person1 from '../assest/person_1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.css';
const Aboutus = () => {
    const [counts, setCounts] = useState({
        user: 1287,
        product: 5786,
        customer: 1440,
        client: 5404
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts => ({
                user: prevCounts.user + Math.floor(Math.random() * 10),
                customer: prevCounts.customer + Math.floor(Math.random() * 10),
                product: prevCounts.product + Math.floor(Math.random() * 10),
                client: prevCounts.client + Math.floor(Math.random() * 10)
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {/* <div>Aboutus</div> */}
            <div className="hero-wrap hero-bread" style={{
                backgroundImage: `url(${bgimg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: "100vh",
                display: 'flex',
                alignItems: 'center',  // Center vertically
                justifyContent: 'center'
            }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <a href="index.html">Home</a>
                                </span>
                                <span> About us</span>
                            </p>
                            <h1 className="mb-0 bread">About us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate bg-light" style={{ width: '80%' }}>
                            <div className="heading-section-bold mb-4 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">Welcome to Vegefoods, an eCommerce website</h2>
                                </div>
                            </div>
                            <div className="pb-md-5">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                <p><a href="#" className="btn btn-primary">Shop now</a></p>
                            </div>
                        </div>
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{
                            backgroundImage: `url(${about})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            height: "100vh",
                            width: '100%',
                            display: 'flex',
                            margin: '0 auto',
                            position: 'relative'

                        }}>
                            <div className='relative' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <a href="https://youtu.be/jnLy0IFh5G8?si=H1xximrjVlcTMl0p">
                                    <button className="button-about">
                                        <span><i className="fa fa-play" /></span>
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
                <div className="container py-4">
                    <div className="row d-flex justify-content-center py-5">
                        <div c  lassName="col-md-6">
                            <h2 style={{ fontSize: '22px' }} className="mb-0">Subscribe to our Newsletter</h2>
                            <span>Get e-mail updates about our latest shops and special offers</span>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control" placeholder="Enter email address" />
                                    <input type="submit" value="Subscribe" className="submit px-3" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="ftco-section1 bg-light">
                <div className="container">
                    <div className="row no-gutters ftco-services">
                        <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services mb-md-0 mb-4">
                                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                                    <span className="fas fa-shipping-fast"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Free Shipping</h3>
                                    <span>On orders over $100</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services mb-md-0 mb-4">
                                <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                                    <span class="fas fa-carrot"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Always Fresh</h3>
                                    <span>Well-packaged products</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services mb-md-0 mb-4">
                                <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                                    <span class="fas fa-award"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Superior Quality</h3>
                                    <span>Quality Products</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services mb-md-0 mb-4">
                                <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                                    <span class="fas fa-headset"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Support</h3>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="ftco-section testimony-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
                            <span className="subheading">Testimony</span>
                            <h2 className="mb-4">Our satisfied customer says</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                    </div>
                    <div className="row ftco-animate fadeInUp ftco-animated">
                        <div className="col-md-12">
                            <div className="carousel-testimony owl-carousel owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{ transition: 'all 0.25s ease 0s', width: '4400px', transform: 'translate3d(-1600px, 0px, 0px)' }}>
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5" style={{ backgroundImage: `url(${person1})` }}>
                                                <span className="quote d-flex align-items-center justify-content-center">
                                                    <i className="icon-quote-left"></i>
                                                </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">UI Designer</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: '370px', marginRight: '30px' }}>
                                            <div className="item">
                                                <div className="testimony-wrap p-4 pb-5">
                                                    <div className="user-img mb-5" style={{ backgroundImage:  `url(${person1})` }}>
                                                        <span className="quote d-flex align-items-center justify-content-center">
                                                            <i className="icon-quote-left"></i>
                                                        </span>
                                                    </div>
                                                    <div className="text text-center">
                                                        <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                        <p className="name">Garreth Smith</p>
                                                        <span className="position">UI Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: "370px", marginRight: '30px' }}>
                                            <div className="item">
                                                <div className="testimony-wrap p-4 pb-5">
                                                    <div className="user-img mb-5" style={{ backgroundImage:  `url(${person1})` }}>
                                                        <span className="quote d-flex align-items-center justify-content-center">
                                                            <i className="icon-quote-left"></i>
                                                        </span>
                                                    </div>
                                                    <div className="text text-center">
                                                        <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and
                                                            Consonantia, there live the blind texts.</p>
                                                        <p className="name">Garreth Smith</p>
                                                        <span className="position">Interface Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active center" style={{ width: "370px", marginRight: '30px' }}>
                                            <div className="item">
                                                <div className="testimony-wrap p-4 pb-5">
                                                    <div className="user-img mb-5" style={{ backgroundImage:  `url(${person1})` }}>
                                                        <span className="quote d-flex align-items-center justify-content-center">
                                                            <i className="icon-quote-left"></i>
                                                        </span>
                                                    </div>
                                                    <div className="text text-center">
                                                        <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and
                                                            Consonantia, there live the blind texts.</p>
                                                        <p className="name">Garreth Smith</p>
                                                        <span className="position">UI Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: "370px", marginRight: '30px' }}>
                                            <div className="item">
                                                <div className="testimony-wrap p-4 pb-5">
                                                    <div className="user-img mb-5" style={{ backgroundImage:  `url(${person1})`}}>
                                                        <span className="quote d-flex align-items-center justify-content-center">
                                                            <i className="icon-quote-left"></i>
                                                        </span>
                                                    </div>
                                                    <div className="text text-center">
                                                        <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and
                                                            Consonantia, there live the blind texts.</p>
                                                        <p className="name">Garreth Smith</p>
                                                        <span className="position">Web Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button role="presentation" className="owl-prev"><span className="ion-ios-arrow-back"></span></button>
                                    <button role="presentation" className="owl-next"><span className="ion-ios-arrow-forward"></span></button>
                                </div>
                                <div className="owl-dots">
                                    <button className="owl-dot"><span></span></button>
                                    <button className="owl-dot"><span></span></button>
                                    <button className="owl-dot active"><span></span></button>
                                    <button className="owl-dot"><span></span></button>
                                    <button className="owl-dot"><span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="ftco-section testimony-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
                            <span className="subheading">Testimony</span>
                            <h2 className="mb-4">Our satisfied customer says</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                    </div>
                    <div className="row ftco-animate fadeInUp ftco-animated">
                        <div className="col-md-12">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5" style={{ backgroundImage: `url(${person1})` }}>
                                                <span className="quote d-flex align-items-center justify-content-center">
                                                    <i className="icon-quote-left"></i>
                                                </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">UI Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5" style={{ backgroundImage: `url(${person1})` }}>
                                                <span className="quote d-flex align-items-center justify-content-center">
                                                    <i className="icon-quote-left"></i>
                                                </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">UI Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5" style={{ backgroundImage: `url(${person1})` }}>
                                                <span className="quote d-flex align-items-center justify-content-center">
                                                    <i className="icon-quote-left"></i>
                                                </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth dsdbsjdb</p>
                                                <span className="position">UI Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                   <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                   <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="section-title text-center">
                                <h2>Our Newsletter</h2>
                                <p>We bring the right people together to challenge established thinking and drive transformation. We will show the way to success.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-7">
                            <form className="newsletter-form">
                                <input type="email" placeholder="Enter your email..." required />
                                <button type="submit">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section className="counter-section">
                <div className="container">
                    <div className="row text-center main-c w-100">
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h2><span>{counts.customer}</span>+</h2>
                            <p>Customers</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h2><span>{counts.user}</span>+</h2>
                            <p>Users</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h2><span>{counts.product}</span>+</h2>
                            <p>Products</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h2><span>{counts.client}</span>+</h2>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="ftco-section ftco-counter img" id="section-counter" style={{
                backgroundImage: 'url(images/bg_3.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }}>
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="10000">0</strong>
                                            <span>Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="100">0</strong>
                                            <span>Branches</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="1000">0</strong>
                                            <span>Partner</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="100">0</strong>
                                            <span>Awards</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate>
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                                        <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                    <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Android App</a></li>
                                        <li><a href="#">iOS App</a></li>
                                        <li><a href="#">Desktop</a></li>
                                        <li><a href="#">Projects</a></li>
                                        <li><a href="#">My tasks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fab fa-facebook"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-linkedin"></a>
                                        <a href="#" className="fab fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="text-center">
                                <p className="mb-0 f_400">© Groccery Glow Inc.. 2024 All rights reserved.</p>
                            </div>
                            {/* <div className="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i className="icon_heart"></i> in <a href="http://cakecounter.com" target="_blank" rel="noopener noreferrer">CakeCounter</a></p>
                        </div> */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Aboutus;
