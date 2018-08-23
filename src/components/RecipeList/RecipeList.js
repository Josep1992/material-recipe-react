import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const RecipesList = ({ recipes }) => (
  <Fragment>
    {recipes.length !== 0 ? (
      <GridList cols={4} cellHeight={150}>
        {recipes.map(recipe => (
          <GridListTile key={recipe.recipe_id} recipe={recipe} cols={1}>
            <img src={recipe.image_url} alt={recipe.title} />
            <Link
              to={{
                pathname: `/recipe/${recipe.recipe_id}`,
                state: { recipe: recipe.title },
              }}
            >
              <GridListTileBar
                title={
                  recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`
                }
                subtitle={<span>{recipe.publisher}</span>}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    ) : (
      console.log(recipes)
    )}
  </Fragment>
);
export default RecipesList;
