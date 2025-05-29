import React from 'react';
import '../Services.css';
import { Link } from 'react-router';

const Services = () => {

  return (
    <div>
      <div className="services-hero">
      <div className="kinetic-text">SERVICES</div>
      
      <div className="content-wrapper">
        <div className="header-content">
          <h1 className="title">
            Professional <span className="highlight">Solutions</span><br/>
            Tailored for Your Success
          </h1>
          <p className="subtext">
            Discover comprehensive residential and commercial packages designed 
            to transform your spaces with excellence.
          </p>
        </div>
      </div>
    </div>


      {/*------------------------------ Process Section ------------------------------------*/}
      <section className="services__process">
        <div className="services__container">
          <div className="process__content">
            <h2 className="process__title">How We Deliver Excellence</h2>
            <p className="process__description">
              Our proven 4-step process ensures every client receives outstanding service
            </p>

            <div className="process__steps">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="process__step">
                  <div className="process__step-number">{step}</div>
                  <div className="process__step-icon">
                    {step === 1 && '🎯'}
                    {step === 2 && '📋'}
                    {step === 3 && '⚡'}
                    {step === 4 && '📈'}
                  </div>
                  <h3 className="process__step-title">
                    {['Consultation', 'Custom Plan', 'Implementation', 'Ongoing Support'][step - 1]}
                  </h3>
                  <p className="process__step-text">
                    {[
                      'We start by understanding your specific needs and goals',
                      'Create a tailored service plan that maximizes value',
                      'Execute the plan with precision and expertise',
                      'Provide continuous monitoring and support'
                    ][step - 1]}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/**<a href="https://wa.me/+923168280051?text=can i get more info about the Packages?" target="_blank">
        <button>
          Chat on WhatsApp
        </button>
      </a> */}
 
{/**-------------------------------packages----------------------------------------- */}
<div className="solar-packages-section">
    <h1 className="section-title">Solar Power Packages</h1>

    {/* Residential Packages */}
    <h2 className="package-category-title residential-category" id="residential">Residential Solar Packages</h2>

    <div className="packages-grid residential-packages-grid">
        {/* HomeGuard Essential */}
        <div className="package-card homeguard-essential">
            <div className="package-header">
                <h3 className="package-name">HomeGuard Essential</h3>
                <div className="package-capacity">3-kW</div>
                <div className="package-type">Entry Level</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">Jinko</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">585W</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Qunatity</span>
                        <span className="spec-value">8</span>
                    </div>
              
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Solar Max</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">3KW</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Stand</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-2(12 Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">4</span>
                    </div>
                </div>
            </div>
            <ul className="features-list">
              <h5>Things Included:</h5>
                <li>Ac/Dc Wires, Breackers,Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>1 Ac</li>
                <li>2 Fans</li>
                <li>10 Led Bulbs</li>
                <li>1 Refrigrator</li>
                <li>1 LED TV</li>
                  </ul>
            </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">120 km/h</div>
                    <div className="performance-label">Wind Resistance</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">3.2mm Tempered Glass</div>
                    <div className="performance-label">Hail Resistance</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">25 Years</div>
                <div className="commitment-text">Panels Warrenty</div>
            </div>
        </div>
        {/* -------------------EcoSaver Plus ---------------------*/}
        <div className="package-card ecosaver-plus">
            <div className="package-header">
                <h3 className="package-name">EcoSaver Plus</h3>
                <div className="package-capacity">6-kW</div>
                <div className="package-type">Popular Choice</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">Jinko</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">585W</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Qunatity</span>
                        <span className="spec-value">12</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Solar Max</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">6KW</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Mounting</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-2(14 Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">6</span>
                    </div>
                </div>
            </div>
              <ul className="features-list">
              <h5>Things Included:</h5>
                <li>Ac/Dc Wires, Breackers, Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>2 Ac</li>
                <li>4 Fans</li>
                <li>15 Led Bulbs</li>
                <li>2 Refrigrator</li>
                <li>2 LED TV</li>
                <li>1 Washing Machine</li>                
                  </ul>
            </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">120 km/h</div>
                    <div className="performance-label">Wind Resistance</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">3.2mm Tempered Glass</div>
                    <div className="performance-label">Hail Resistance</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">25 Years</div>
                <div className="commitment-text">Panels Warrenty</div>
            </div>
        </div>
        {/* ----------------------LuxeSolar Elite ----------------------*/}
        <div className="package-card luxesolar-elite">
            <div className="premium-badge">Premium</div>
            <div className="package-header">
                <h3 className="package-name">LuxeSolar Elite</h3>
                <div className="package-capacity">8-kW</div>
                <div className="package-type">Premium Package</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Jinko</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">585W</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">15</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Solar Max</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">8KW</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Mounting</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-2,L-3(14 Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">7</span>
                    </div>
                </div>
            </div>
            <ul className="features-list">
                  <h5>Things Included:</h5>
                <li>Ac/Dc Wires ,Breackers ,Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>3 Ac</li>
                <li>4 Fans</li>
                <li>20 Led Bulbs</li>
                <li>1 Refrigrator</li>
                <li>2 LED TV</li>
                <li>2 Washing Machine</li>                
                  </ul>
            </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">120 km/h</div>
                    <div className="performance-label">Wind Resistance</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">3.2mm Tempered Glass</div>
                    <div className="performance-label">Hail Resistance</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">25 Years</div>
                <div className="commitment-text">Panels Warrenty</div>
            </div>
        </div>
        {/*----------------- SmartHome Solar+ ---------------------*/}
        <div className="package-card smarthome-solar-plus">
            <div className="package-header">
                <h3 className="package-name">SmartHome Solar+</h3>
                <div className="package-capacity">10-kW</div>
                <div className="package-type">Smart Integration</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">P-type Mono Srystal</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">585W</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">18</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Solar Max</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">10KW</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Mounting</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-2(14 Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">9</span>
                    </div>
                </div>
            </div>
            <ul className="features-list">
                <h5>Things Included:</h5>
                <li>Ac/Dc Wires ,Breackers ,Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>4 Ac</li>
                <li>10 Fans</li>
                <li>25 Led Bulbs</li>
                <li>2 Refrigrator</li>
                <li>3 LED TV</li>
                <li>1 Washing Machine</li>                
                  </ul>
              </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">120 km/h</div>
                    <div className="performance-label">Wind Resistance</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">3.2mm Tempered Glass</div>
                    <div className="performance-label">Hail Resistance</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">25 Years</div>
                <div className="commitment-text">panel Warrenty</div>
            </div>
        </div>
    </div>

    {/* --------------------Commercial Packages------------------------ */}
    <h2 className="package-category-title commercial-category" id="commercial">Commercial Solar Packages</h2>

    <div className="packages-grid commercial-packages-grid">
        {/*-------------------------- CommercialMax Pro+--------------------------------*/}
        <div className="package-card commercial-max-pro-plus">
            <div className="package-header">
                <h3 className="package-name">CommercialMax Pro+</h3>
                <div className="package-capacity">50-kW</div>
                <div className="package-type">Commercial Grade</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">brand</span>
                        <span className="spec-value">jinko</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">capacity</span>
                        <span className="spec-value">585W</span>
                    </div>
                        <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">90</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Grow Watt</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">50kW</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Mounting</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-5(16 Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">18</span>
                    </div>
                </div>
            </div>
            <ul className="features-list">
                <h5>Things Included:</h5>
                <li>Ac/Dc Wires ,Breackers ,Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>All Types of Machines</li>               
                  </ul>
            </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">150 km/h</div>
                    <div className="performance-label">Wind Resistance</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">12 years</div>
                    <div className="performance-label">Inverter Life</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">Service Commitment</div>
                <div className="commitment-text">10-year labor warranty, scalable for warehouses</div>
            </div>
        </div>
        {/* ---------------------------------IndustrialDurabilt X5-------------------------------- */}
        <div className="package-card industrial-durabilt-x5">
            <div className="package-header">
                <h3 className="package-name">IndustrialDurabilt X5</h3>
                <div className="package-capacity">100-kW</div>
                <div className="package-type">Industrial Grade</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Jinko</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Performance</span>
                        <span className="spec-value">98% PID-free</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">175</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Grow Watt</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">100kW </span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Mounting</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-5(16 Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">35</span>
                    </div>
                </div>
            </div>
            <ul className="features-list">
                <h5>Things Included:</h5>
                <li>Ac/Dc Wires ,Breackers ,Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>All Types of Machines</li>               
                  </ul>
            </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">180 km/h</div>
                    <div className="performance-label">Wind Resistance</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">90%</div>
                    <div className="performance-label">30yr Efficiency</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">Service Commitment</div>
                <div className="commitment-text">15-year product replacement guarantee</div>
            </div>
        </div>
        {/*------------------------------------ EnterpriseScale -------------------------------*/}
        <div className="package-card enterprise-scale-plus">
            <div className="premium-badge">Enterprise</div>
            <div className="package-header">
                <h3 className="package-name">EnterpriseScale</h3>
                <div className="package-capacity">200-kW</div>
                <div className="package-type">Enterprise Solution</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Jinko</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">585W</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">345</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Grow Watt</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">100kW</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">2</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Mounting</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-5(16-Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">70</span>
                    </div>
                </div>
            </div>
            <ul className="features-list">
                <h5>Things Included:</h5>
                <li>Ac/Dc Wires ,Breackers ,Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>All Types of Machines</li>               
                  </ul>
            </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">5400 Pa</div>
                    <div className="performance-label">Snow Load</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">35mm</div>
                    <div className="performance-label">Hail Resistance</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">Service Commitment</div>
                <div className="commitment-text">Priority support & carbon offset reporting tools</div>
            </div>
        </div>
        {/**----------------------------------EnterpriseScale+---------------------------------------- */}
        <div className="package-card enterprise-scale-plus">
            <div className="package-header">
                <h3 className="package-name">EnterpriseScale+</h3>
                <div className="package-capacity">300-kW</div>
                <div className="package-type">Enterprise Solution</div>
            </div>
            <div className="specs-grid">
                <div className="spec-group">
                    <div className="spec-title">Solar Panels</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Jinko</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">585W</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">530</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Inverter</div>
                    <div className="spec-item">
                        <span className="spec-label">Brand</span>
                        <span className="spec-value">Grow Watt</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Capacity</span>
                        <span className="spec-value">100kW</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">3</span>
                    </div>
                </div>
                <div className="spec-group">
                    <div className="spec-title">Mounting</div>
                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">L-5(16-Guage)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Material</span>
                        <span className="spec-value">Aluminum Tin Coated</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Quantity</span>
                        <span className="spec-value">106</span>
                    </div>
                </div>
            </div>
            <ul className="features-list">
                <h5>Things Included:</h5>
                <li>Ac/Dc Wires ,Breackers ,Inverted Controled through App</li>
                <h5>Solar-powered appliances</h5>
                  <ul>
                <li>All Types of Machines</li>               
                  </ul>
            </ul>
            <div className="performance-grid">
                <div className="performance-item">
                    <div className="performance-value">5400 Pa</div>
                    <div className="performance-label">Snow Load</div>
                </div>
                <div className="performance-item">
                    <div className="performance-value">35mm</div>
                    <div className="performance-label">Hail Resistance</div>
                </div>
            </div>
            <div className="commitment-section">
                <div className="commitment-title">Service Commitment</div>
                <div className="commitment-text">Priority support & carbon offset reporting tools</div>
            </div>
        </div>
    </div>
</div>

{/**------------------------------------ends----------------------------------------- */}

      {/* Custom Solutions */}
      <section className="services__custom">
        <div className="services__container">
          <div className="custom__content">
            <h3 className="custom__title">Need Custom Solutions?</h3>
            <p className="custom__text">We offer customized packages to suit specific requirements.</p>
            <Link className="custom__button" to="/contact">Request Consultation</Link>
          </div>
        </div>
      </section>

      {/*------------------- Benefits Section------------------------ */}
      <section className="services__benefits">
        <div className="services__container">
          <div className="benefits__content">
            <div className="benefits__text">
              <h2 className="benefits__title">Why Choose Us</h2>
              <p className="benefits__description">Your Trusted Partner in Solar Innovation</p>
            </div>
            
            <div className="benefits__grid">
              {['🌐 Cutting-Edge Technology', '⚡ Fast Response', '🤝 Price Match Promise', '💼 Professional Team', '📖 Transparent Process','🌍 Community Impact'].map((benefit) => (
                <div key={benefit} className="benefit__card">
                  <div className="benefit__icon">{benefit.split(' ')[0]}</div>
                  <h4 className="benefit__name">{benefit.split(' ').slice(1).join(' ')}</h4>
                  <p className="benefit__detail">
                    {benefit.includes('Technology') && 'Smart Energy Solutions'}
                    {benefit.includes('Response') && 'Rapid Service Guarantee'}
                    {benefit.includes('Price') && 'Best Value Guaranteed'}
                    {benefit.includes('Professional') && 'Local Energy Advisors'}
                    {benefit.includes('Process') && 'No Hidden Fees'}
                    {benefit.includes('Community') && 'Empowering Local Homes'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/**------------------------------footer------------------------------------ */}
       <footer className="solar-footer-gradient">
        <div className="footer-gradient-container">
          <div className="footer-main-content">
            <div className="footer-branding">
              <span className="footer-logo">Solar Wings</span>
              <p className="footer-mission">Harnessing the sun's power for a sustainable future</p>

              {/* Social Media Icons */}
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
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
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
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Services</h4>
                <ul className="footer-links custom-bullets">
                  <li><Link to="/service#residential">Residential</Link></li>
                  <li><Link tp="/service#commercial">Commercial</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Contact</h4>
                <ul className="footer-contact">
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z" /></svg>
                    info@zfsolar.com
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                    +1 (234) 567-8900
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    123 Solar Ave, Green City
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Z/F Solar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;