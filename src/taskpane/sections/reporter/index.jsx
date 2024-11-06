import "./style.scss";
import { Image } from "@fluentui/react-components";
import * as React from "react";
import axios from "axios";
import { useState } from "react";

/* global Office */
/* global console */

let Reporter = () => {
  // send report to http://127.0.0.1:3000/api/step/bec/report-email using axios
  let from = Office.context.mailbox.item.from;
  let toRecipients = Office.context.mailbox.item.to;
  Office.context.mailbox.item.body.getAsync("html", function (result) {
    let emailBody = result.value;
  });

  let [message, setMessage] = useState("");

  let sendReport = () => {
    try {
      let report = {
        email_from: "test1@gmail.com",
        email_to: "test2@email.com",
        email_source_base64: "c2FkbGtnamFzZGxrZ3U4MTJna2pzZGxnamhzZGtnCg==",
      };
      axios.post("http://127.0.0.1:3000/api/step/bec/report-email", { report }).then((r) => r.data);
      setMessage("Email reported");
      console.log("Report sent successfully", report);
    } catch (e) {
      console.log("Error on sending report: ", e);
    }
  };

  return (
    <div className="taskpane-reporter">
      <div className="head">
        <div className="title">REPORT EMAIL</div>
        <div className="description">If the email looks suspicious, report it to us</div>
      </div>
      <div className="consent">
        By reporting this email, you consent to processing of this email in accordance with our Privacy Policy.
      </div>
      <p> {message} </p>
      <button>REPORT EMAIL</button>
    </div>
  );
};

export default Reporter;
