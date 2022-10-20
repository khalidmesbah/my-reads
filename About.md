# The Stack
- HTML5
- CSS3
- JavaScript
- TypeScript
- React
- React Router
- React tilt
- Redux
- Redux Toolkit
- Express
- Node
- JSX

# Project Overview
In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

# The Rubric
## Application Setup
- [x] The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.
- [ ] An updated README that describes the project and has instructions for installing and launching the project is included.
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
- [ ] The user is able to search for multiple words, such as “artificial intelligence.”
- [x] Search results on the search page allow the user to select “Currently Reading”, “Want to Read”, or “Read” to place the book in a certain shelf.
- [ ] If a book is assigned to a shelf on the main page and that book also appears on the search page, the correct shelf should be selected for that book on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
- [ ] When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

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
- [ ] Consider adding sign-up and log-in functionality to allow users to save their bookshelves to their accounts
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
- develop the app piece by piece

## Components
- Header
- BooksShelf
- Book
- BookDetails
- SearchBar

## Pages
- Main
- Search

### Main Page
- Header
- BookShelf
  - Book
    - BookDetails
- Link To Search Page
### Search Page
- SearchBar 
  - Book
    - BookDetails
- Link To Main Page

# Tasks
- [ ] Use throttle/debounce.
- [ ] Add inverse data flow.
- [ ] Add navigation.
- [x] Add tilt effect.
- [ ] Host The Project.
- [ ] ScreenCast the Project and upload it to youtube.
- [x] Spend some time working on HTML and CSS
- [x] Add hover effects
- [ ] Add Animation on scroll
- [ ] Add Testing
- [x] Use PropTypes
- [x] Fix the problem if the first `<Select />` option
- [x] Use Async/Await instead of promise chaining
- [ ] Add EsLint
- [ ] Add Prettier
- [ ] Use TypeScript
- [ ] Add Dark Mode
- [ ] Make it responsive
- [x] Add Confirm deletion
- [x] Use BootStrap
- [ ] Add Scroll in the bookshleves in the main page  

# Submission Instructions - Project Submission Checklist
- [x] The project adheres the HTML style guidelines
- [x] The project adheres the CSS style guidelines
- [x] The project adheres the JavaScript style guidelines
- [x] The project adheres the Git style guidelines
- [x] I am confident all rubric items have been met and my project will pass as submitted.
- [x] Project builds correctly without errors and runs.
- [x] All required functionality exists and my project behaves as expected per the project's specifications.

