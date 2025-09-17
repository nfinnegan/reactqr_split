# Getting Started with QR Code App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Below you'll find the flags you need to create, information on the custom attributes you can leverage, and how to deploy to GitHub pages

### Duplicate this repo and deploy to GitHub Pages

1. Fork this repo and clone to your local machine
2. Run `npm i` or `npm install` in the root directory of the project
3. In your GitHub repository, go to Settings > Pages and create a GitHub Page. Copy the URL of your GitHub Page, for use in the next section

### Modify variables for your own usage

1. In `App.js` modify the 'QRURL` variable to the GitHub Pages URL you previoiusly copied
2. In `index.js` modify the `authorizationKey` to your own Harness client-side SDK key for your production environment
3. In `package.json`, modify the "homepage" to point to your github pages URL

### Flags used by the App

1. `configureBackground`: A **string** flag with yellow, purple, blue, and pink as string variations.
2. `show_qrCode`: **boolean**

### Testing

1. To test that it's working locally before deploy, run `npm start` in your root directory 
2. In the Harness FME module, try turning the `show_qrCode` flag on and off, and serve different colors in the `configureBackground` flag

## Deploying 

1. To deploy to GitHub pages, run `npm run deploy` to deploy to a new gh-pages branch of your repository
2. In your GitHub repository, go to Settings > Pages and ensure you're branch selection is the gh-pages branch in the root directory

