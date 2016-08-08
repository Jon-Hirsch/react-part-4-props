import React from 'react';
import {Component} from 'react';
import './css/navbar.css'

export default class NavBar extends Component {

  renderLinks() {
    let links = [];
    for(let i = 0; i < this.props.links.length; i++) {
      let link = this.props.links[i];
      links.push(<a key={i} className="navbar--link" href={link.href}>{link.text}</a>);
    }
    return links;
  }

  render() {
    return (
      <div className="navbar">
        {this.renderLinks()}
		  </div>
    );
  }
}
