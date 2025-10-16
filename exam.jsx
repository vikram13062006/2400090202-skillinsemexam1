import { useState, useEffect } from 'react';
const Student = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isMobile = windowWidth < 768;
  return (
    <div className={`student-info ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="student-details">
        <h2>John</h2>
        <p>Age: 21</p>
        <p>Grade: A</p>
        <p>Major: CSE</p>
      </div>
      <div className="student-photo">
        <img src="https://Photo.jpg" alt="Student" />
      </div>
    </div>
  );
};
export default Student;
