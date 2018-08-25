import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const Form = ({ getRecipes, classes }) => (
  <FormContainer onSubmit={getRecipes}>
    <TextField
      type="text"
      name="recipe"
      fullWidth
      id="recipe"
      placeholder="Search for a Recipe"
      className={classes.input}
    />
    <br />
    <TextField
      type="number"
      min={1}
      name="recipeCount"
      fullWidth
      id="recipeCount"
      placeholder="How many?"
      className={classes.input}
    />

    <Button
      type="submit"
      color="primary"
      variant="contained"
      className={classes.button}
    >
      Submit
    </Button>
  </FormContainer>
);

const FormContainer = styled.form`
  margin: 0 auto;
  width: 500px;
  padding: 1em;
`;

const styles = () => ({
  button: {
    marginTop: '10px',
  },

  input: {
    padding: '5px',
  },
});

export default withStyles(styles)(Form);
