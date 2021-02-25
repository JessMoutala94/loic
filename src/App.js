import React from "react";
import "./styles.css";
import BT2 from "./BT2.jpg";
import BTA from "./BTA.jpg";
import a from "./a.jpg";
import d from "./d.jpg";
import r from "./r.jpg";
import k from "./k.jpg";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <SectionMenu />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer2 />
    </div>
  );
}
function SideMenu() {
  return (
    <section>
      <div className="icon-bar">
        <a href="https://www.facebook.com/LosynaComics" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/BielicTech" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/bielic_technology/"
          className="instagram"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#" className="youtube">
          <i className="fa fa-youtube"></i>
        </a>
      </div>
    </section>
  );
}
function SectionMenu() {
  return (
    <section className="sectionMenu">
      <div className="topNav" id="myTopNav">
        <a href="Home.html" className="active">
          HOME
        </a>
        <a href="About Us.html" className="active">
          ABOUT US
        </a>
        <a href="Client.html" className="active">
          CLIENTS
        </a>
        <a href="ITServices.html" className="active">
          IT SERVICES
        </a>
        <a href="Contact Us.html" className="active">
          CONTACT US
        </a>
        <h2>Bielic Technology</h2>
      </div>
    </section>
  );
}

function Section1() {
  return (
    <section className="section1">
      <img src={BT2} alt="tech" />
      <div className="Section1Text">
        {" "}
        Technology make us better than what we were Technology helps us make
        better decisions for our businesses
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="section2" id="bt">
      <h2>Our Services</h2>
      <div className="container2"></div>
      <div class="column">
        <div className="services">
          <h3> Microsoft/Windows Instalation</h3>
          <img src={d} alt="" width="70%" />
          <br />
          <br />
          <button>Get More Info</button>
        </div>
        <div className="services">
          <h3> Building Websites </h3>
          <img src={r} alt="" width="70%" />
          <br />
          <br />
          <button>Get More Info</button>
        </div>
        <div className="services">
          <h3> PC Repair </h3>
          <img src={k} alt="" width="70%" />
          <br />
          <br />
          <button>Get More Info</button>
        </div>
        <div className="services2">
          <h3> Network </h3>
          <img src={k} alt="" width="70%" />
          <br />
          <br />
          <button>Get More Info</button>
        </div>
        <div className="services2">
          <h3> PC Troubleshoot </h3>
          <img src={k} alt="" width="70%" />
          <br />
          <br />
          <button>Get More Info</button>
        </div>
        <div className="services2">
          <h3> IT Support </h3>
          <img src={a} alt="" width="70%" />
          <br />
          <br />
          <button>Get More Info</button>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="section3">
      <h2> Our Clients</h2>
      <div></div>
    </section>
  );
}

function Section4() {
  return (
    <section className="section4">
      <div>
        {" "}
        Bielic the home of advanced technology <br />
        <button>Click on the button below.</button> <br />
        <img src={BTA} alt="tech" />
      </div>
    </section>
  );
}

function Footer2() {
  return (
    <section>
      <footer>
        <div className="footer">
          <a1>
            {" "}
            © Copyright 2021 | All Rights Reserved | LOSYNA Limited |{" "}
            <a href="Terms&conditions.html"> Terms & Conditions </a> | Privacy
            Policy{" "}
          </a1>
        </div>
      </footer>
    </section>
  );
}

export default App;
