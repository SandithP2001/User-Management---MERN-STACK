


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./profile.css";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    username: "",
    address: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/users/${id}`)
      .then((response) => {
        setUserData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [id]);

  const enterEditMode = () => {
    setIsEditMode(true);
  };

  const exitEditMode = () => {
    setIsEditMode(false);
  };

  const saveChanges = () => {
    axios
      .put(`/users/${id}`, userData)
      .then((response) => {
        console.log("Data updated successfully.");
        exitEditMode();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  const deleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");

    if (confirmDelete) {
      axios
        .delete(`/users/${id}`)
        .then(() => {
          Cookies.remove("auth_token");
          clearUserData();
          navigateToMainPage();
        })
        .catch((error) => {
          console.error("Error deleting account:", error);
        });
    }
  };

  const clearUserData = () => {
    setUserData({
      username: "",
      address: "",
      email: "",
      password: "",
      mobile: "",
    });
  };

  const navigateToMainPage = () => {
    navigate("/");
  };

  // Function to sign out and redirect to the home page
  const signOut = () => {
    Cookies.remove("access_token"); // Replace with your actual cookie name
    clearUserData();
    navigateToMainPage();
  };

  return (
    <div className="profile-container">
      <div className="left-section">
        <div className="uprofile">
          <h2>User Profile</h2>
          {!isEditMode ? (
            <div>
              <button className="save-button" onClick={enterEditMode}>
                Edit
              </button>
              <button className="delete-button" onClick={deleteAccount}>
                Delete Account
              </button>
            </div>
          ) : (
            <div>
              <button className="save-button" onClick={saveChanges}>
                Save
              </button>
              <button className="delete-button" onClick={exitEditMode}>
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="details">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div>
              {isEditMode ? (
                <div>
                  <div className="input-group">
                    <label htmlFor="username">User Name :</label>
                    <input
                      type="text"
                      id="username"
                      value={userData.username}
                      onChange={(e) => handleInputChange("username", e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="address">Address :</label>
                    <input
                      type="text"
                      id="address"
                      value={userData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="text"
                      id="email"
                      value={userData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="mobile">Mobile :</label>
                    <input
                      type="text"
                      id="mobile"
                      value={userData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>User Name :</strong> {userData.username}
                  </p>
                  <p>
                    <strong>Address :</strong> {userData.address}
                  </p>
                  <p>
                    <strong>Email :</strong> {userData.email}
                  </p>
                  <p>
                    <strong>Mobile :</strong> {userData.mobile}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="buttons">
          <button className="payment-history-button">Payment History</button>
          <button className="booking-history-button">Booking History</button>
        </div>
      </div>
      <div className="right-section">
        <div className="para1">
        <p>Hello, {userData.username}</p>
        </div>
        <div className="paragraph">
        <p>
          Unlock the World with our Car Rental Service! Step into a world of boundless opportunities as you explore our extensive range of vehicles. Our car rental service empowers you to embark on unforgettable journeys, whether it's a weekend getaway, a business trip, or an extended vacation. With hassle-free reservations, a diverse fleet, and flexible rental options, we are your key to the open road. Enjoy the freedom to choose the perfect vehicle for your needs, backed by exceptional service and peace of mind. Discover the thrill of the open road with our car rental service and make each journey an adventure to remember.
        </p>
        </div>
        <button className="sign-out-button" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;



