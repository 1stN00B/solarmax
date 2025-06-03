import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../About.css';
import { Link } from 'react-router-dom';

export default function About() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const slideElements = document.querySelectorAll('.slide-in');
        slideElements.forEach(el => observer.observe(el));

        return () => {
            slideElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="about-page">

            {/**---------------------new-------------------------------- */}
            <div className="services-hero1 slide-in slide-up delay-1">
                <div className="kinetic-text1">ABOUT US</div>

                <div className="content-wrapper">
                    <div className="header-content slide-in slide-up delay-2">
                        <h1 className="title">
                            We Power <span className="highlight1">Sustainable Futures</span><br />
                            Tailored for Your Success
                        </h1>
                        <p className="subtext">
                            Customized solar solutions designed to power your future—efficient, reliable, and built to match your unique energy needs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="our-story slide-in slide-up delay-1">
                <div className="container-ourstory">
                    <div className="row">
                        <div className="col-md-6 slide-in slide-up delay-2">
                            <h2>Our <span className="highlight-ourstory">Solar Journey</span></h2>
                            <div className="divider-line"></div>

                            <p className="story-text">
                                We started with a simple vision: make solar energy accessible to everyone in Pakistan.
                                As a new team in the industry, we're driven by innovation rather than legacy.
                            </p>

                            <p className="story-text">
                                Our approach combines cutting-edge solar technology with personalized service.
                                We understand that transitioning to solar is a significant decision,
                                which is why we prioritize education and transparency over sales pressure.
                            </p>

                            <div className="why-choose">
                                <h3>Why Choose Us</h3>
                                <ul>
                                    <li>
                                        <span className="check-icon">✓</span>
                                        Local experts with national technology partnerships
                                    </li>
                                    <li>
                                        <span className="check-icon">✓</span>
                                        Custom solutions for every roof type and energy need
                                    </li>
                                    <li>
                                        <span className="check-icon">✓</span>
                                        Ongoing support long after installation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 slide-in slide-up delay-3">
                            <div className="image-grid">
                                <div className="grid-item item-1"></div>
                                <div className="grid-item item-2"></div>
                                <div className="grid-item item-3"></div>
                                <div className="grid-item item-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Section */}
            <div className="mission-vision-container slide-in slide-up delay-1">
                <div className="mv-header">
                    <h2>Our Core Beliefs</h2>
                    <div className="divider-line"></div>
                </div>

                <div className="mv-grid">
                    <div className="mv-card mission-card slide-in slide-up delay-2">
                        <div className="mv-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
                                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5Z" />
                            </svg>
                        </div>
                        <h3>Our Mission</h3>
                        <p>"Empowering communities with sustainable, cost-effective solar solutions. We are dedicated to delivering high-quality solar panel services that reduce carbon footprints, enhance energy independence, and provide reliable renewable energy for homes and businesses."</p>
                    </div>

                    <div className="mv-card vision-card slide-in slide-up delay-3">
                        <div className="mv-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.3,7.6 23,12C21.3,16.4 17,19.5 12,19.5C7,19.5 2.7,16.4 1,12C2.7,7.6 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
                            </svg>
                        </div>
                        <h3>Our Vision</h3>
                        <p>"To lead the transition to a cleaner, greener future by making solar energy accessible and efficient for all. We envision a world where every home and business harnesses the power of the sun to create a sustainable tomorrow."</p>
                    </div>
                </div>
            </div>

            {/* Message Section */}
            <div className="message-head slide-in slide-up delay-1">
                <h2 className="message-title">Message From Our Team</h2>
                <p className="message-text">
                    "At our company, we believe in a brighter future powered by the sun! Our passionate team is dedicated to harnessing solar energy to create sustainable solutions that benefit both our planet and your wallet. We understand the urgency of climate change and are committed to making renewable energy accessible for everyone. Join us on this journey towards a cleaner, greener world—together, we can make a difference, one solar panel at a time!"
                </p>
            </div>

            {/* Commitment Section */}
            <div className="commitment-container slide-in slide-up delay-1">
                <div className="commitment-header">
                    <h1>Our Commitment</h1>
                    <h2>Putting Your Energy Needs First - Today and Tomorrow</h2>
                </div>

                <div className="commitment-grid">
                    {/* Sustainability */}
                    <div className="commitment-card slide-in slide-up delay-2">
                        <h3>Sustainability</h3>
                        <div className="tagline-with-icon">
                            <svg className="commitment-icon" viewBox="0 0 24 24">
                                <path fill="#3b82f6" d="M12,2L4,12L12,22L20,12L12,2M12,4L18,12L12,20L6,12L12,4Z" />
                                <path fill="#3b82f6" d="M12,6L8,12L12,18L16,12L12,6Z" />
                            </svg>
                            <p className="tagline">Powering a cleaner tomorrow through renewable energy</p>
                        </div>
                        <ul>
                            <li>Reduce carbon emissions with solar solutions</li>
                            <li>Protect natural resources for future generations</li>
                            <li>Implement eco-friendly business practices</li>
                        </ul>
                    </div>

                    {/* Excellence */}
                    <div className="commitment-card slide-in slide-up delay-3">
                        <h3>Excellence</h3>
                        <div className="tagline-with-icon">
                            <svg className="commitment-icon" viewBox="0 0 24 24">
                                <path fill="#3b82f6" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
                                <path fill="#1e40af" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5Z" />
                            </svg>
                            <p className="tagline">Setting the standard in solar solutions</p>
                        </div>
                        <ul>
                            <li>Precision engineering in every installation</li>
                            <li>Unmatched customer service experience</li>
                            <li>Rigorous quality control standards</li>
                        </ul>
                    </div>

                    {/* Innovation */}
                    <div className="commitment-card slide-in slide-up delay-4">
                        <h3>Innovation</h3>
                        <div className="tagline-with-icon">
                            <svg className="commitment-icon" viewBox="0 0 24 24">
                                <path fill="#3b82f6" d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7L16,11.2V18H14V14H10V18H8V11.2L12,7.7Z" />
                            </svg>
                            <p className="tagline">Pioneering the future of solar technology</p>
                        </div>
                        <ul>
                            <li>Adopt cutting-edge solar technologies</li>
                            <li>Continuous research and development</li>
                            <li>Smart energy solutions for modern needs</li>
                        </ul>
                    </div>

                    {/* Integrity */}
                    <div className="commitment-card slide-in slide-up delay-2">
                        <h3>Integrity</h3>
                        <div className="tagline-with-icon">
                            <svg className="commitment-icon" viewBox="0 0 24 24">
                                <path fill="#3b82f6" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
                                <path fill="#1e40af" d="M11,17L7,13L8.41,11.59L11,14.17L15.59,9.58L17,11L11,17Z" />
                            </svg>
                            <p className="tagline">Honest solar solutions you can trust</p>
                        </div>
                        <ul>
                            <li>Transparent pricing with no hidden costs</li>
                            <li>Accurate energy production estimates</li>
                            <li>Ethical business practices always</li>
                        </ul>
                    </div>

                    {/* Accessibility */}
                    <div className="commitment-card slide-in slide-up delay-3">
                        <h3>Accessibility</h3>
                        <div className="tagline-with-icon">
                            <svg className="commitment-icon" viewBox="0 0 24 24">
                                <path fill="#3b82f6" d="M12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" />
                                <path fill="#1e40af" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
                            </svg>
                            <p className="tagline">Solar energy for all</p>
                        </div>
                        <ul>
                            <li>Flexible financing options available</li>
                            <li>Solutions for every budget</li>
                            <li>Special programs for underserved communities</li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div className="commitment-card slide-in slide-up delay-4">
                        <h3>Community</h3>
                        <div className="tagline-with-icon">
                            <svg className="commitment-icon" viewBox="0 0 24 24">
                                <path fill="#3b82f6" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
                                <path fill="#1e40af" d="M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
                            </svg>
                            <p className="tagline">Growing stronger together</p>
                        </div>
                        <ul>
                            <li>Create local solar jobs and training</li>
                            <li>Support community energy education</li>
                            <li>Partner with local organizations</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="solar-footer-gradient">
                <div className="footer-gradient-container">
                    <div className="footer-main-content">
                        <div className="footer-branding">
                            <span className="footer-logo">Solar Wings</span>
                            <p className="footer-mission">Harnessing the sun's power for a sustainable future</p>

                            <ul className="social-wrapper">
                                <li className="social-icon facebook">
                                    <span className="tooltip">Facebook</span>
                                    <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor">
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg>
                                </li>
                                <li className="social-icon twitter">
                                    <span className="tooltip">Twitter</span>
                                    <svg height="1.8em" fill="currentColor" viewBox="0 0 48 48">
                                        <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                                    </svg>
                                </li>
                                <li className="social-icon instagram">
                                    <span className="tooltip">Instagram</span>
                                    <svg height="1.2em" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.11.281-.24.705-.275 1.485-.038.843-.046 1.096-.046 3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-grid">
                            <div className="footer-column">
                                <h4 className="footer-heading">Quick Links</h4>
                                <ul className="footer-links custom-bullets">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/service">Services</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4 className="footer-heading">Services</h4>
                                <ul className="footer-links custom-bullets">
                                    <li><Link to="/service#residential">Residential</Link></li>
                                    <li><Link to="/service#commercial">Commercial</Link></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4 className="footer-heading">Contact</h4>
                                <ul className="footer-contact">
                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z" />
                                        </svg>
                                        info@zfsolar.com
                                    </li>
                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                        </svg>
                                        +1 (234) 567-8900
                                    </li>
                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        123 Solar Ave, Green City
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">© {new Date().getFullYear()} Solar Wings Solar. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}