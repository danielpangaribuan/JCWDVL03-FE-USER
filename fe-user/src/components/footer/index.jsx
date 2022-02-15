import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Footer() {
  return (
    <div class="footer-container">
      <footer class="py-lg-5 py-3">
        <div class="container-fluid px-lg-5 px-3">
          <div class="row footer-top-w3layouts">
            <div class="col-lg-3 footer-grid-w3ls">
              <div class="footer-title">
                <h3>About Us</h3>
              </div>
              <div class="footer-text">
                <p class="text-paragraph">
                  Curabitur non nulla sit amet nislinit tempus convallis quis ac
                  lectus. lac inia eget consectetur sed, convallis at tellus.
                  Nulla porttitor accumsana tincidunt.
                </p>
                <ul class="footer-social text-left mt-lg-4 mt-3">
                  <li class="mx-2">
                    <a href="#">
                      <span class="fab fa-facebook-f"></span>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="#">
                      <span class="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="#">
                      <span class="fab fa-google-plus-g"></span>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="#">
                      <span class="fab fa-linkedin-in"></span>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="#">
                      <span class="fas fa-rss"></span>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="#">
                      <span class="fab fa-vk"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 footer-grid-w3ls">
              <div class="footer-title">
                <h3>Get in touch</h3>
              </div>
              <div class="contact-info">
                <h5>Location :</h5>
                <p class="text-paragraph">
                  0926k 4th block building, king Avenue, New York City.
                </p>
                <div class="phone">
                  <h5>Contact :</h5>
                  <p class="text-paragraph">Phone : +121 098 8907 9987</p>
                  <p class="text-paragraph">
                    Email :
                    <a class="linkemail" href="mailto:info@example.com">
                      info@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 footer-grid-w3ls">
              <div class="footer-title">
                <h3>Quick Links</h3>
              </div>
              <ul class="links">
                <li>
                  <a class="links" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a class="links" href="about.html">
                    About
                  </a>
                </li>
                <li>
                  <a class="links" href="404.html">
                    Error
                  </a>
                </li>
                <li>
                  <a class="links" href="shop.html">
                    Shop
                  </a>
                </li>
                <li>
                  <a class="links" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 footer-grid-w3ls">
              <div class="footer-title">
                <h3>Sign up for your offers</h3>
              </div>
              <div class="footer-text">
                <p class="text-paragraph">
                  By subscribing to our mailing list you will always get latest
                  news and updates from us.
                </p>
              </div>
            </div>
          </div>
          <div class="copyright-w3layouts mt-4">
            <p class="copy-right text-center ">
              &copy; 2018 Goggles. All Rights Reserved | Design by
              <a class="linkw3" href="http://w3layouts.com/">
                {" "}
                W3layouts{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
