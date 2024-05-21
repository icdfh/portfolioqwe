import React from 'react';

const About = () => {
  return (
    <div className="rightPanel">
      <h1>About me</h1>
      <p>Hi, I’m Madiyar. Nice to meet you. Since beginning my journey as a freelance designer over 1 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
      <div className="languageBar">
        <h2>Language</h2>
        <p>Русский:</p>
        <div className="progressBar">
          <div className="progress" style={{ width: '90%' }}></div>
        </div>
        <p>Қазақ:</p>
        <div className="progressBar">
          <div className="progress" style={{ width: '75%' }}></div>
        </div>
        <p>English:</p>
        <div className="progressBar">
          <div className="progress" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default About;
