import React from 'react';

const About = (props) => {
  const { image, about } = props;

  return (
    <aside>
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;