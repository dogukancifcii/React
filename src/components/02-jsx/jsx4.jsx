import React from "react";

const Jsx4 = () => {
  const isAdmin = true;
  let title = "Customer";

  if (isAdmin) {
    title = "Admin";
  }

  return <h3>{title}</h3>;
};

export default Jsx4;
