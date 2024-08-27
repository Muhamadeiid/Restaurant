import React, { useEffect, useState } from "react";
import style from "./home.css";
import Nav from "../NavBar/Nav";
import fPic from "./../../Images/My First Photo.jpg";
import sPic from "./../../Images/My Second Pic.jpg";
import tPic from "./../../Images/My Third Pic.jpg";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import layout from "./../../Images/food.jpg"
import logo from "./../../Images/Logo.jpg"
import Footer from "./../Footer/Footer" 
import { FiCoffee } from "react-icons/fi";
import { FaBowlFood } from "react-icons/fa6";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaCheese } from "react-icons/fa";
import fastFood from "./../../Images/fastfood.jpg"



const HomePage = () => {
  let images = [fPic, sPic, tPic];

  let [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide - 1);
  };
  if (slide === images.length) {
    slide = 0;
  } else if (slide === -1) {
    slide = images.length - 1;
  }
  let myImgs = images.map((item, idx) => (
    <div classNameName={slide === idx ? "slider" : "hidden"} key={idx}>
      <img src={item} alt={item.idx} key={idx} />
    </div>
  ));
  useEffect(() => {
    nextSlide();
    prevSlide();
  }, [setSlide]);

  return (
    <>
      <Nav />
      {/* <div className="Section-one">
        <div className="sliders">
          {myImgs}
          <GoArrowRight onClick={nextSlide} classNameName="right" />
          <GoArrowLeft onClick={prevSlide} className="left" />
          <span className="indicators">
            {images.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={slide == idx ? "indicator" : "blury"}
                ></button>
              );
            })}
          </span>
        </div>
      </div> */}
      <div className="section-two">
    <div className="background">
      <img src={layout} alt="my background" />
      <div className="hero">
        <div className="content">
          <h1>best food for yours taste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque,
            rem voluptatibus
          </p>
          <div className="buttons">
            <button className="first">Book A Table</button>
            <button className="second">Explore Menu</button>
          </div>
        </div>
      </div>
    </div>
    <div className="browse">
      <h1>Browse our Menu</h1>
      <div className="container">
        <div className="card">
        <FiCoffee />
          <h3>Hot Drinks</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            enim! Accusamus officia repudiandae,
          </p>
          <h4>Explore Menu</h4>
        </div>
        <div className="card">
        <FaBowlFood />
          <h3>Food</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            enim! Accusamus officia repudiandae,
          </p>
          <h4>Explore Menu</h4>
        </div>
        <div className="card">
        <FaWineGlassAlt />
          <h3>Soft Drinks</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            enim! Accusamus officia repudiandae,
          </p>
          <h4>Explore Menu</h4>
        </div>
        <div className="card">
        <FaCheese />
          <h3>Desserts</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            enim! Accusamus officia repudiandae,
          </p>
          <h4>Explore Menu</h4>
        </div>
      </div>
    </div>
    <div className="providing">
      <div className="images">
        <div className="my-img">
          <img src={fastFood} alt="Fast Food" />
          <div className="visiting">
            <h3>Come And visit us</h3>
            <div className="item">
              <i className="fa-solid fa-phone"></i>
              <p>(414)857-0107</p>
            </div>
            <div className="item">
              <i className="fa-solid fa-envelope"></i>
              <p>yummy@bistrobliss</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h1>We provide healthy food for your family</h1>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ipsa
          nihil harum provident corporis obcaecati eveniet tenetur dicta enim,
          ex quo, recusandae beatae fuga ratione nostrum? Consectetur aut
          quaerat odit.
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minima
          debitis earum, animi dicta quibusdam perspiciatis numquam et tenetur
          veritatis molestiae rerum accusantium
        </p>
        <button>More About Us</button>
      </div>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
