import React from "react";

const Linkedin = () => {
  return (
    <>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="akshitvillager"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/akshitvillager?trk=profile-badge"
        >
          Akshit Kumar
        </a>
      </div>
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
    </>
  );
};

export default Linkedin;
