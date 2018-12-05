import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609.335855974336!2d90.40955253035762!3d23.735467403546092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1544023552259"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="location"
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
