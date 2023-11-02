# Weather app challenge

Web frontend app challenge that shows list of weather for the selected US capital city.
<br>
It shows the current temperature and the wind speed in metric units, as well as the Air Quality Index based on the air pollution.

The shown data is provided by [Open Weather Map](https://home.openweathermap.org/). The API key is included within the .env file in this repo.
**Note:** this file was pushed into the public repo so that anyone could test. However a secure mean should be used to share this kind of info.

[See the app up and running](https://unrivaled-custard-408fd3.netlify.app/)

**Important:** The app is deployed on netlify. Since the pollution API doesn't have an http**s**, this requests are not performed to avoid errors and problems on netlify, so the pollution data will only be shown if you [run this App locally with docker](#run-app-with-docker).

<br>

This frontend app project uses React library and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br>

The main structure of the frontend project is:

1. Components: there are all the base components used in pages.
2. Pages: containers where components are integrated and logic for fetching data is performed.
3. Context: there are all the global state related files using React context API, the implementation of each global state is based on **Provider** Design Pattern.
4. Services: in this folder are the files used to perform http requests.
5. Types and Constants: those folders are used to store globally used types and constants.
6. GlobalStyles: this folder stores styles that are shared among the components. **Note:** SCSS is used to ease this goal.

<br>

## Run app with docker

Run web application with Docker container with Nginx server

Preconditions:

1. Have Docker and docker-compose installed.
2. Have Docker's deamon running.
3. Port 8080 should be available

At the terminal in the root folder run the command `docker-compose up -d --build`. This will always build the project's image and run a container for it. Then open your browser on `localhost:8080` and the app should be shown.

To stop the container just run `docker-compose down`, this will also delete the container when it has stopped.

### Run Tests

Preconditions:

1. Be at **root/** path
2. Install node modules with `npm install`

Run `npm test` and the menu options for tests will be shown.

<br>
Originally the components and all helpers should have unit tests. However, currently, due to the time restriction, only the helpers and context have unit tests
