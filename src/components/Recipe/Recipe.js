import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    } = this.state.recipe;

    return (
      <Fragment>
        {this.state.recipe.length !== 0 && (
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={image_url}
              title={title}
            />
            <CardContent>
              <h1>{title}</h1>
              <span>{recipe_id}</span>
              <br />
              <CardActions>
                <Button>
                  <Link to={{ pathname: publisher }}>Link Here</Link>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        )}
      </Fragment>
    );
  }
}

export default Recipe;
