import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer class="footer">
    {/* <div class="container"> */}
        <a href="#" className="footer__scroll">
            <svg xmlns="http://www.w3.org/2000/svg" width="18.68" height="22.175" viewBox="0 0 18.68 22.175">
                <path id="Path_958" data-name="Path 958" d="M22.175,9.358a1.43,1.43,0,0,0-1.43-1.43H5.063l5.813-5.42A1.43,1.43,0,1,0,8.923.421L.455,8.311a1.43,1.43,0,0,0,0,2.091L8.923,18.3A1.43,1.43,0,1,0,10.875,16.2L5.063,10.788H20.746A1.43,1.43,0,0,0,22.175,9.358Z" transform="translate(18.68) rotate(90)" fill="#e76f51"/>
            </svg>
        </a>
        <div class="footer__wrapper">
            <div class="footer__left">
                <div class="footer-content">
                    <Link to= "/About">
                      <h2 className="footer__title">Über uns</h2>
                    </Link>
                    <h3 >Der Persian Carpet Store ist bereit, das Beste anzubieten.</h3>
                    <p class="footer-content__description">Holen Sie sich mit uns die außergewöhnlichsten und hochwertigsten Teppiche nach Hause.</p>
                </div>
                <div class="footer-app">
                    
                </div>
            </div>
            <div class="footer__right">
                <Link to="/contact" >
                <h2 className="footer__title">Kontakt</h2>
                </Link>
                <div className="footer__lists">
                    <div class="footer-list">
                    <h3>Get to Know Us</h3>
                    <ul class="footer-pages">
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">About Us</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Regeln & Einkaufen Policies</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Zugänglichkeit</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Medienzentrum</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Sitemap</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-list">
                    <h3>Planen Sie mit uns</h3>
                    <ul class="footer-pages">
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Finden Sie Inspiration für Ihr Zuhause</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Kaufplan</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Einkaufen</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Nehmen Sie an einer Lotterie teil</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-list">
                    <h3>Wir helfen Ihnen gerne</h3>
                    <ul class="footer-pages">
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Ihr Konto</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Ihre Interessen</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Kontak uns</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Hilfecenter</a>
                        </li>
                        <li class="footer-pages__item">
                            <a href="#" class="footer-pages__link">Feedback senden</a>
                        </li>
                    </ul>
                </div>

                </div>
                
            </div>
           
        </div>
        
        <div className="my-info">
            <p>Designed by <strong className="my-name">Shahrbanoo Sasanipour</strong></p>
            <div class="footer-links">
                <a href="https://github.com/BanooSasanipour" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="icon" />
                GitHub
                </a>
                <a href="mailto:sasanipourbanoo@gmail.com">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" class="icon" />
                Email
                </a>
            </div>
        </div>
        
    {/* </div> */}
</footer>
  );
}

