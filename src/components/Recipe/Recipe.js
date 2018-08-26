import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { config } from '../../config';

const cardStyles = {
  maxWidth: 400,
  margin: 'auto',
  marginTop: '30px',
  fontSize: '16px',
};

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
          <Card style={cardStyles}>
            <Image src={image_url} />
            <CardContent>
              <h2>{title}</h2>
              <span>Recipe #{recipe_id}</span>
              <br />
              <span>Recipe Rank {social_rank}</span>
              <br />
              <p>
                Recipe Source:
                <a href={source_url} target="_blank" rel="noonreferer">
                  {publisher}
                </a>
              </p>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to="/">Home</Link>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        )}
      </Fragment>
    );
  }
}

export const Image = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
  height: auto;
`;

export default Recipe;
