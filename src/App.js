import React, { Component, Fragment } from 'react';

import Form from './components/Form/Form';
import RecipeList from './components/RecipeList/RecipeList';
import { config } from './config';

import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  state = {
    recipes: [],
    loading: false,
    error: false,
    uri: 'http://food2fork.com/api/search?key=',
  };

  getRecipes = async (e) => {
    e.preventDefault();
    // Value From the recipe form input
    const recipe = e.target.elements.recipe.value;
    //Value from the count input
    const count = e.target.elements.recipeCount.value;

    this.setState({
      loading: !this.state.loading,
    });

    if (recipe && count) {
      const request = await fetch(
        `https://cors-anywhere.herokuapp.com/${this.state.uri}${
          config.API_KEY
        }&q=${recipe}&count=${count}`,
      );

      const response = await request.json();

      this.setState({
        recipes: response.recipes,
        loading: false,
      });
    } else {
      alert('Please enter a Recipe and Count');
    }
  };

  render() {
    const { recipes } = this.state;

    return (
      <Fragment>
        <AppBar position="static">
          <h1>Recipe Search</h1>
        </AppBar>
        <Form getRecipes={this.getRecipes} />
        <RecipeList recipes={recipes} />
      </Fragment>
    );
  }
}

export default App;
