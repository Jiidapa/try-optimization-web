import React from "react";
import Link from "next/link";

const data = [
  {
    img: "/static/img/img1.jpg"
  },
  {
    img: "/static/img/img2.jpg"
  },
  {
    img: "/static/img/img3.jpg"
  },
  {
    img: "/static/img/img4.jpg"
  },
  {
    img: "/static/img/img5.jpg"
  },
  {
    img: "/static/img/img6.jpg"
  },
  {
    img: "/static/img/img7.jpg"
  },
  {
    img: "/static/img/img8.jpg"
  },
  {
    img: "/static/img/img1.jpg"
  },
  {
    img: "/static/img/img2.jpg"
  },
  {
    img: "/static/img/img3.jpg"
  },
  {
    img: "/static/img/img4.jpg"
  },
  {
    img: "/static/img/img5.jpg"
  },
  {
    img: "/static/img/img6.jpg"
  },
  {
    img: "/static/img/img7.jpg"
  },
  {
    img: "/static/img/img8.jpg"
  }
];

export default function about() {
  return (
    <div className="container">
      <div className="topic">Food Menu</div>
      <div>
        <div className="grid-container">
          {data.map(({ img }, index) => (
            <div className="grid-item" key={index}>
              <div>
                <img src={img} className="img-size" />
              </div>
              <div className="menu-name">Menu {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-family: "Muli", sans-serif;
        }
        .topic {
          font-weight: 600;
          font-size: 2rem;
          margin: 3rem auto;
        }
        .menu-name {
          text-align: center;
        }
        .img-size {
          width: 300px;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1rem;
          align-items: center;
        }
        .grid-item {
        }
        .color {
          color: red;
        }
        @media (max-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
