import React, { useEffect, useRef, useState } from 'react';
import './Experience.css'; // Include styles for the scroll icon

const Experience = () => {

    const experiences = [
        {
            company: 'Acespire Consulting Solutions',
            role: 'Project: Renault o9 Solutions Inc',
            date: 'August 24 – Present',
            description: [
                'Managed Demand and Capacity Planning integrating supplier & customer tenants into a unified data visualization system.',
                'Developed secure RESTful APIs with authentication & authorization to ensure data protection and integrity across systems.',
                'Performed complex data transformations in SQL Server ensuring data integrity and accuracy across systems.',
                'Collaborated with cross-functional teams to resolve API issues ensuring seamless data exchange.'
            ],
            technologies: 'Python, AWS Lambda, SQL Server, SSIS'
        },
        {
            company: 'Acespire Consulting Solutions',
            role: 'Project: 2wsc Toyota o9 Solutions Inc',
            date: 'June 23 – July 24',
            description: [
                'Developed APIs for supplier data exchange automating error reporting with 99% data integrity for 5M daily records.',
                'Enhanced error reporting and client satisfaction by developing processes and API responses using NiFi and SQL Server.',
                'Improved data exchange by processing and transforming records through various APIs, streamlining data flow.'
            ],
            technologies: 'Python, SSIS, NiFi, SQL Server, Azure Functions'
        },
        {
            company: 'Acespire Consulting Solutions',
            role: 'Project: Supply Chain Anti-Counterfeit',
            date: 'March 22 – May 23',
            description: [
                'Created user-friendly interfaces for Admin, Manufacturer, and SCM roles, enhancing functionality and user experience.',
                'Designed secure APIs with OAuth2 and middleware to enforce role-based access control for CRUD operations.',
                'Developed a system for defining user roles and permissions to ensure secure access to data.'
            ],
            technologies: 'React.js, Node.js, Hyperledger Fabric, CouchDB, Azure Services'
        }
    ];

    const experienceRef = useRef([]); // Array of refs for each experience item
    const [showScrollIcon, setShowScrollIcon] = useState(true); // State to manage scroll icon visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }

                    // Check if the last section is visible
                    if (entry.target === experienceRef.current[experiences.length - 1]) {
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

        experienceRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [experiences.length]); // Re-run the effect when experiences length changes


    
    const scrollToNextSection = () => {
        // Scroll smoothly to the first experience section
        experienceRef.current[0]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="experience" className="experience-section">
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div
                        className="experience-item"
                        key={index}
                        ref={(el) => (experienceRef.current[index] = el)}
                    >
                        <h3 className="company-name highlighted-text">{exp.company}</h3>
                        <h4 className="role">{exp.role}</h4>
                        <p className="date highlighted-text-2">{exp.date}</p>
                        <ul className="description">
                            {exp.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                        <p className="technologies">
                            <strong>Technologies used:</strong> {exp.technologies}
                        </p>
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

export default Experience;
