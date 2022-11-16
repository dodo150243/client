import React, { useState, useEffect } from "react";
import { Table, Container, Row } from "reactstrap";
import axios from "axios";
import { io } from 'socket.io-client';

function ProductListDone() {
  const socket = io();

  

  const [products, setProduct] = useState([]);
  // const [socket] = useOutletContext();

  const updateProduct = () => {
    axios.get("http://localhost:3000/product/productListDone").then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    if(socket){
      socket.on('connect', function (data) {
        updateProduct(data);
        console.log('Connected!');
        });
      socket.emit('CH01', 'Tirawat', 'test msg');
      // updateProduct();
    }
    
  }, []);

  // useEffect(() => {
    
  //   socket.emit('CH01', 'Tirawat', 'test msg');
  // }, []);

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
