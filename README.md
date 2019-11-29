# week5-bcln-backend-api

## Project - Backend API Website

#### Installation 

To install the project, follow these simple steps:

1. Clone the project
2. Run `npm install` to setup package dependencies
3. Run `npm start` to access the local host
4. Run `npm test` to access the tape tests

#### User Stories as Guide

'As a student at F&C I want to know all the train departure times from Finsbury Park tube station, so that I can get home in time for dinner'.🚉🍛

'As a regular commuter, I want to input which direction of travel I am interested in so that I can see information that is relevant to me.'

This news feed could be created with data provided via the [TFL API](https://api.tfl.gov.uk/).

You can build on this user story or create your own user stories as long as they are consistent and the below specs are fulfilled.

#### Task

Your task is to build a site which will update as you type (an autocompleter), as per the description above.

#### Goals

1) Use at least 1 API 
    - Used a weather API (with API key)

2) Make your API calls from the back-end using the Request module (or one you build yourself)
    - Request.js built and required in Handlers.js which has the API call
3) Your server should contain a minimum of 2 routes
    - Router.js has 3 routes
    
4) We expect to see lots of tests! Modularise your code and test all your pure functions. Write tests for as much of your back-end and front-end logic as you can. We don't expect tests on the DOM.
    - Nock Tests done but commented out due to notation changes
    
5) Test your server routes by injecting fake HTTP requests using Supertest (including testing for 404's). _Note - you are not required to test any server route that makes an API call, as this will make the test impure (a test that depends on an external factor is not reliable)_
    - Supertests done

6) Host your project on Heroku, see [resources](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-5/resources.md)
    - Hosted on Heroku

7) Use module.exports and require to break a single large server file into smaller modules.
    - core modules and dependencies were used during the process

8) Consider a good server file structure based on what we have discussed over the week.
    - architecture was highly prioritised

9) Employ continuous integration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)
    - travis was implemented early on

10) Use CodeCov or a similar tool to report and track test coverage.
    - test passing tracked appropriately

11) Include Error Handling. For example:
  - if a user attempts to make a request to a non-existent route to your server (404 - as mentioned above), provide the user with a custom response.
  - if there is a [programmer error](https://github.com/foundersandcoders/error-handling-workshop#kinds-of-errors) on your server (e.g. a handler function does not act as intended), provide the user with a custom response (500 status code).
     - error handling implemented from the beginning

12) Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.
    - input field done as a dropdown button to prevent malicious user input

13) Display continuous integration and code coverage badges on your project README. 
    - continuous integration done via travis

### Stretch goal 😊:

14) Research and use Nock to mock the response of external API calls in your tests, and write tests for server routes that make API calls.
    - Nock used as a mock test

15) Create a route and functionality for a POST request.

#### What
A weather checker website that shows you the description of the weather and the temperature during that day

#### How
By connecting to a backend API call and feeding the info to the front-end

##### Step 1: Inspiration
We decided to use a weather API so that the information gets constantly updated and together with focusing on the UK provides relevant information to the user


##### Step 2: Architecture
We separated our public and our src folder that contained front-end and back-end files respectively.

We separated a config.env file for sensitive information


##### Step 3: Front-End Creation

##### Step 4: Accessibility

Following the previous knowledge from week 1, we decided to keep focusing in running audits to make our app accessible for everyone.

##### Step 5: Back-End Creation

##### server/router


##### handlers 


##### data

connected to the DOM

##### tests

Tests creation through tape, nock, and supertest

##### Step 6: Testing

##### Step 7: DOM Manipulation

##### Step 8: Front-End to Back-End Connection

##### Step 9: Front-End Design

Basic design choices with border to contain the content - plans to make it more stylised and thematic with weather. 

#### Biggest Issues
1. Heroku is still an issue
2. Supertesting and nock testing
3. Lack of pure functions to test
4. Attempted making an autocompleter that would make an API call in the back-end

#### Moving Forward
1. To make a weather app that would give more details about the city of choice within the UK
