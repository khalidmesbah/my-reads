# Project Overview
In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

# Installation and Running
- install all project dependencies with `npm install`
- start the development server with `npm start`

# The Stack
HTML5 | CSS3 | JavaScript | React | React Router | React tilt | Redux Toolkit | Node | JSX | Styled Components | BootStrap | Sweetalert2 | Prettier | EsLint | Create-React-App

# The Rubric
## Application Setup
- [x] The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.
- [x] An updated README that describes the project and has instructions for installing and launching the project is included.
- [x] The main page shows three shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
- [x] Each bookshelf is a reusable component.

## Main Page
- [x] The main page shows a control that allows users to move books between shelves. 
- [x] The control should be tied to each book instance. 
- [x] The functionality of moving a book to a different shelf works correctly.
- [x] When the browser is refreshed, the same information is displayed on the page.

## Search Page
- [x] The search page has a search input field.
- [x] As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors.
- [ ] You can use throttle/debounce but are not required to do so.
- [x] Search results are not shown when all of the text is deleted out of the search input box.
- [x] Invalid queries are handled and prior search results are not shown.
- [x] The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
- [x] The user is able to search for multiple words, such as “artificial intelligence.”
- [x] Search results on the search page allow the user to select “Currently Reading”, “Want to Read”, or “Read” to place the book in a certain shelf.
- [x] If a book is assigned to a shelf on the main page and that book also appears on the search page, the correct shelf should be selected for that book on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
- [x] When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

## Routing
- [x] Routing is implemented with React Router
- [x] The main page contains a link to the search page.
- [x] When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
- [x] The search page contains a link to the main page.
- [x] When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

## Code Functionality
- [x] Component state is passed down from parent components to child components.
- [x] The state variable is not modified directly - the useState hook is used to add to function component.
- [x] Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
- [x] Components in the application are built as functions rather than as classes.
- [x] The code runs without errors.
- [x] There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items, or state update warnings on unmounted components.
- [x] All code is functional and formatted properly.

## Additional Checks By Me
- [x] The default value for the control should always be the current shelf the book is in.
- [x] There are three shelves in the main page which are :- Currently Reading, Want to Read and Read

## Suggestions to Make Your Project Stand Out!
- [x] Consider adding a books "detail" page to display more information about any particular book
- [x] Consider adding sign-up and log-in functionality to allow users to save their bookshelves to their accounts
- [x] Consider adding drag-and-drop functionality to move books between shelves
- [ ] Consider adding a rating to your books

# Plan
## Steps
- Outline the steps needed to build the project
- Draw the application
    - What individual screens would look like
    - How the Components are connected to each other
- Write down the architecture
- Develop the app piece by piece
- Develop the app piece by piece

## Components
- App
- NavBar
- Search
- SearchBar
- SearchResults
- Main
- BooksShelves
- BooksShelf
- Book
- Select
- BookDetails
- AnchorLink
- NotFound
- Loader

# Tasks
- [ ] Use throttle/debounce.
- [x] Add inverse data flow.
- [x] Add navigation.
- [x] Add tilt effect.
- [x] Host The Project.
- [ ] ScreenCast the Project and upload it to youtube.
- [x] Spend some time working on HTML and CSS
- [x] Add hover effects
- [x] Use PropTypes
- [x] Fix the problem if the first `<Select />` option
- [x] Use Async/Await instead of promise chaining
- [x] Add EsLint
- [x] Add Prettier
- [x] Configure Prettier With EsLint
- [ ] Use TypeScript
- [x] Add Dark Mode
- [x] Make it responsive
- [x] Add Confirm deletion
- [x] Use BootStrap
- [x] Add custom scrollbar 
- [x] Test the website on different browsers
- [x] Fix the bug which is (when changing the user while on bookDetails)
- [ ] Update the configurations / tooling
- [ ] check prop-types
- [x] Use optimistic updates
- [x] the user already exists

# Submission Instructions - Project Submission Checklist
- [x] The project adheres the HTML style guidelines
- [x] The project adheres the CSS style guidelines
- [x] The project adheres the JavaScript style guidelines
- [x] The project adheres the Git style guidelines
- [x] I am confident all rubric items have been met and my project will pass as submitted.
- [x] Project builds correctly without errors and runs.
- [x] All required functionality exists and my project behaves as expected per the project's specifications.


# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).