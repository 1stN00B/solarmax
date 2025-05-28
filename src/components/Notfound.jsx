import { Link } from 'react-router-dom';
import '../Notfound.css'; // Optional CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="error-illustration">
        <img src="/images/404-error.jpg" alt="Error illustration" />
      </div>
      <div className="error-content">
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-button">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;