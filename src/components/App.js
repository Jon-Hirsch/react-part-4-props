import React from "react";
import NavBar from "./NavBar";

export default function App() {
  let links = [
    {
      text: "JonHirsch.dev",
      href: "http://www.jonhirsch.dev",
    },
    {
      text: "Google",
      href: "http://www.google.com",
    },
    {
      text: "React",
      href: "https://facebook.github.io/react/",
    },
  ];
  return (
    <div>
      <NavBar links={links} />
    </div>
  );
}
