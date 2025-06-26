import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Corrected import for Link
import '../Contact.css';

const ContactUs = () => {
    // Scroll to top on component mount and set up Intersection Observer
    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once it's animated to avoid re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before element is fully in view
        });

        // Select all elements that should animate (using a common class)
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        // Cleanup observer on component unmount
        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
    });

    const services = [
        "Residential Solar Packages",
        "Commercial Solar Solutions",
        "Hybrid Solar Systems",
        "Solar Water Pumping",
        "Off-Grid Solar Systems",
        "Solar Panel Cleaning/Maintenance",
        "Solar System Monitoring"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = ` New Solar Inquiry \n\n
Name: ${formData.name}\n
Email: ${formData.email}\n
Phone: ${formData.phone}\n
Service Needed: ${formData.service}\n
Message: ${formData.message}\n\
_This inquiry was sent via your website_`;

        const whatsappUrl = `https://wa.me/03290806908?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        setFormData({ name: '', email: '', phone: '', message: '', service: '' });
    };

    return (
        <div className="solar-contact-page">
            <div className="split-header-container">
                <div className="split-header">
                    
                    <div className="header-side white-side animate-on-scroll slide-in-left delay-1">
                        <div className="header-content-wrapper">
                            {/* Header Text */}
                            <div className="header-text">
                                <h1 className="animate-on-scroll slide-in-left delay-2">Your Solar Energy Solutions</h1> 
                                <p className="animate-on-scroll slide-in-left delay-3">Need assistance? Our knowledgeable team is here to provide answers and guide you through any inquiries. We're always ready to help!</p> {/* Changed to slide-in-left */}
                            </div>
                        </div>
                    </div>

                    
                    <div className="header-side blue-side animate-on-scroll slide-in-right delay-4"> 
                        <div className="image-overlay">
                            <img src="/images/contactus.jpg" alt="Contact US" className="split-image" />
                            <div className="header-cta animate-on-scroll slide-in delay-5"> 
                            <span className="colorful">   
                                <h2>Start Saving Today</h2>
                                <p>Get your free consultation</p>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="solar-main-content">
                
                <section className="contact-form-section animate-on-scroll slide-in-left delay-1"> 
                    <div className="form-wrapper">
                        <h2 className="animate-on-scroll slide-in-left delay-2">Get Your Custom Solar Quote</h2> 
                        <p className="form-intro animate-on-scroll slide-in-left delay-3">Complete this form to receive a free consultation from our solar experts</p> {/* Changed to slide-in-left */}

                        <form onSubmit={handleSubmit} className="solar-form">
                          
                            <div className="form-row animate-on-scroll slide-in delay-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Email Address*"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row animate-on-scroll slide-in delay-5">
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        required
                                    >
                                        <option value="">Select Service*</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group animate-on-scroll slide-in delay-6">
                                <textarea
                                    placeholder="Tell us about your project (location, current bills, energy needs...)*"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn animate-on-scroll slide-in delay-7">
                                Get Free Consultation
                            </button>
                        </form>
                    </div>
                </section>

                {/* Process Section - slides from right */}
                <div className="process-section animate-on-scroll slide-in-right delay-1"> 
                    <h3 className="animate-on-scroll slide-in-right delay-2">Our Simple 4-Step Process</h3> 
                    <ol className="process-steps">
                        <li className="animate-on-scroll slide-in delay-3">Free Site Evaluation & Consultation</li>
                        <li className="animate-on-scroll slide-in delay-4">Custom System Design & Proposal</li>
                        <li className="animate-on-scroll slide-in delay-5">Professional Installation</li>
                        <li className="animate-on-scroll slide-in delay-6">System Activation & Training</li>
                    </ol>
                </div>
            </main>


            <footer className="solar-footer-gradient">
                <div className="footer-gradient-container">
                    <div className="footer-main-content">
                      
                        <div className="footer-branding animate-on-scroll slide-in-left delay-1">
                            <span className="footer-logo">Solar Wings</span>
                            <p className="footer-mission">Harnessing the sun's power for a sustainable future</p>

                            <ul className="social-wrapper">
                                <li className="social-icon facebook">
                                    <span className="tooltip">Facebook</span>
                                    <a href='https://www.facebook.com/profile.php?id=61563839062378' target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor">
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon linkedin">
                                    <span className="tooltip">LinkedIn</span>
                                    <a href="https://www.linkedin.com/in/solar-wings-solution-483143361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                        <svg height="1.2em" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon instagram">
                                    <span className="tooltip">Instagram</span>
                                    <a href="https://www.instagram.com/wings_solar" target="_blank" rel="noopener noreferrer">
                                        <svg height="1.2em" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-grid">
                            
                            <div className="footer-column animate-on-scroll slide-in-right delay-5">
                                <h4 className="footer-heading">Quick Links</h4>
                                <ul className="footer-links custom-bullets">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/service">Service</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>

                          
                            <div className="footer-column animate-on-scroll slide-in-right delay-6">
                                <h4 className="footer-heading">Services</h4>
                                <ul className="footer-links custom-bullets">
                                    <li><Link to="/service#residential">Residential</Link></li>
                                    <li><Link to="/service#commercial">Commercial</Link></li>
                                </ul>
                            </div>

                            
                            <div className="footer-column animate-on-scroll slide-in-right delay-7">
                                <h4 className="footer-heading">Contact</h4>
                                <ul className="footer-contact">
                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z" />
                                        </svg>
                                        solarwingsolution@gmail.com
                                    </li>
                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                        </svg>
                                       +92 329-0806908
                                    </li>
                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        89-3-BII Township
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom animate-on-scroll slide-in delay-8"> 
                        <p className="copyright">© {new Date().getFullYear()} Solar Wings Solar. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;