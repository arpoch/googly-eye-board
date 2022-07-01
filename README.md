# Googly Eye Drawing Board :eyes:

A React.js drawing board with the exciting addition of a googly eye to make it even more interesting and enjoyable.
Play around and unleash your inner artist:art:!

![octopus](/images/googly-eyed-octopus.PNG#gh-light-mode-only)

## Project Structure 

This project follows Model-ViewModel-View architecture and the file
structure used is [Group by file type](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type).

The `src` folder is the main source code directory. With the following directories:

* <b>components</b>: Contain all the React components(Views)
* <b>view-model</b>: Carries out the heavy-lifting
* <b>binder</b>: Component state management using React `rdeucer` and `useContext`

## Getting Started

1. Clone the project
```
git clone https://github.com/arpoch/googly-eye-board.git .
```

2. Change directory to project folder
```
cd googly-eye-board
```

3. Install dependencies
```
npm install
```

4. Run
```
npm start
```

##Testing 

**React Testing Library** is used to provide
virtual dom.

**Jest** is used as the test runner.

The unit tests and snapshot testing can be found under 
`__test__` directory.

## Contributions

Feel free to open an issue related to the documentation or the code. Please don't remove any comments nor change the formatting of the code.

It was advised to examine the test cases before contributing and to [avoid testing the implementation details](https://kentcdodds.com/blog/testing-implementation-details)