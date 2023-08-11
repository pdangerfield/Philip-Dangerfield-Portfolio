import React from 'react';
import project1Image from '../../Assets/project1Image.png';
import project2Image from '../../Assets/project2Image.png';
import project3Image from '../../Assets/project3Image.png';
import project4Image from '../../Assets/project4Image.png';
import project5Image from '../../Assets/project5Image.png';


export default function Project() {
    const projects = [
        {
          id: 1,
          title: 'DINNERDATE',
          description: 'DinnerDate is a web application that utilizes the spoonaular API to provide users with recipes based on their dietary restrictions and preferences. It will then generate a seven days worth of recipes that you can then save to your calendar.',
          image: project2Image,
          url: 'https://josh4got.github.io/Dinner-Date/',
        },
        {
          id: 2,
          title: 'Password Generator',
          description: 'HTML, CSS, and Javascript were used to create this password generator.',
                 image: project1Image,
          url: 'https://pdangerfield.github.io/Password-Generator/',
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'This web application uses the OpenWeather API to retrieve weather data for cities. It runs in the browser and features dynamically updated HTML and CSS.',
            image: project3Image,
            url: 'https://pdangerfield.github.io/Weather-Dashboard/',
          },
          {
            id: 4,
            title: 'CareConnect',
            description: 'Using MySQL, Node, Express, Handlebars, this application allows a user to create a login and password to access the companies databse. It stores an employees: name, job title, salary, and department. This is meant to be used by a companies Human Resources department.',
                   image: project4Image,
            url: 'https://vast-beach-72570.herokuapp.com/dashboard',
          },
          {
            id: 5,
            title: 'Task Hive',
            description: 'Using react and mongoDB, this application allows a project manager to create a project and assign tasks to a user. The user can then login and see the projects assigned to them and the associated tasks.',
                   image: project5Image,
            url: 'https://taskhive-3576fd3630ff.herokuapp.com/',
          },
        // Add more project objects as needed
      ];
      return (
        <div className="project-page">
          {/* <h1>Projects</h1> */}
          <div className="project-list">
            {projects.map((project) => (
              <a href={project.url} className="card" key={project.id}>
                <img src={project.image} alt={project.title} />
                <div className="card-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  {/* <button>View Details</button> */}
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    };
    
    
