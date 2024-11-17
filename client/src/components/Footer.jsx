const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content container">
          <div className="footer-section about">
            <h2 className="footer-title">About Us</h2>
            <p>
            Aidocmaker empowers users with AI-driven tools to create professional, well-structured documents quickly and efficiently.
            </p>
          </div>
          <div className="footer-section links">
            <h2 className="footer-title">Quick Links</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Docs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2 className="footer-title">Contact Us</h2>
            <p>Email:supriyo.codes@gmail.com</p>
            <p>Phone: +816-752-4491</p>
          </div>
          <div className="footer-section social">
            <h2 className="footer-title">Follow Us</h2>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/supriyo_1207" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/supriyomaity_1207/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/supriyomaity/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Aidocmaker | All Rights Reserved</p>
        </div>
        
      </footer>
      <style jsx="true">
        {`
          .footer {
            position: relative;
             background: linear-gradient(to bottom, #1c1c1c, #0a0a0a);
            color: #fff;
            padding: 50px 0;
            overflow: hidden;
          }

          .footer-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .footer-section {
            flex: 1;
            min-width: 220px;
            padding: 20px;
            transition: background-color 0.3s;
          }

          .footer-section:hover {
            background-color: rgba(255, 111, 97, 0.1);
            border-radius: 8px;
          }

          .footer-title {
            font-size: 24px;
            margin-bottom: 20px;
            position: relative;
            animation: slideIn 1s ease-in-out forwards;
          }

          .footer-title::after {
            content: '';
            width: 0; /* Initially hidden */
            height: 3px;
            background: #ff6f61;
            position: absolute;
            bottom: -10px;
            left: 0;
            transition: width 0.3s ease; /* Transition for width change */
          }

          .footer-title:hover::after {
            width: 60px; /* Width on hover */
          }

          .footer-section p,
          .footer-section ul {
            animation: fadeIn 1.5s ease-in-out forwards;
          }

          .footer-section ul {
            list-style: none;
            padding: 0;
          }

          .footer-section ul li {
            margin-bottom: 10px;
          }

          .footer-section ul li a {
            color: #ff6f61;
            text-decoration: none;
            transition: color 0.3s ease, transform 0.3s;
          }

          .footer-section ul li a:hover {
            color: #fff;
            transform: translateX(5px);
          }

          .footer-bottom {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #ccc;
          }

          // .footer-visualization {
          //   position: absolute;
          //   bottom: 0;
          //   left: 50%;
          //   width: 200%;
          //   height: 250px;
          //   background: radial-gradient(circle, rgba(255, 111, 97, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
          //   animation: rotateBackground 15s infinite linear;
          //   transform: translateX(-50%);
          // }

          .social-links {
            display: flex;
            gap: 15px;
            animation: fadeIn 1.5s ease-in-out forwards;
          }

          .social-icon {
            font-size: 20px;
            color: #ff6f61;
            transition: transform 0.3s, color 0.3s;
            text-align: center;
          }

          .social-icon:hover {
            color: #fff;
            transform: rotate(360deg) scale(1.2);
          }

          .social-icon i {
            animation: float 2s infinite ease-in-out alternate;
          }

          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes rotateBackground {
            from {
              transform: translateX(-50%) rotate(0deg);
            }
            to {
              transform: translateX(-50%) rotate(360deg);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-5px);
            }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              text-align: center;
            }

            .footer-visualization {
              height: 150px;
            }

            .social-links {
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .footer-section {
              padding: 10px;
            }

            .footer-title {
              font-size: 20px;
            }

            .social-icon {
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
