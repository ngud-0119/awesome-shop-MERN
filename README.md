# The Awesome Shop-Shop - Redux
[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

For this project, I refactored an e-commerce platform so that Redux would be used to handle the application's global state. Previously, this application could control global state by using React's Context API. While the Context API is one of the many libraries used to manage state and is still used today alongside React, the open-source JavaScript library Redux is the industry standard for managing complex state in a large-scale React application. This project gave me experience in reading technical documentation for new technologies like Redux and integrating the new library into an application while maintaining the functionality of the application as a whole.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [Credits](#credits)
* [Links](#links)
* [License](#license)

## Installation

To install this application on your local machine:

- Clone the application's repository and place it into a local directory on your computer.
- Ensure that your computer has node.js installed.
- Open a command-line interface (VS Code, Git Bash, etc.) and navigate to the root directory.
- In the command-line, install the application's dependencies by typing the following command. The application will install dependencies for both the server and client directories.
```
    npm install
```
- Start the application by typing the following command. Your default web browser will then open the application in a new tab. 
```
    npm run develop
```

## Usage

To use this application, navigate to the Links section and click on the link to the deployed application on Heroku. To create an account or log into an existing account, click on the Login/Signup menu option in the upper left corner of the navbar. Fill out the required fields and the application will return the logged in user to the homepage. 

To add products to your cart, simply click on the 'Add to cart' button under your desired product and the product and its quantity will appear in the cart on the upper right corner of the navbar. Clicking on the cart button will toggle the cart visibility on or off. You can also modify the quantity of the carts either by clicking on the 'Add to cart' button' again or by manually inputting a quantity in the field next to each product in the shopping cart. The total price will be displayed at the bottom of the shopping cart.

You can filter the products by category by clicking on one of the buttons under the 'Choose a Category' heading. Clicking on a product image will take you to a page displaying the product's name, description, image, price, 'Add to cart' button, and 'Remove from cart' button.

To check out, logged in users can click on the checkout button at the bottom of the cart. You will then be taken to the checkout page powered by the Stripe API. Note that this is a test page to test the checkout functionality. Input a test value for the credit card and other information to see the checkout functionality in action. Upon successful completion of the checkout, you will be taken to a page with a message indicating that the payment was a success and then be taken back to the homepage. You can also view your order history by clicking on the order history link in the upper left of the navbar.

## Screenshots

The following images demonstrate the application's appearance and functionality.


## Technologies Used

- MERN
- GraphQL API
- Apollo Server
- IndexedDB
- Stripe API
- Redux
- Heroku

## Credits

- [kt946](https://github.com/kt946)

## Links

- [Link to deployed application on Heroku](https://shop-shop-75043.herokuapp.com/)

- [Link to GitHub repository](https://github.com/kt946/shop-shop)

## License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) License.
