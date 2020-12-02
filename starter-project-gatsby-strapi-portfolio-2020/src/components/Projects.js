import React from 'react';
import Title from './Title';
import Project from './Project';
import { Link } from 'gatsby';


const Projects = ({ projects, title, showLink }) => {
  console.log(projects);
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-page">
        {
          projects.map((project,index)=>{
            console.log(project);
            return <Project key={project.id} index={index} {...project} />
          })
        }
      </div>
      {
        showLink&&<Link to="/projects" className="btn center-btn">
          project
        </Link>
      }
    </section>
  );
};

export default Projects;
