import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfoliopage.css';
import { useNavigate } from 'react-router-dom';
import avatarforcontainer from '../assets/images/avatarforcontainer.jpg';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import toolsIcon from '../assets/images/tools.png';
import frontendIcon from '../assets/images/frontend.png';
import backendIcon from '../assets/images/backend.png';
import designIcon from '../assets/images/design.png';
import User from '../assets/images/User.png';
import Email from '../assets/images/Email.png';
import Message from '../assets/images/Message.png';
import github from '../assets/images/github.png';
import bitbucketlogo from '../assets/images/bitbucketlogo.png';
import vscode from '../assets/images/vscode.png';
import figma from '../assets/images/figma.png';
import sql from '../assets/images/sql.png';
import linux from '../assets/images/linux.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import mui from '../assets/images/mui.png';
import tailwind from '../assets/images/tailwind.png';
import cpp from '../assets/images/cpp.png';
import java from '../assets/images/java.png';
import php from '../assets/images/php.png';
import django from '../assets/images/django.png';
import laravel from '../assets/images/laravel.png';
import mysql from '../assets/images/mysql.png';
import emailjs from 'emailjs-com';

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [projectSection, setProjectSection] = useState(null);
  const navigate = useNavigate();



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_per8hnh', 'service_per8hnh', e.target, 'service_per8hnh')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again.');
      });

    e.target.reset();
  };

  const renderProjects = () => {
    switch (projectSection) {
      case 'tools':
        return (
          <motion.div
            className="rightPanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Tools</h1>
            <div className="tools-grid">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={github} alt="Github" />
                    <h2>Github</h2>
                  </div>
                  <div className="flip-card-back">
                    <a href="https://github.com/icdfh"><p>https://github.com/icdfh</p></a>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={bitbucketlogo} alt="Bitbucket" />
                    <h2>Bitbucket</h2>
                  </div>
                  <div className="flip-card-back">
                    <a href="https://bitbucket.org/icdfhqwe"><p>https://bitbucket.org/icdfhqwe</p></a>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={vscode} alt="VSCode" />
                    <h2>VSCode</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>Confident user for 4 years</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={figma} alt="Figma" />
                    <h2>Figma</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>I have 4 years experience on Figma</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={sql} alt="SQL" />
                    <h2>SQL</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>Mysql, Sqlite, PostgreSQL</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={linux} alt="Linux" />
                    <h2>Linux</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>Confident user of Kali Linux, Ubuntu</p>
                  </div>
                </div>
              </div>
              {/* Добавьте другие инструменты и технологии по вашему усмотрению */}
            </div>
          </motion.div>
        );
      case 'frontend':
        return (
          <motion.div
            className="rightPanel"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h1>Frontend</h1>
            
            <div className="tools-grid">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={html} alt="Github" />
                    <h2>HTML</h2>
                  </div>
                  <div className="flip-card-back">
                   <p>I have good experience with Html for 3-4 years</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={css} alt="Bitbucket" />
                    <h2>CSS</h2>
                  </div>
                  <div className="flip-card-back">
                  <p>Same experience as with HTML</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={js} alt="VSCode" />
                    <h2>JavaScript</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>I know algorithms well, oops</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={react} alt="Figma" />
                    <h2>React</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>I have good experience working with react for a year</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mui} alt="SQL" />
                    <h2>MaterialUI</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>I have an understanding of working with material</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={tailwind} alt="Linux" />
                    <h2>TailwindCSS</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>Worse than the material</p>
                  </div>
                </div>
              </div>
              {/* Добавьте другие инструменты и технологии по вашему усмотрению */}
            </div>
          </motion.div>
        );
      case 'design':
        return (
          <motion.div
            className="rightPanel"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h1>Design</h1>
            <div className="tools-grid">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={cpp} alt="Github" />
                    <h2>HTML</h2>
                  </div>
                  <div className="flip-card-back">
                   <p>I have good experience with Html for 3-4 years</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={css} alt="Bitbucket" />
                    <h2>CSS</h2>
                  </div>
                  <div className="flip-card-back">
                  <p>Same experience as with HTML</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={js} alt="VSCode" />
                    <h2>JavaScript</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>I know algorithms well, oops</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={react} alt="Figma" />
                    <h2>React</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>I have good experience working with react for a year</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mui} alt="SQL" />
                    <h2>MaterialUI</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>I have an understanding of working with material</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={tailwind} alt="Linux" />
                    <h2>TailwindCSS</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>Worse than the material</p>
                  </div>
                </div>
              </div>
              {/* Добавьте другие инструменты и технологии по вашему усмотрению */}
            </div>
          </motion.div>
        );
      case 'backend':
        return (
          <motion.div
            className="rightPanel"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h1>Backend</h1>
            <div className="tools-grid">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={cpp} alt="Github" />
                    <h2>HTML</h2>
                  </div>
                  <div className="flip-card-back">
                   <p>
Very good understanding of how algorithms work, OOP, etc.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={java} alt="Bitbucket" />
                    <h2>CSS</h2>
                  </div>
                  <div className="flip-card-back">
                  <p>
Understanding the syntax of the language, working with OOP. Working with frameworks, working with libraries</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={php} alt="VSCode" />
                    <h2>PHP</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>Understanding language syntax, working with OOP</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={django} alt="Figma" />
                    <h2>Django</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>One of the best and easiest frameworks that I know at a good level</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={laravel} alt="SQL" />
                    <h2>Laravel</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>
Understanding the creation of a web application structure and the use of a framework</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mysql} alt="Linux" />
                    <h2>Mysql</h2>
                  </div>
                  <div className="flip-card-back">
                    <p>good understanding of SQL, basic queries and how to work with them</p>
                  </div>
                </div>
              </div>
              {/* Добавьте другие инструменты и технологии по вашему усмотрению */}
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div
            className="rightPanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>My Skills</h1>
            <div className="skills-grid">
              <div className="skill-card" onClick={() => setProjectSection('tools')}>
                <img src={toolsIcon} alt="Tools" />
                <h2 className="trans-tools">Tools</h2>
              </div>
              <div className="skill-card" onClick={() => setProjectSection('frontend')}>
                <img src={frontendIcon} alt="Frontend" />
                <h2 className="trans-tools">Frontend</h2>
                <p className="trans-tools">100+ projects</p>
              </div>
              <div className="skill-card" onClick={() => setProjectSection('backend')}>
                <img src={backendIcon} alt="Backend" />
                <h2 className="trans-tools">Backend</h2>
                <p className="trans-tools">100+ projects</p>
              </div>
              <div className="skill-card" onClick={() => setProjectSection('design')}>
                <img src={designIcon} alt="UX/UI Design" />
                <h2 className="trans-tools">UX/UI Design</h2>
                <p className="trans-tools">100+ projects</p>
              </div>
            </div>
            <button className="projectsButton" onClick={() => navigate('/projects')}>Projects</button>
          </motion.div>
        );
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <motion.div
            className="rightPanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        );
      case 'projects':
        return renderProjects();
      case 'contact':
        return (
          <motion.div
            className="rightPanel contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
             <h1>Contact me!</h1>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">
                  <img src={User} alt="Name Icon" />
                </label>
                <input type="text" id="name" name="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <img src={Email} alt="Email Icon" />
                </label>
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <img src={Message} alt="Message Icon" />
                </label>
                <textarea id="message" name="message" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="contact-button">Send Message</button>
            </form>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="card">
        {/* Левая панель */}
        <motion.div
          className="leftPanel"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={avatarforcontainer} alt="Avatar" />
          <h2>icdfh</h2>
          <p>Frontend Developer and UX/UI designer</p>
          <a href="/resume.jpg" download className="downloadButton">Download</a>
        </motion.div>
        {/* Правая панель */}
        {renderSection()}
        {/* Ссылки с иконками */}
        <div className="icon-links">
          <a onClick={() => setActiveSection('about')} className="icon-link" href="#about">
            <img src={icon1} alt="About Icon" />
          </a>
          <a onClick={() => { setActiveSection('projects'); setProjectSection(null); }} className="icon-link" href="#projects">
            <img src={icon2} alt="Projects Icon" />
          </a>
          <a onClick={() => setActiveSection('contact')} className="icon-link" href="#contact">
            <img src={icon3} alt="Contact Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
