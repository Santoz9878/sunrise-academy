const { useState } = React;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const schoolInfo = {
    name: "Sunrise Academy",
    motto: "Nurturing Tomorrow's Leaders",
    location: "Nairobi, Kenya",
    levels: "Kindergarten to Grade 8",
    established: 2005,
    students: 850,
    teachers: 45
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <div className="logo-text">
              <h1>{schoolInfo.name}</h1>
              <p>{schoolInfo.motto}</p>
            </div>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navigationItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Welcome to {schoolInfo.name}</h2>
          <p className="hero-subtitle">{schoolInfo.motto}</p>
          <p className="hero-description">
            A leading primary school offering the Kenyan Competency-Based Curriculum (CBC)
            from Kindergarten to Grade 8
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Enroll Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-item">
            <h3>{schoolInfo.students}+</h3>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <h3>{schoolInfo.teachers}+</h3>
            <p>Qualified Teachers</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Pass Rate</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">About Our School</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Excellence in Education Since {schoolInfo.established}</h3>
            <p>
              {schoolInfo.name} is a premier primary school located in {schoolInfo.location}, 
              committed to providing quality education following the Kenyan Competency-Based 
              Curriculum (CBC). We offer comprehensive education from Kindergarten through 
              Grade 8, focusing on holistic child development.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <h4>Our Mission</h4>
                <p>To provide quality education that nurtures talent, creativity, and academic excellence</p>
              </div>
              <div className="feature">
                <span className="feature-icon">👁️</span>
                <h4>Our Vision</h4>
                <p>To be the leading primary school in Kenya, producing well-rounded global citizens</p>
              </div>
              <div className="feature">
                <span className="feature-icon">💎</span>
                <h4>Core Values</h4>
                <p>Integrity, Excellence, Innovation, Respect, and Teamwork</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">🏫</div>
          </div>
        </div>
      </section>

      <section id="academics" className="academics">
        <h2 className="section-title">Academic Programs</h2>
        <div className="programs-container">
          <div className="program-card">
            <div className="program-header">🌱</div>
            <h3>Early Years Education</h3>
            <p className="program-levels">Kindergarten (PP1 & PP2)</p>
            <ul>
              <li>Play-based learning</li>
              <li>Literacy and numeracy skills</li>
              <li>Creative arts and music</li>
              <li>Physical education</li>
              <li>Environmental awareness</li>
            </ul>
          </div>
          <div className="program-card">
            <div className="program-header">📖</div>
            <h3>Lower Primary</h3>
            <p className="program-levels">Grade 1 - Grade 3</p>
            <ul>
              <li>English Language Arts</li>
              <li>Kiswahili</li>
              <li>Mathematics</li>
              <li>Environmental Activities</li>
              <li>Hygiene and Nutrition</li>
              <li>Christian Religious Education</li>
            </ul>
          </div>
          <div className="program-card">
            <div className="program-header">📚</div>
            <h3>Upper Primary</h3>
            <p className="program-levels">Grade 4 - Grade 6</p>
            <ul>
              <li>English and Kiswahili</li>
              <li>Mathematics and Science</li>
              <li>Social Studies</li>
              <li>Home Science</li>
              <li>Agriculture</li>
              <li>Creative Arts</li>
            </ul>
          </div>
          <div className="program-card">
            <div className="program-header">🎓</div>
            <h3>Junior Secondary</h3>
            <p className="program-levels">Grade 7 - Grade 8</p>
            <ul>
              <li>Core subjects mastery</li>
              <li>STEM education</li>
              <li>Digital literacy</li>
              <li>Life skills education</li>
              <li>Career guidance</li>
              <li>Leadership development</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="admissions" className="admissions">
        <h2 className="section-title">Admissions</h2>
        <div className="admissions-content">
          <div className="admissions-process">
            <h3>How to Join Us</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Inquiry</h4>
                  <p>Contact our admissions office or fill out the inquiry form</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Application</h4>
                  <p>Complete and submit the application form with required documents</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Assessment</h4>
                  <p>Student takes a placement assessment (Grade 2 and above)</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Enrollment</h4>
                  <p>Complete registration and fee payment to secure a spot</p>
                </div>
              </div>
            </div>
          </div>
          <div className="admission-form">
            <h3>Inquire Now</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Parent/Guardian Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Grade Level</option>
                <option value="kindergarten">Kindergarten (PP1 & PP2)</option>
                <option value="grade1">Grade 1</option>
                <option value="grade2">Grade 2</option>
                <option value="grade3">Grade 3</option>
                <option value="grade4">Grade 4</option>
                <option value="grade5">Grade 5</option>
                <option value="grade6">Grade 6</option>
                <option value="grade7">Grade 7</option>
                <option value="grade8">Grade 8</option>
              </select>
              <textarea placeholder="Additional Message (Optional)" rows="3"></textarea>
              <button type="submit" className="btn btn-primary">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2 className="section-title">School Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder">📚</div>
            <p>Modern Library</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">🔬</div>
            <p>Science Laboratory</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">💻</div>
            <p>Computer Lab</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">⚽</div>
            <p>Sports Field</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">🎨</div>
            <p>Art Room</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">🎵</div>
            <p>Music Room</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>123 Kenyatta Avenue</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+254 700 123 456</p>
                <p>+254 700 789 012</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@sunriseacademy.ac.ke</p>
                <p>admissions@sunriseacademy.ac.ke</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <h4>Office Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <div className="map-placeholder">
              🗺️
              <p>School Location Map</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{schoolInfo.name}</h3>
            <p>{schoolInfo.motto}</p>
            <p>Providing quality education from Kindergarten to Grade 8 following the Kenyan CBC curriculum.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#admissions">Admissions</a>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 {schoolInfo.name}. All rights reserved. | Designed for Kenyan Primary Education</p>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
