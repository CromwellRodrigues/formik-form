import React from 'react';

import { Formik, Form, Field } from 'formik';

import { signupSchema } from '../Schema/index';

import "./App.module.css"

import styled from 'styled-components';
import { toast, Toaster } from 'sonner';


// Define the styled components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #f0f0f0; /* Optional: background color for the page */
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledField = styled(Field)`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorContainer = styled.div`
  margin-bottom: 15px;
  color: red;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


const CategoryDropdown = ({ field }) => {
  const options = [
    { value: "fruit", label: "Fruit" },
    { value: "vegetable", label: "Vegetable" },
    { value: "dairy", label: "Dairy" },
    { value: "meat", label: "Meat" },
    { value: "bakery", label: "Bakery" },
    { value: "produce", label: "Produce" }
  ];

  return (
    <select {...field}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
        



const initialValues = {
    name: "",
    category: "",
    expiry_date: "",
    quantity: "",

}


const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};


const App = () => {

    const notify= () => toast.success("Item added successfully!");

    const onSubmit=(values, actions) => {
        console.log(values);
        notify();
        actions.resetForm();
        
    
    }



    return (


        <Container>
       
            <Toaster />
            
            <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>


                {({ errors, touched }) => (

                    <StyledForm>
                        
                        {/* item name entry and error message */}
                        <StyledLabel htmlFor="name">Name:</StyledLabel>
                        <Field type="text" id="name" name="name" placeholder="Enter product name" />
            
                        <ErrorContainer>
                        {touched.name && errors.name && (
                            <p className="form_error">{errors.name}</p>)}
                        </ErrorContainer>
                    

                        {/* item quantity and error message */}
                        <StyledLabel htmlFor="name">Quantity:</StyledLabel>
                        <StyledField type="number" id="quantity" name="quantity" placeholder="Enter quantity" />
            
                        <ErrorContainer>
                            {touched.quantity && errors.quantity && (
                            <p className="form_error">{errors.quantity}</p>
                            )}
                        </ErrorContainer>


                        {/* item category and error message */}
                      
                        <StyledLabel htmlFor="category">Category:</StyledLabel>
                         <StyledField type="text" id="category" name="category" placeholder="Enter a category" />
                        

                        <ErrorContainer>
                        {touched.category && errors.category && (
                            <p className="form_error">{errors.category}</p>)}
                        </ErrorContainer>
                        <div className="error_container"></div>


                        {/* item expiry date and error message */}
                        <StyledLabel htmlFor="expiry_date">Expiry Date:</StyledLabel>
                        <StyledField type="date" id="expiry_date" name="expiry_date" min={getCurrentDate()} />
                        
                        <ErrorContainer>
                        {touched.expiry_date && errors.expiry_date && (
                            <p className="form_error">{errors.expiry_date}</p>)}
                        </ErrorContainer>




                        <SubmitButton type="submit">
                            Submit
                        </SubmitButton>
            
                
        
                
                    </StyledForm>
                )}
            </Formik>
                
        </Container>
 
    );
};

export default App;