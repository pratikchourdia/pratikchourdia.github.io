import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Pratik Chourdia</h2>
        <p><a href="mailto:pratik@parshvaweb.com">pratik@parshvaweb.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Pratik. I like building things.
        I am a <a href="https://icme.stanford.edu/">Vikram University</a> graduate, VU Alumni, and
        the co-founder and CTO of <a href="https://parshvaweb.com">Parshvaweb.com</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Pratik Chourdia <Link to="/">pratikchourdia.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
