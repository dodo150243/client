import React from "react";
import "../table.css";
import ProductListDone from "../components/ProductListDone";

function Home() {
  return (
    <main>
        <div class="d-flex justify-content-center">
      <ProductListDone />
      <ProductListDone />
      </div>
    </main>
  );
}

export default Home;
