import React, { useEffect, useState}from "react";
import "../table.css";
import ProductListDone from "../components/ProductListDone";
import ProductListNoDone from "../components/ProductListNoDone";


const Home=()=> {
  
  return (
    <main>
        <div class="d-flex justify-content-center">
      <ProductListDone />
      {/* <ProductListNoDone /> */}
      </div>
    </main>
  );
}

export default Home;
