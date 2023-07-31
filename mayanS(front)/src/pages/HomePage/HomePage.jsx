import React from 'react'
import "../HomePage/HomePage.css";
import aboutImg from "../../assets/about-img.png"
import backgroundImg from "../../assets/background-img.png"
import banner from "../../assets/banner.png"
import g1 from "../../assets/g1.png"
import g2 from "../../assets/g2.png"
import g3 from "../../assets/g3.png"
import logo from "../../assets/logo.png"
import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"
import p5 from "../../assets/p5.png"
import p6 from "../../assets/p6.png"
import p7 from "../../assets/p7.png"
import p8 from "../../assets/p8.png"
import p9 from "../../assets/p9.png"
import p10 from "../../assets/p10.png"
import p11 from "../../assets/p11.png"
import p12 from "../../assets/p12.png"
import pic1 from "../../assets/pic-1.png"
import pic2 from "../../assets/pic-2.png"
import pic3 from "../../assets/pic-3.png"
import upArrow from "../../assets/up-arrow.png"

export const HomePage = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>

    <div className="home">
        <div className="main-text">
            <h1>Discover The Best <br/>Furniture For You</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore nulla quis doloribus modi magni iusto earum! Necessitatibus, quidem quia.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore nulla quis doloribus modi magni iusto earum! Necessitatibus, quidem quia.</p>
            <button id="btn">View More</button>
        </div>
    </div>
    {/* <!-- Home Section End -->
    <!-- Top Section Card Start --> */}
    <section className="offers">
        <div className="offer-content">
            <div className="row">
                <i className="fa-solid fa-truck-fast"></i>
                <h3>Free Delivery</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-headset"></i>
                <h3>Support 24/7</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-rotate-left"></i>
                <h3>30 Day Return</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-cart-shopping"></i>
                <h3>Secure Shopping</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </section>
    {/* <!-- Top Section Card End -->
    <!-- About Section Start --> */}
    <section className="about" id="about">
        <div className="about-img">
            <img src={aboutImg} alt=""/>
        </div>
        <div className="about-text">
            <h3>Furniture service About us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo maxime, eligendi nesciunt quis quaerat cupiditate rerum enim obcaecati eum totam facilis, sunt tempore libero officia. Ad, excepturi. Qui, voluptatem officia aspernatur iure nam, architecto quos molestiae assumenda nesciunt porro voluptatum dolorum consequatur odit. Laudantium saepe sunt perspiciatis dolores ex.</p>
            <button id="about-btn">Read More...</button>
        </div>
        
    </section>
    {/* <!-- About Section End -->
    <!-- Product Section Start --> */}
    <section className="product" id="product">
        <div className="main-txt">
            <h3>Products</h3>
        </div>
        <div className="card-content">
            <div className="row">
                <img src={p1} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p2} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p3} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p4} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="row">
                <img src={p5} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p6} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p7} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p8} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Section End -->
    <!-- Banner Start --> */}
    <div className="banner">
        <div className="banner-content">
            <h5>Get Discount Up To 50%</h5>
            <h3>Best Deal For Weak</h3>
            <p>Get up to 50% off this weak and get offer <br/>Don't miss</p>
            <button><a href="#products">Order</a></button>
        </div>
    </div>
    {/* <!-- Banner End -->
    <!-- Sale Products Start --> */}
    <section className="product" id="products" style={{marginTop: 50+'px'}}>
        <div className="main-txt">
            <h3>50% off products</h3>
        </div>
        <div className="card-content">
            <div className="row">
                <img src={p9} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p10} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p11} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src={p12} alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Sale Products End -->
    <!-- Our Gallary Start --> */}
    <div className="gallary">
        <h3>Our Gallary</h3>
        <div className="gallary-img">
            <div className="img1">
                <img src={g1} alt=""/>
            </div>
            <div className="img1">
                <img src={g2} alt=""/>
                <img src={g3} alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Our Gallary End -->
    <!-- Contact Section Start --> */}
    <section className="contact" id="contact">
        <div className="content-text">
            <h2>Get In <span>Touch</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, harum. Sint recusandae in suscipit blanditiis, neque eos quam praesentium impedit?</p>
            <div className="list">
                <li><a href="#">+9200000000000000</a></li>
                <li><a href="#">example@gmail.com</a></li>
                <li><a href="#">Pakistan Sindh Karachi</a></li>
            </div>
        </div>
        <div className="contact-form">
            <form action="#">
                <input type="name" placeholder="Name" required/>
                <input type="number" placeholder="Phone" required/>
                <input type="email" placeholder="Email" required/>
                <textarea name="" id="" cols="35" rows="10" placeholder="Message"></textarea>
                <input type="submit" value="Send" className="submit" required/>
            </form>
        </div>
    </section>
    {/* <!-- Contact Section End -->
    <!-- Review Section Start --> */}
    <section className="review" id="review">
        <div className="main-txt">
            <h3>Customers <span>Review</span></h3>
        </div>
        <div className="review-content">
        <div className="box">
        <div className="img">
            <img src={pic1} alt=""/>
        </div>
        <h3>Elon Musk</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>
    </div>
        <div className="box">
        <div className="img">
            <img src={pic2} alt=""/>
        </div>
        <h3>Elon Musk</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>
    </div>
        <div className="box">
        <div className="img">
            <img src={pic3} alt=""/>
        </div>
        <h3>Elon Musk</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>
    </div>
</div>
    </section>
    {/* <!-- Review Section End -->
    <!-- Footer Start --> */}
    <footer id="footer">
        <div className="footer-content">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore suscipit nisi non, laudantium delectus?
                <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias!
            </p>
            <div className="socail-links">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-pinterest-p"></i>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom-content">
            <p>Designed By <a href="#">SA Coding</a></p>
            <div className="copyright">
                <p>&copy;Copyright <strong>SA Coding</strong>.All Rights Reserved</p>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    <a href="#" className="arrow"><i><img src={upArrow} alt="" width="50px"/></i></a>

    </>
  )
}
