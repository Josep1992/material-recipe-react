import React from 'react';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: '20px',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const RecipesList = ({ recipes, classes }) => (
  <div className={classes.root}>
    {recipes.length !== 0 ? (
      <GridList cols={3} cellHeight={200} classes={classes.gridList}>
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
  </div>
);
export default withStyles(styles)(RecipesList);
