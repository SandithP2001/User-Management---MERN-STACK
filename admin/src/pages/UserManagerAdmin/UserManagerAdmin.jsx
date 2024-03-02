
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./usermanageradmin.css";

Modal.setAppElement("#root");

const UserManagerAdmin = () => {
  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  useEffect(() => {
    axios
      .get("/api/users/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      axios
        .delete(`/api/users/${userToDelete._id}`)
        .then(() => {
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== userToDelete._id)
          );
          setUserToDelete(null);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  const generatePdf = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Define the table headers and rows
    const tableHeaders = ["User ID", "Username", "Address", "Email", "Mobile"];
    const tableData = users.map((user) => [
      user._id,
      user.username,
      user.address,
      user.email,
      user.mobile,
    ]);

    // Add the table using the AutoTable plugin
    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
    });

    // Generate the PDF blob
    const pdfBlob = doc.output("blob");

    // Set the PDF blob in the state
    setPdfBlob(pdfBlob);

    // Open the PDF in a new tab
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  const downloadPdf = () => {
    if (pdfBlob) {
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = "user_report.pdf";
      a.click();
    }
  };

  // Function to handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the users based on the search query
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="divhead">
      <h2>User Management</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Username"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <button className="generate-report-button" onClick={generatePdf}>
        Generate Report
      </button>
      <button className="download-button" onClick={downloadPdf}>
        Download Report
      </button>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <button onClick={() => handleDeleteClick(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        className="confirmation"
        isOpen={Boolean(userToDelete)}
        onRequestClose={() => setUserToDelete(null)}
        contentLabel="Delete Confirmation"
      >
        <h3>Are you sure to delete this user?</h3>
        <button className="btn1" onClick={handleConfirmDelete}>
          Yes
        </button>
        <button className="btn2" onClick={() => setUserToDelete(null)}>
          No
        </button>
      </Modal>
    </div>
  );
};

export default UserManagerAdmin;
