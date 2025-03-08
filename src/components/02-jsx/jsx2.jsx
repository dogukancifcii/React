//KURAL 5: JSX icinde javascript kullanmak icin suslu parantezler kullanilir.

import React from "react";

const Jsx2 = () => {
  const student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  };

  return (
    <ul>
      <li>
        <strong>First name</strong>: {student.firstName}
      </li>
      <li>
        <strong>Last name</strong>: {student.lastName}
      </li>
      <li>
        <strong>Address</strong>: {student.address.street}
        {student.address.city}
      </li>
    </ul>
  );
};

export default Jsx2;
