import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { config } from '../../config';

class Recipe extends Component {
  state = {
    recipe: [],
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${
        config.API_KEY
      }&q=${title}`,
    );
    const response = await request.json();

    this.setState({
      recipe: response.recipes[0],
    });
  };
  render() {
    const {
      title,
      image_url,
      recipe_id,
      source_url,
      publisher,
      social_rank,
    } = this.state;
    console.log(this.state.recipe);
    return (
      <Card>
        {this.state.recipe.length !== 0 ? (
          <CardMedia image={image_url} title={title} />
        ) : (
          console.log(this.state.recipe)
        )}
      </Card>
    );
  }
}

export default Recipe;
