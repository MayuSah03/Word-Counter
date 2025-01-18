import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "Success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Spaces Removed", "Success");
  };

  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
        />
      </div>
      <button
        disabled={text.length === 0}
        className="btn"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn"
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn"
        onClick={handleClearClick}
      >
        Clear
      </button>
      <button disabled={text.length === 0} className="btn" onClick={handleCopy}>
        Copy
      </button>
      <button
        disabled={text.length === 0}
        className="btn"
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((e) => e.length !== 0).length} words and{" "}
          {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
