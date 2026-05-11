const { useState, useEffect } = React;
const { useState } = React;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInquiryChange = (field, value) => {
    setInquiry(prev => ({ ...prev, [field]: value }));
  };

  const getInquiryMessage = () => {
    const { name, email, phone, grade, message } = inquiry;
    return encodeURIComponent(
      `Inquiry from: ${name || '[Name]'}\nEmail: ${email || '[Email]'}\nPhone: ${phone || '[Phone]'}\nGrade Interest: ${grade || '[Grade]'}\nMessage: ${message || '[No additional message]'}`
    );
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/254700123456?text=${getInquiryMessage()}`, '_blank');
  };

  const openSms = () => {
    window.location.href = `sms:+254700123456?body=${getInquiryMessage()}`;
  };

  const openEmail = () => {
    window.location.href = `mailto:admissions@sunriseacademy.ac.ke?subject=Admissions Inquiry&body=${getInquiryMessage()}`;
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
            <img src="logo.svg" alt="Sunrise Academy logo" className="logo-img" />
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
            <a href="#admissions" className="btn btn-primary">Enroll Now</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
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
            <div className="image-placeholder">
              🏫
            </div>
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
              <input
                type="text"
                placeholder="Parent/Guardian Name"
                value={inquiry.name}
                onChange={(e) => handleInquiryChange('name', e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={inquiry.email}
                onChange={(e) => handleInquiryChange('email', e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={inquiry.phone}
                onChange={(e) => handleInquiryChange('phone', e.target.value)}
                required
              />
              <select
                value={inquiry.grade}
                onChange={(e) => handleInquiryChange('grade', e.target.value)}
                required
              >
                <option value="">Select Grade Level</option>
                <option value="Kindergarten (PP1 & PP2)">Kindergarten (PP1 & PP2)</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
              </select>
              <textarea
                placeholder="Additional Message (Optional)"
                rows="3"
                value={inquiry.message}
                onChange={(e) => handleInquiryChange('message', e.target.value)}
              ></textarea>
              <div className="contact-buttons">
                <button type="button" className="btn btn-primary" onClick={openWhatsApp}>Send via WhatsApp</button>
                <button type="button" className="btn btn-secondary" onClick={openSms}>Send SMS</button>
                <button type="button" className="btn btn-secondary" onClick={openEmail}>Open Gmail</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2 className="section-title">School Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <a href="library.html">
              <div className="gallery-placeholder">📚</div>
              <p>Modern Library</p>
            </a>
          </div>
          <div className="gallery-item">
            <a href="science-lab.html">
              <div className="gallery-placeholder">🔬</div>
              <p>Science Laboratory</p>
            </a>
          </div>
          <div className="gallery-item">
            <a href="computer-lab.html">
              <div className="gallery-placeholder">💻</div>
              <p>Computer Lab</p>
            </a>
          </div>
          <div className="gallery-item">
            <a href="sports-field.html">
              <div className="gallery-placeholder">⚽</div>
              <p>Sports Field</p>
            </a>
          </div>
          <div className="gallery-item">
            <a href="art-room.html">
              <div className="gallery-placeholder">🎨</div>
              <p>Art Room</p>
            </a>
          </div>
          <div className="gallery-item">
            <a href="music-room.html">
              <div className="gallery-placeholder">🎵</div>
              <p>Music Room</p>
            </a>
          </div>
          <div className="gallery-actions">
            <a href="#home" className="btn btn-secondary">Back to Top</a>
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
            <a href="https://maps.app.goo.gl/v63ty9P5v2ZV9QtX8" target="_blank" rel="noopener noreferrer" className="map-link">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <p>View on Google Maps</p>
                <span className="map-subtitle">123 Kenyatta Avenue, Nairobi, Kenya</span>
              </div>
            </a>
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
              <a href="https://facebook.com/sunriseacademy" target="_blank" rel="noreferrer" className="social-link" aria-label="Follow us on Facebook">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/sunriseacademy" target="_blank" rel="noreferrer" className="social-link" aria-label="Follow us on Instagram">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C8.396 0 7.966.021 6.675.049c-1.272.028-2.14.136-2.897.289a4.943 4.943 0 00-1.777.906 4.943 4.943 0 00-.906 1.777c-.153.757-.261 1.625-.289 2.897C1.99 7.966 1.969 8.396 1.969 12.017s.021 4.051.049 5.342c.028 1.272.136 2.14.289 2.897a4.943 4.943 0 00.906 1.777 4.943 4.943 0 001.777.906c.757.153 1.625.261 2.897.289 1.291.028 1.721.049 5.342.049s4.051-.021 5.342-.049c1.272-.028 2.14-.136 2.897-.289a4.943 4.943 0 001.777-.906 4.943 4.943 0 00.906-1.777c.153-.757.261-1.625.289-2.897.028-1.291.049-1.721.049-5.342s-.021-4.051-.049-5.342c-.028-1.272-.136-2.14-.289-2.897a4.943 4.943 0 00-.906-1.777 4.943 4.943 0 00-1.777-.906c-.757-.153-1.625-.261-2.897-.289C16.068.021 15.638 0 12.017 0zm0 2.163c3.574 0 3.999.014 5.41.078.951.043 1.464.202 1.805.335.586.228.998.532 1.431.965.433.433.737.845.965 1.431.133.341.292.854.335 1.805.064 1.411.078 1.836.078 5.41s-.014 3.999-.078 5.41c-.043.951-.202 1.464-.335 1.805-.228.586-.532.998-.965 1.431-.433.433-.845.737-1.431.965-.341.133-.854.292-1.805.335-1.411.064-1.836.078-5.41.078s-3.999-.014-5.41-.078c-.951-.043-1.464-.202-1.805-.335a3.717 3.717 0 01-1.431-.965 3.717 3.717 0 01-.965-1.431c-.133-.341-.292-.854-.335-1.805C2.196 15.638 2.182 15.213 2.182 12.017s.014-3.999.078-5.41c.043-.951.202-1.464.335-1.805.228-.586.532-.998.965-1.431.433-.433.845-.737 1.431-.965.341-.133.854-.292 1.805-.335C8.018 2.177 8.443 2.163 12.017 2.163zm0 3.781a6.073 6.073 0 100 12.146 6.073 6.073 0 000-12.146zm0 2.163a3.91 3.91 0 110 7.82 3.91 3.91 0 010-7.82zm6.406-2.005a1.427 1.427 0 100 2.854 1.427 1.427 0 000-2.854z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@sunriseacademy" target="_blank" rel="noreferrer" className="social-link" aria-label="Follow us on TikTok">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 {schoolInfo.name}. All rights reserved. | Designed for Kenyan Primary Education</p>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));