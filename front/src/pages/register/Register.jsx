import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router for navigation
import './register.css'; // Import your custom CSS file for styling.

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Access the navigate function to enable navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Form submitted');
    // Create an object with form data
    const formData = {
      username: userName,
      email,
      password,
      address,
      mobile,
    };

    try {
      const response = await fetch('http://localhost:8070/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration was successful
        setSuccessMessage('Registration successful!'); // Set success message
         // Refresh the page to clear the form
        window.location.reload();
      } else {
        // Registration encountered an error
        setErrorMessage('Registration failed. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error registering user', error);
      setErrorMessage('An error occurred during registration.'); // Set error message
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-left">
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>

        {/* Display success message */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Display error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>
          Already have an account?{' '}
          <button
            className="login-button"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </p>

        
      </div>
      <div className="registration-right">
        <h2>Hello....</h2>
        <h3>Welcome to SNAP'N RIDE</h3>
        <p>
          "Discover Freedom on Wheels! Explore our fleet of vehicles and embark on unforgettable journeys with our hassle-free car rental service."
        </p>
      </div>
    </div>
  );
};

export default Register;
