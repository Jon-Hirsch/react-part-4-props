import React from "react";
import "./css/navbar.css";

export default function NavBar(props) {
  return (
    <div className="navbar">
      {props.links.map((link) => (
        <a key={link.text} className="navbar--link" href={link.href}>
          {link.text}
        </a>
      ))}
    </div>
  );
}
