import React from 'react';

export default function Navbar() {
    return (
      <nav className="navigation">
          <ul>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
          </ul>
      </nav>
    );
  }