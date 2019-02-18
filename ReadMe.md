# WordPress Plugin: Slide Form

This plugin gets use of WordPress' new Block Editor ("Gutenberg").
So, it might only work well with WordPress 5^.

## Helpful links for development

* [How to Adapt Your Plugin for Gutenberg: Part 1 (Block API)](https://www.codeinwp.com/blog/adapt-your-plugin-for-gutenberg-block-api/)
* [WordPress Block API Reference](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/)

## Requirements
* PHP, MySQL and Apache (for development, use [XAMPP](https://www.apachefriends.org/de/download.html))
* [WordPress 5^](https://wordpress.org/download/)
* [Git](https://git-scm.com/downloads)
* [Node.js + NPM](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)


## Start development

1. First you have to have a WordPress (v5^) setup ready installed. Then use a terminal to navigate to the WordPress plugin folder (`cd ./wp-content/plugins/`).
2. Clone this repository with `git clone https://github.com/lgkonline/wp-slide-form.git`.
3. Open the folder `wp-slide-form` with your favorite code editor (I use Visual Studio Code).
4. Install all NPM dependencies with `npm i`.
5. Start Webpack with `npm start`/`npm run dev`. With `npm run build` you'll create the output files for production.