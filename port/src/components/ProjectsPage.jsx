import React from 'react';
import './ProjectsPage.css';

const projects = [
  {
    title: 'Narxoz Social',
    description: 'Web-app for university',
    image: 'images/narxoz_social.jpg',
    link: 'https://www.figma.com/design/jsli8TUWmm4IbhvEZkasBJ/narxozsocialproject?node-id=35%3A2&t=e5mSgvx9EAUogIoH-1'
  },
  {
    title: 'BookForPeople',
    description: 'Platform for people like reading ',
    image: 'images/bookforpeople.jpg',
    link: 'https://www.figma.com/design/ul8s9Tm8euuf0LV1ZVMV44/Platform-for-book-people?node-id=0%3A1&t=Ay1Y3MOMupucqAI1-1'
  },
  {
    title: 'TicketsOnline',
    description: 'Cinema app design',
    image: 'images/ticketsonline.jpg',
    link: 'https://www.figma.com/design/9kg8u9aDcQmRJgzASf4grb/tickets?node-id=0%3A1&t=MYwZuqcsdjc3uodQ-1'
  },
  {
    title: 'Tictactoe',
    description: 'The most common tic-tac-toe',
    image: 'images/tictaktoejpg.jpg',
    link: 'https://tictactoe-phi-nine.vercel.app/'
  },
  {
    title: 'Password Generator',
    description: 'Debate generator passwords',
    image: 'images/debats.jpg',
    link: 'https://debats.vercel.app/'
  },
  {
    title: 'Expenses',
    description: 'Web application that calculates expenses',
    image: 'images/rashody.jpg',
    link: 'https://vercel.com/project2'
  },
  {
    title: 'Server control',
    description: 'Web app for server app',
    image: 'images/task11.jpg',
    link: 'https://task11-bay.vercel.app/'
  },
  
  
  // Добавьте больше проектов по мере необходимости
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View on Vercel</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
