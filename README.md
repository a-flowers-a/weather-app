# Weather app challenge

Web frontend app challenge that shows list of weather for the US capital cities.

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

When tests are also run when the command for coverage is run, owever to check them interactively you can run `npm test` and the menu options for tests will be shown.
