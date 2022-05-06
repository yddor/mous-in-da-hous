import React from "react";

const Section = ({ id, children }) => {
  return (
    <section id={id} className="py-16">
      {children}
    </section>
  );
};

export default Section;
