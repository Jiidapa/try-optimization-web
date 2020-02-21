import React from "react";
import ActiveLink from "./ActiveClass";

export default function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="menu-layout">
          <div className="menu right">
            <ActiveLink activeClassName="active" href="/">
              <a>Home</a>
            </ActiveLink>
          </div>
          <div className="menu right">
            <ActiveLink activeClassName="active" href="/foodlist">
              <a>Menu</a>
            </ActiveLink>
          </div>
          <div className="menu">
            <ActiveLink activeClassName="active" href="/map">
              <a>Map</a>
            </ActiveLink>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 80%;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            box-sizing: border-box;
          }
          .logo {
            width: 60px;
          }
          .menu-layout {
            display: flex;
            flex-direction: row;
            margin-top: 1rem;
            width: 100%;
          }
          .menu {
            font-family: "Muli";
            font-weight: 600;
          }
          .right {
            margin-right: 1rem;
          }
          a {
            text-decoration: none;
            color: #000;
          }
          a:hover {
            color: #f5921d;
          }
          .active {
            color: #f5921d;
            border-bottom: 1px solid #f5921d;
          }
        `}
      </style>
    </div>
  );
}
