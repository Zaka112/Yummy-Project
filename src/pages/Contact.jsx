import React from "react";

import { Typography } from "@mui/material";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <Typography variant="h2">Contact Us</Typography>
        <Typography paragraph variant="body1">
          We love hearing from you! Please contact us via email address or phone
          numbers below.
        </Typography>
        <Typography paragraph variant="body1">
          For answers to frequently asked questions about your subscription,
          please check out our FAQ page.
        </Typography>
        <Typography variant="h6" sx={{ display: "block", fontWeight: 800 }}>
          Email address:
          <Typography sx={{ display: "inline-block" }}>
            help@yummy.com
          </Typography>
        </Typography>
        <Typography>
          {" "}
          we will respond to your email within 72 hours.
          <Typography variant="h6" sx={{ display: "block", fontWeight: 800 }}>
            Toll-free number:
            <Typography sx={{ display: "inline-block" }}>
              855-753-1037
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ display: "block", fontWeight: 800 }}>
            International number:{" "}
            <Typography sx={{ display: "inline-block" }}>
              332-239-2921
            </Typography>
          </Typography>
          Hours of operation: Monday through Friday, 9 a.m. to 7 p.m. E.T.
        </Typography>
      </div>
    </div>
  );
}
