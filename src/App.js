import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000); // Alert disappears after 2 seconds
  };

  return (
    <BrowserRouter>
      {" "}
      {/* Wrap the entire app with BrowserRouter */}
      <Navbar title="Word Counter" />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
