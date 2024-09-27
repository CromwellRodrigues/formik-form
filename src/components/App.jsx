import React from 'react';

import { Formik, Form, Field, handleChange, handleBlur } from 'formik';

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


const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

const StyledCategoryInput = styled.select`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  // Add any other styles you want to apply to the input
`;

const ErrorContainer = styled.div`
  margin-bottom: 15px;
  color: red;
`;

const DeleteButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
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


const capitalizeName = (name) => {
  if (!name) return '';
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const App = () => {


    const notify= (name) => toast.success(`${name} added successfully!`);

  const onSubmit = (values, actions) => {
      values.name = values.name.trim();
      notify(values.name);
      console.log(values)
      actions.resetForm();
        
    
    }

      const handleCategoryChange = (event) => {
      console.log(event.target.value);
  };


    return (


      <Container>
        
          <div>
       
            <Toaster richColors />
        </div>
        

            <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>


                {({ errors, touched, isValid }) => (

                    <StyledForm>
                        
                        {/* item name entry and error message */}
                        <StyledLabel htmlFor="name">Name:</StyledLabel>
                        <StyledField type="text" id="name" name="name" placeholder="Enter product name" />
            
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


    
                          {/* item CATEGORY and error message */}
            
          
                        <StyledLabel htmlFor="category">Select a category:</StyledLabel>
                        
                    {/* <StyledCategoryInput> */}
                        <Field as="select" name="category" id="category" style={{ display: "block" }}>
                        <option value="" label="Select a category">Select a category</option>
                        <option value="fruits" label="Fruits">Fruits</option>
                        <option value="vegetables" label="Vegetables">Vegetables</option>
                        <option value="dairy" label="Dairy">Dairy</option>
                        <option value="meat" label="Meat">Meat</option>
                        <option value="baking" label="Baking">Baking</option>
                        <option value="snacks" label="Snacks">Snacks</option>
                        <option value="other" label="Other">Other</option>
                        </Field>
                    {/* </StyledCategoryInput> */}

                        <ErrorContainer>
                        {touched.category && errors.category && <p className="form_error">{errors.category}</p>}
                        </ErrorContainer>
                        

                        {/* item expiry date and error message */}
                        <StyledLabel htmlFor="expiry_date">Expiry Date:</StyledLabel>
                        <StyledField type="date" id="expiry_date" name="expiry_date" min={getCurrentDate()} />
                        
                        <ErrorContainer>
                        {touched.expiry_date && errors.expiry_date && (
                            <p className="form_error">{errors.expiry_date}</p>)}
                        </ErrorContainer>


                           {/* Buttons Container
            <ButtonsContainer>
              <DeleteButton type="button" onClick={() => console.log('Delete clicked')}>Delete</DeleteButton>
              <SubmitButton type="submit" disabled={!isValid}>Submit</SubmitButton>
            </ButtonsContainer>
           */}

              <SubmitButton type="submit" >
                            Submit
                        </SubmitButton>
            
                
        
                
                    </StyledForm>
                )}
            </Formik>
                
        </Container>
 
    );
};

export default App;