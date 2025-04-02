import React from 'react'
import '../pages-styles/About.css'

export default function About() {
  return (
    <>
      <section className="HeroAbout">
        <div className="main-content">
          <h1>About <span style={{color: '#b44545'}}>Me</span></h1>
          <p>
            I'm a passionate developer with expertise in modern web technologies. 
            My journey began 3 years ago when I wrote my first line of code, and 
            I've been obsessed with creating digital experiences ever since.
          </p>
          
          <div className="skills-section">
            <h2>My <span style={{color: '#b44545'}}>Skills</span></h2>
            <div className="skills-grid">
              <div className="skill-card">React</div>
              <div className="skill-card">JavaScript</div>
              <div className="skill-card">Node.js</div>
              <div className="skill-card">CSS3</div>
              <div className="skill-card">HTML5</div>
              <div className="skill-card">MySql</div>
            </div>
          </div>
          
          <div className="experience-section">
            <h2>Work <span style={{color: '#b44545'}}>Experience</span></h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Full Stack Developer Intern at Kshitij CodeForge</h3>
                <p className="timeline-date">2025 FEB - Present</p>
                <p>Developed responsive web applications using React</p>
              </div>
              <div className="timeline-item">
                <h3>Web Developer Intern at Phantasm Solution Pvt Ltd</h3>
                <p className="timeline-date">2023 NOV - 2024 MAY</p>
                <p>Built and maintained client websites using modern UI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}