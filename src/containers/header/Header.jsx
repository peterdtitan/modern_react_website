import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="ca__header section__padding" id="home">
    <div className="ca__header-content">
      <h1 className="gradient__text">Let&apos;s Invest Stress-free with Crypto App OpenAI</h1>
      <p>We have simplified the process of making money. Let our open source AI and quality experts guide you through the process. In a fast-paced tech world, we make it as simple as possible.</p>

      <div className="ca__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="ca__header-content__people">
        <img src={people} />
        <p>1,613+ people requested investment portfolios in the last 24hrs</p>
      </div>
    </div>

    <div className="ca__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;