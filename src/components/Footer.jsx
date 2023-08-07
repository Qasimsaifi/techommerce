import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
        <div className="avatar ">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 bg-primary ring-offset-2">
              <img src="/logo.png" className=""/>
            </div>
          </div>
          <p>
          Tecommerce: Where <br /> Tech Meets Trends.
          </p>
        </div>
        <div>
          <span className="footer-title">SHOP</span>
          <a className="link link-hover">T-Shirts</a>
          <a className="link link-hover">Sweatshirts</a>
          <a className="link link-hover">Zippper Hoodies</a>
          <a className="link link-hover">Zippper Hoodies</a>
          <a className="link link-hover">Mugs</a>
        </div>
        <div>
          <span className="footer-title">CUSTOMER SERVICE</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Return Policy</a>
        </div>
        <div>
          <span className="footer-title">POLICY</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms and Conditions</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
