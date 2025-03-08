//KURAL 1 : JSX icinde mutlaka 1 tane parent eleman olmak zorunda
//KURAL 2 : Component isimleri PASCAL case olmalidir.
//KURAL 3 : JSX icindeki elementlerin attributelari camelCase olmalidir.
//KURAL 4 : JSX icinde javascript icin anlamli olan kelimeler kullanilmamalidir. class, for  vb kelimeler reserved ifadelerdir

import React from "react";

const Jsx1 = () => {
  return (
    <div className="form-group">
      <label htmlFor="name">JSX1</label>
      <input type="text" id="name" />
    </div>
  );
};

export default Jsx1;
