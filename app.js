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
      <h1 style={{textAlign: 'center', padding: '100px', color: '#1a472a'}}>
        {schoolInfo.name}
      </h1>
      <p style={{textAlign: 'center', fontSize: '24px', color: '#ffd700'}}>
        {schoolInfo.motto}
      </p>
      <p style={{textAlign: 'center'}}>
        Website is loading... If you see this, React is working!
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
