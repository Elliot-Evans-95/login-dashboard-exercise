# Login Dashboard Exercise

The aim of this exercise is to create a small slice of a typical authenticated section of a website.

There are 3 pages to create:

1. Login view - enables the user to see authenticated pages once logged in, this includes:
    - has the ability to login with username and password
    - shows an error upon an un-successful login
    - redirects to dashboard upon successful login
    - adds a token into local storage upon a successful login

2. Dashboard - shows general info of the user
    - Shows a top navigation that includes the menu icon and profile icon
    - Shows a side-nav for quick links to other authenticated pages
    - Shows card of fake data

3. Profile - update user's data
   - Has the ability to update the user's name

## Goal of exercise

To get a solid react structure in place when making these 3 pages using clean functional well tested code that can be re-used.

## Design

[Figma designs](https://www.figma.com/file/DqXLVFxBsAMGpZaUbwmPRs/login-dashboard?type=design&node-id=0%3A1&mode=design&t=8lgdJ473NMjav0dO-1)

This link highlights what is expected for this exercise:
- login screen to fill out
- login screen to navigate you to the dashboard page
- dashboard screen to have a top nav bar
- dashboard screen to have a side-menu / side-nav
- dashboard screen to say hello to the user's name
- dashboard screen to have some info displayed to the user in the flex card format
- profile screen to show a form in which the user can update their own name

## What is included?

[Vite](https://vitejs.dev/guide/why.html) - used to run the project
[Vitest](https://github.com/vitest-dev/vitest) - used to run the tests for the project
[Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - used to render the React components in the test
[Axios](https://axios-http.com/docs/intro) - to retrieve data from API
[React Query](https://tanstack.com/query/latest/) - declarative way of getting and storing data

## What is not included?

### Navigation
Would recommend either [React Router](https://reactrouter.com/en/main) (most popular) or 
[TenStack Router](https://tanstack.com/router/v1) for navigation and the ability to have client side routing.

### State Management
In addition, there is no State management, but I would recommend one of the following:
* [XState](https://xstate.js.org/) - State machine state management library
* [Redux](https://react-redux.js.org/) - Classic store for React
* React Context - a simple non-library version of Redux

## What is prohibited?

Any SSR or additional frameworks on-top of react are prohibited.
