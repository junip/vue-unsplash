[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
# vue-unsplash

Vue Unsplash is photo search webapp made using Vue.js which uses Unsplash JSON APIs for photo search. Unsplash [https://unsplash.com](https://unsplash.com/) the most powerful photo engine in the world. Trying to make the unplash like UI  and add functionality as much as possible

<div align="center">
  <image src="src/assets/overview.jpg">
</div>


## Prerequisites

You are required to have [Node.js](https://nodejs.org/) installed to run the app locally.

## Getting Started


## Creating a developer account

To access the Unsplash API, first [register](https://unsplash.com/developers) as a developer.


## Registering your application

Once your account has been registered for the API, log in -> go to the Developers page -> Go to "Your Applications"->  "New Application" and fill in the required details.



SignUp or Login in [Unsplash](https://unsplash.com). Go to API/devlopers ->  Documentation. Then Register your app to get the API key and secret.

## API Usage

Update your API_KEY and API_SECRET in the [main.js](https://github.com/junipdewan/vue-unsplash/blob/master/src/main.js)

```
 const unsplash = new Unsplash({
        applicationId: "API_KEY",
        secret: "API_SECRET",
        callbackUrl: "{CALLBACK_URL}"
    });
```



## Usage

```sh
# install all dependency
~/ npm install

# run
~/ npm run dev 
```

## Contribution

The development of the App is still in progress. Only some part is implemented. You can help with 
code contribution to add more functionality in the App.

## 

Checkout another repo [React-Unsplash](https://github.com/junipdewan/react-unsplash). A clone app made using React and Unsplash JSON API
