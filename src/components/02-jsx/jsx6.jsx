import React from "react";

const Jsx6 = () => {
  const cities = ["London", "Paris", "New York", "Amsterdam", "Koln"];

  return (
    <ol>
      {cities.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
};

export default Jsx6;
