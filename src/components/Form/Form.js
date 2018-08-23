import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = ({ getRecipes }) => (
  <FormContainer onSubmit={getRecipes}>
    <TextField
      type="text"
      name="recipe"
      id="recipe"
      placeholder="Search for a Recipe"
    />
    <br />
    <TextField
      type="number"
      name="recipeCount"
      id="recipeCount"
      placeholder="How many?"
    />
    <Button type="submit">Submit</Button>
  </FormContainer>
);

export default Form;

const FormContainer = styled.form`
  margin: 0 auto;
  width: 500px;
  padding: 1em;
`;
