import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="logo">Eco Balancer AI</div>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/calculator">Carbon Emission Calculator</Link>
                    <Link to="/marketplace">Marketplace</Link>
                    <Link to="/insights">Insights</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
                <div className="auth-buttons">
                    <Link to="/login" className="button">Login</Link>
                    <Link to="/signup" className="button primary">Sign Up</Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <h1>Empowering Organizations to Achieve Carbon Neutrality with AI</h1>
                <p>Track. Analyze. Reduce. Match with the best decarbonization solutions for your business.</p>
                <div className="hero-buttons">
                    <Link to="/calculator" className="button primary">Calculate Your Carbon Footprint</Link>
                    <Link to="/marketplace" className="button">Explore Marketplace</Link>
                </div>
                <div className="hero-image">
                    {/* Add an illustration or animation */}
                    <img src="/assets/hero-image.png" alt="Eco Balancer AI Overview" />
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>What is Eco Balancer AI?</h2>
                <p>
                    Eco Balancer AI is your partner in achieving sustainability goals by helping companies track
                    emissions, generate reduction strategies, and match with tailored decarbonization solutions.
                </p>
                <div className="features">
                    <div className="feature">
                        <h3>AI-Powered Analysis</h3>
                        <p>Track Scope 1, 2, and 3 emissions with precision.</p>
                    </div>
                    <div className="feature">
                        <h3>Insights & Dashboards</h3>
                        <p>Visualize real-time emissions trends with Power BI.</p>
                    </div>
                    <div className="feature">
                        <h3>B2B Matching Marketplace</h3>
                        <p>Discover the best decarbonization solutions tailored to your needs.</p>
                    </div>
                </div>
                <Link to="/about" className="button">Learn More</Link>
            </section>

            {/* Carbon Emission Calculator Section */}
            <section className="calculator">
                <h2>Discover Your Carbon Footprint</h2>
                <p>Quickly calculate your organization's carbon emissions and receive actionable insights.</p>
                <div className="calculator-widget">
                    {/* Replace with an actual interactive calculator */}
                    <form>
                        <label>
                            Industry Type:
                            <input type="text" placeholder="e.g., Manufacturing" />
                        </label>
                        <label>
                            Energy Usage (kWh):
                            <input type="number" placeholder="e.g., 5000" />
                        </label>
                        <label>
                            Fleet Data (vehicles):
                            <input type="number" placeholder="e.g., 10" />
                        </label>
                        <button type="submit" className="button primary">Calculate</button>
                    </form>
                </div>
            </section>

            {/* Marketplace Section */}
            <section className="marketplace">
                <h2>Discover the Best Decarbonization Solutions</h2>
                <p>From renewable energy to carbon offsets, find tailored solutions to meet your sustainability goals.</p>
                <div className="categories">
                    <div className="category-card">
                        <h3>Renewable Energy</h3>
                        <p>Solar, wind, and biomass solutions for clean energy.</p>
                        <Link to="/marketplace/renewable-energy" className="button">Explore</Link>
                    </div>
                    <div className="category-card">
                        <h3>Carbon Offset Programs</h3>
                        <p>Reforestation, conservation, and carbon credit options.</p>
                        <Link to="/marketplace/carbon-offsets" className="button">Explore</Link>
                    </div>
                    <div className="category-card">
                        <h3>Energy-Efficient Technologies</h3>
                        <p>Efficient HVAC, lighting, and IT solutions.</p>
                        <Link to="/marketplace/energy-efficiency" className="button">Explore</Link>
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="insights">
                <h2>Understand Your Emissions Like Never Before</h2>
                <p>Get real-time insights into emissions trends and identify areas of high impact.</p>
                <div className="dashboard-preview">
                    {/* Embed a sample Power BI dashboard or an image */}
                    <img src="/assets/dashboard-preview.png" alt="Power BI Insights" />
                </div>
                <Link to="/insights" className="button primary">View Full Insights</Link>
            </section>

            {/* Call to Action Section */}
            <section className="cta">
                <h2>Ready to Take Action on Climate Change?</h2>
                <p>Join hundreds of organizations on their journey to carbon neutrality.</p>
                <div className="cta-buttons">
                    <Link to="/signup" className="button primary">Get Started for Free</Link>
                    <Link to="/contact" className="button">Talk to an Expert</Link>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
                <div className="social-media">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="newsletter">
                    <h3>Stay Updated</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit" className="button primary">Subscribe</button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
