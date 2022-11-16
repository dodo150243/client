import React, { useState, useEffect } from "react";
import { Table, Container, Row } from "reactstrap";
import axios from "axios";

function ProductListDone() {
  const [products, setProduct] = useState([]);
  const updateProduct = () => {
    axios.get("http://localhost:5000/productListDone").then((response) => {
      setProduct(response.data);
      console.log("Updateing Product list ......");
    });
  };
  useEffect(() => {
    updateProduct();
  }, []);

  return (
   <>
      
      
        <Table className='table table-bordered'>
          <thead className='thead1'>
            <tr>
              <th>สินค้าครบ</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                //  <tr key={product.id_order}>
                <tr>
                  <td>
                    {product.id_order} / {product.items} รายการ
                  </td>
                  {/* <td></td> */}
                  {/* <td>{product.Action}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
     
      </>
  );
}

export default ProductListDone;
