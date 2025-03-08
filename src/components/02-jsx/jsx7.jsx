import React from "react";

const Jsx7 = () => {
  //Map in FOR dongusu gibi kullanimi
  let liEls = "";
  const arr = [...new Array(100)].map((_, index) => index + 1); //[...new Array(100)] boyle yapama sebebimiz map icinde kullanabilmek icin

  liEls = arr.map((item) => <li key={item}>{item}</li>);
  return <ul>{liEls}</ul>;
};

export default Jsx7;
