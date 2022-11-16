import React, { useState, useEffect } from "react";
import { Table, Container, Row } from "reactstrap";
import axios from "axios";

function ProductListDone() {
  const [products, setProduct] = useState([]);
  const updateProduct = () => {
    axios.get("http://localhost:3000/productListDone").then((response) => {
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
              <th>สินค้าไม่ครบ</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                
                <tr>
                  <td>
                    {product.id_order} / {product.items} รายการ
                  </td>
                
                </tr>
              );
            })}
          </tbody>
        </Table>
     
      </>
  );
}

export default ProductListDone;
