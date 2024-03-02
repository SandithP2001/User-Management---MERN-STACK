// import { createRoot } from 'react-dom';
// import React from 'react';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




//-----------
import { createRoot } from 'react-dom/client'; // Update the import statement
import React from 'react';
import App from './App'; // Replace './App' with the correct path to your App component
import axios from 'axios'; // Import Axios

axios.defaults.baseURL = 'http://localhost:8070';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
