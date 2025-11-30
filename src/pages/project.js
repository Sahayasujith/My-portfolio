import React from "react";
import "./Product.css";
import Header from "../components/header";
import Footer from "../components/Footer";

function Product() {
  const products = [
    {
      img: "./image/shoe-website1.png",
      title: "Shoe Website",
      desc: "Front-end: React | Backend: Django | Database: Sqlite3",
      link: "https://shoe-website-navy-chi.vercel.app/",
    },
    {
      img: "./image/car-website.png",
      title: "Car Website",
      desc: "Front-end: React",
      link: "https://car-website-snowy-five.vercel.app/",
    },
    {
      img: "./image/login.png",
      title: "Login page",
      desc: "Only Frontend",
      link: "https://login-ten-jade.vercel.app/",
    },
    {
      img: "./image/anime.png",
      title: "Anime world",
      desc: "Front-end:React | Fully Resposive",
      link: "https://anime-world-orpin.vercel.app/",
    },
    {
      img: "./image/shoe-website2.png",
      title: "Shoe website",
      desc: "Front-end:React | Fully Resposive",
      link: "https://shoe-shop-sigma-vert.vercel.app/",
    },
    {
      img: "./image/calculator.png",
      title: "Money Calculator",
      desc: "Front-end:React | Fully Resposive",
      link: "https://calculator-eta-henna-98.vercel.app/",
    },
  ];

  return (
    <div className="product-content">
        <Header/>
        <div className="product-page">
            <h1 className="product-title">My <span>Projects</span></h1>

            <div className="product-grid">
                {products.map((item, index) => (
                <div className="product-card" key={index}>
                    <img src={item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank" rel="noreferrer">
                    Explore
                    </a>
                </div>
                ))}
            </div>
            <Footer/>
        </div>
    </div>
  );
}

export default Product;
