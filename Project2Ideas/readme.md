# Project 2 Planning

* Fork & Clone this repo.

Review the [Project 2 requirements](https://tmdarneille.gitbook.io/seirfx/11-projects/project-2#project-feedback-evaluation) and check out some [examples](https://tmdarneille.gitbook.io/seirfx/11-projects/past-projects/project2).

In the space below:
* either embed or link a completed ERD for your P2 idea
* include [user stories](https://revelry.co/user-stories-that-dont-suck/)
* either embed or link wireframes for every page of your app
* include links to any APIs or other 3rd party tech you plan to use

----------------------------------------------------------

## Overview

This recipe app will allow users to view recipes and create their own recipes to build out a personalized cookbook of favorites. They can make an account to store data and edit their own created recipes, including instructions on how to prepare the meal and the ingredients to you. They'll also be able to add and delete recipes from their cookbook.

----------------------------------------------------------
### ERD

https://lucid.app/invitations/accept/ec256862-8f53-4741-942a-eda1d9ef7ca1

----------------------------------------------------------
### User Stories
1. As a user, I want to land on a homepage and be directed to login / sign-up when any links are clicked
   * Create redirect to login page
   * Verify if user exists or if new sign up is needed (authentication)
   * Add user to user model
1. I should be directed to home page after login
    * Create redirect to home page
1. I should be able to view pre-populated recipes or search for new recipes
    * Set up API connection to pull from Recipe API's available recipes
    * Pull in all recipe details through API
    * Redirect to recipe detail page when selected
1. I should be able to add a recipe to my 'cookbook'
    * Confirm addition by navigating to 'My Recipes' page with all favorited recipes
    * CREATE route to add recipe in recipe model
1. I should be able to create a new recipe
    * Store directions, instructions, name and image within database
    * POST route to add recipe in recipe model
1. I should be able to edit my own recipes or delete recipes in my cookbook
    * PUT route to update recipe model accordingly
    * DELETE route to delete recipe from the recipe model
1. I should be able to view recipes according to category
    * Click "Categories" link to navigate to categories page
    * GET route to get recipes with certain category
1. I should be able to write a review on a recipe
    * PUT route to add comment to a recipe
----------------------------------------------------------
### Wireframes

![Home Page](home-page.png)\
![Login Page](login.png)\
![My Recipes Page](my-cookbook.png)\
![New Recipe Page](new-recipe.png)\
![Categories Page](categories.png)\
![Recipe Detail Page](recipe-detail.png)

----------------------------------------------------------
### APIs and other outside tech

[Recipe API](https://rapidapi.com/webknox/api/recipe?endpoint=53aa54e4e4b0a9b1348da918)

----------------------------------------------------------

Make a PR when you're done and title it with your pod person's name and yours (eg. "Edward<-->Taylor")!
