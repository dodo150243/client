import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    Container,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
} from "reactstrap";

function UpdateTaskForm({data,id}) {
   
   
    const initProductState = {
        id_task: "",
        done_on: "",
       
    };
    const [product, setProduct] = useState(initProductState);
    const [submitted, setSubmitted] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:4000/product/"+id).then((response) => {
            setProduct(response.data);
            
        });
    }, [id]);


    const handleInputChange = (event) => {
        let { name, value } = event.target;  //มันจะแมตอัตโนมัติ กับ name
        if(name === "tags"){
            value = value.split(",");
        }
        setProduct({...product, [name]: value });
    };
    const saveProduct = () => {
        const param = {
            id_task: product.id_task,
            done_on: product.done_on,
          
        };

        //call API
        axios.put("http://localhost:5000/api/products/"+product._id, param).then((response)=>{
                console.log(response.data);
                setProduct({...product, param});
                setSubmitted(true);
            })
        .catch((error)=>{
                console.log(error);
            });
    };
    
    const newProduct = () =>{
        setSubmitted(false);
    };
    return (
        <Container>
            <Row><h3>Update Product Information</h3></Row>

            {submitted ? (
                <>
                <Alert color='success'>
                    You have updated successfully !!
                    </Alert>
                    <Button className='btn btn-success' onClick={newProduct}>OK</Button>
                    </>
            ):(<>
            <Form>

            <FormGroup>
                <Label for="productName">Product id_task </Label>
                <Input type='text' name="id_task" id="productid_task"
                    value={console.log(product)}

                    onChange={handleInputChange} placeholder='Enter product name'>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="productCategory">Product Category</Label>
                <Input type='text' name="category" id="productCategory"
                    value={product.category || ""}
                    onChange={handleInputChange} placeholder='Enter product category'>
                </Input>
            </FormGroup>

            
            <Button className='btn btn-success' onClick={saveProduct} >Update product</Button>

        </Form>
            </>)}
            
        </Container>
    )
}

export default UpdateTaskForm;