import "./style.scss";
import * as React from "react";

let Analyzer = () => {
  return (
    <div className="taskpane-analyzer">
      <div className="head">
        <div className="title">EMAIL ANALYZER</div>
        <div className="description">
          Analyze the email to determine if it is a phishing email or not
        </div>
      </div>
    </div>
  );
};

export default Analyzer;