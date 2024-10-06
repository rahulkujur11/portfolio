import React, { useEffect, useRef, useState } from 'react';
import './Projects.css'; // Import the CSS file for Projects section

const Projects = () => {


    const projects = [
        {
            title: 'Kuddakalon Hotel Booking',
            description: 'Developed a full-stack web application for hotel booking with seamless integration of frontend and backend using ORM tools.',
            technologies: ['Spring Boot', 'React.js', 'CSS', 'AWS'],
        },
        {
            title: 'Fleet Management System',
            description: 'Designed and implemented a vehicle management system using MVC design patterns and object-oriented principles, improving maintainability.',
            technologies: ['Java', 'Spring Boot', 'MySQL', 'AWS'],
        },
        {
            title: 'Supply Chain Anti-Counterfeit System',
            description: 'Created secure APIs and role-based access for different user types in a blockchain-based supply chain management system.',
            technologies: ['React.js', 'Node.js', 'Hyperledger Fabric', 'Azure'],
        }
    ];

    // Ref for the project elements
    const projectRef = useRef([]);
    const [showScrollIcon, setShowScrollIcon] = useState(true); // State to manage scroll icon visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }

                    // Check if the last section is visible
                    if (entry.target === projectRef.current[projects.length - 1]) {
                        if (entry.isIntersecting) {
                            setShowScrollIcon(false); // Hide the scroll icon when last section is visible
                        } else {
                            setShowScrollIcon(true); // Show the scroll icon when last section is not visible
                        }
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        projectRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [projects.length]); // Re-run the effect when experiences length changes


    
    const scrollToNextSection = () => {
        // Scroll smoothly to the first experience section
        projectRef.current[0]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="projects" className="projects-section">
            {/* <h2 className="section-title">Projects</h2> */}
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div
                        className="project-item snap-item"
                        key={index}
                        ref={(el) => (projectRef.current[index] = el)}
                    >
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <ul className="project-technologies">
                            {project.technologies.map((tech, idx) => (
                                <li key={idx}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Scroll Down Icon */}
            {showScrollIcon && (
                <div className="scroll-icon" onClick={scrollToNextSection}>
                    <span className="arrow">↓</span>
                </div>
            )}
        </section>
    );
};

export default Projects;
