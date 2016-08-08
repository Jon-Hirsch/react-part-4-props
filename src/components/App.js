import React from 'react';
import {Component} from 'react';
import HelloWorld from './HelloWorld';
import NavBar from './NavBar';
import PillHeader from './PillHeader';

export default class App extends Component {
  render() {
    let links = [
      {
        text: 'JonHirsch.Net',
        href: "http://www.jonhirsch.net"
      },
      {
        text: 'Google',
        href: "http://www.google.com"
      },
      {
        text: 'React',
        href: "https://facebook.github.io/react/"
      }
    ];
    return (
      <div>
        <NavBar links = {links} />
      </div>
    );
  }
}
