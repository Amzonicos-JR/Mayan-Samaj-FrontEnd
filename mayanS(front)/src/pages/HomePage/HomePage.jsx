import React from 'react'
import { Link } from "react-router-dom";
import "../HomePage/HomePage.css";
import aboutImg from "../../assets/about-img.png"
import backgroundImg from "../../assets/background-img.png"
import banner from "../../assets/banner.png"
import g1 from "../../assets/g1.png"
import g2 from "../../assets/g2.png"
import g3 from "../../assets/g3.png"
import g4 from "../../assets/g4.png"
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
            <h1>Bienvenidos a  <br/> Mayan Samaj</h1>
            <p>Somos la mejor opción</p>
            <p>Hazte conocer en el mundo laboral sin ningun certificado Universitario</p>
            <Link to='/login'>
            <button id="btn">Registrate</button>
            </Link>
            
        </div>
    </div>
    {/* <!-- Home Section End -->
    <!-- Top Section Card Start --> */}
    <section className="offers">
        <div className="offer-content">
            <div className="row">
                <i className="fa-solid fa-truck-fast"></i>
                <h3>Confiable y Seguro</h3>
                <p>Contamos con el mejores trabajadores</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-headset"></i>
                <h3>Soporte 24/7</h3>
                <p>Nuestros operadores estan las 24 horas</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-rotate-left"></i>
                <h3>365 dias del año</h3>
                <p>Contamos con servicio todo el año</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-cart-shopping"></i>
                <h3>Trabajos garantizados</h3>
                <p>Contacto con los mejores contratistas</p>
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
            <h3>Quienes somos?</h3>
            <p>“Mayan Samaj”, es una página web que su principal objetivo será ayudar a la población de Guatemala, 
              que por diversas razones no cuenta con títulos profesionales, pero sin embargo se destacan en uno o varios oficios y quieren superarse como profesionales en los mismos. </p>
            
        </div>
        
    </section>
    {/* <!-- About Section End -->
    <!-- Product Section Start --> */}
    <section className="product" id="product">
        <div className="main-txt">
            <h3>Mejores Trabajadores</h3>
        </div>
        <div className="card-content">
            <div className="row">
                <img src={p1} alt=""/>
                <div className="card-body">
                <br></br>
                    <h3>Joaquín</h3>
                    <p>Oficio Albañilería <br></br>10 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    
                    <br></br>
                    <br></br>
                    <a href="#contact">Contratar</a>
                </div>
            </div>
            <div className="row">
                <img src={p2} alt="500" />
                <div className="card-body">
                    <h3> Miguel</h3>
                    <p>Oficio Carpintería <br></br>15 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      
                    </div>
                    <br></br>
                    <a href="#contact">Contratar</a>
                </div>
            </div>
            <div className="row">
                <img src={p3} alt=""/>
                <div className="card-body">
                    <h3>Cerrajero</h3>
                    <p>Oficio Cerrejería <br></br>5 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <br></br>
                    <a href="#contact">Contratar</a>
                </div>
            </div>
            <div className="row">
                <img src={p4} alt=""/>
                <div className="card-body">
                    <h3>Mecanico</h3>
                    <p>Oficio Mecanica <br></br>25 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <br></br>
                    <a href="#contact">Contratar</a>
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="row">
                <img src={p5} alt=""/>
                <div className="card-body">
                    <h3>Electricista</h3>
                    <p>Oficio Electricista <br></br>8 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <br></br>
                    <a href="#contact">Contratar</a>
                    </div>
            </div>
            <div className="row">
                <img src={p6} alt=""/>
                <div className="card-body">
                    <h3>Pintor</h3>
                    <p>Oficio Pintor <br></br>15 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <br></br>
                    <a href="#contact">Contratar</a>
                    </div>
            </div>
            <div className="row">
                <img src={p7} alt=""/>
                <div className="card-body">
                <h3>Carnicero</h3>
                    <p>Oficio Carnicerìa <br></br>30 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <br></br>
                    <a href="#contact">Contratar</a>
                    </div>
            </div>
            <div className="row">
                <img src={p8} alt=""/>
                <div className="card-body">
                <h3>Panadero</h3>
                    <p>Oficio Panadero <br></br>5 de Experiencia</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <br></br>
                    <a href="#contact">Contratar</a>
                    </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Section End -->
    <!-- Banner Start --> */}
    <div className="banner">
        <div className="banner-content">
            <h5>50% de comision al realizar tu primer trabajo  </h5>
            <h3>APROVECHA</h3>
            <p><br/></p>
            <Link to='/login'>
            <button><a >Registrate</a></button>
            </Link>
        </div>
    </div>

    
    {/* <!-- Sale Products End -->
    <!-- Our Gallary Start --> */}
    <div className="gallary">
        <h3>Fotos de Trabajos Realizados</h3>
        <div className="gallary-img">
            <div className="img1">
                <img src={g1} alt=""/>
                <br></br>
                <br></br>
                <img src={g4} alt=""/>
            </div>
            <div className="img1">
                <img src={g2} alt=""/>
                <br></br>
                <br></br>
                <img src={g3} alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Our Gallary End -->
    <!-- Contact Section Start --> */}
    <section className="contact" id="contact">
        <div className="content-text">
            <h2>Cotratar a  <span>Trabajador</span></h2>
            <p>Para poder contactarte con un trabajador envia los siguiendes datos</p>
            <p>Y se te mostrara una nueva pestaña la cual debes logearte.</p>
            <div className="list">
                <li><a href="#">+502 92002400</a></li>
                <li><a href="#">MayanSamaj@gmail.com</a></li>
                <li><a href="#"></a></li>
            </div>
        </div>
        <div className="contact-form">
            <form action="#">
                <input type="name" placeholder="Nombre de Trabajador" required/>
                <input type="number" placeholder="Numero de Telefono" required/>
                <input type="email" placeholder="Email" required/>
                <textarea name="" id="" cols="35" rows="10" placeholder="Description"></textarea>
                
                <Link to='/login'>
                <input type="submit" value="Send" className="submit" required/>
                </Link>
            </form>
        </div>
    </section>
    {/* <!-- Contact Section End -->
    <!-- Review Section Start --> */}
    <section className="review" id="review">
        <div className="main-txt">
            <h3>Comentarios  <span>de nuestros clientes</span></h3>
        </div>
        <div className="review-content">
        <div className="box">
        <div className="img">
            <img src={pic1} alt=""/>
        </div>
        <h3>Daniel</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            
        </div>
        <br></br>
        <p> "Nunca pensé que encontraría una plataforma que 
            realmente valore las habilidades y la experiencia sobre la educación formal. Gracias a ustedes, he conseguido un trabajo increíble que me permite crecer profesionalmente sin la necesidad de un título universitario."</p>
    </div>
        <div className="box">
        <div className="img">
            <img src={pic2} alt=""/>
        </div>
        <h3>María</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
        </div>
        <br></br>
        <p>"Estoy realmente impresionado con el servicio que ofrecen para personas sin un 
            certificado universitario. Gracias a su plataforma, he encontrado un trabajo que se ajusta perfectamente a mis habilidades y experiencia, lo que ha sido una oportunidad invaluable para mi carrera."</p>
    </div>
        <div className="box">
        <div className="img">
            <img src={pic3} alt=""/>
        </div>
        <h3>Sergio</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            
        </div>
        <br></br>
        <p>"Su servicio ha sido una bendición para mí y muchos otros. Me alegra que se enfoquen en las habilidades y el potencial en lugar de exigir 
            un título universitario. Estoy muy agradecido por la oportunidad que me han brindado y recomendaría su plataforma a cualquier persona en mi situación." </p>
    </div>
</div>
    </section>
    {/* <!-- Review Section End -->
    <!-- Footer Start --> */}
    <footer id="footer">
        <div className="footer-content">
            <div className="">
            <h3>Mayan Samaj</h3>
            </div>
            <p>
                <br/>
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
            <p>Designed By <a href="#">Maya Samaj</a></p>
            <div className="copyright">
                <p>&copy;Copyright <strong>Mayan Samaj</strong>.All Rights Reserved</p>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    <a href="#" className="arrow"><i><img src={upArrow} alt="" width="50px"/></i></a>

    </>
  )
}
