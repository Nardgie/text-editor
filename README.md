# Text-Editor

## Description

Text-Editor is a single-page application that functions as a Progressive Web Application (PWA), designed to allow developers to create and store notes or code snippets with or without an internet connection. This project leverages various data persistence techniques, including IndexedDB, to ensure that the users can reliably retrieve their data at any time. This application not only meets modern web standards but also provides redundancy in data storage solutions, ensuring functionality across a wide range of browsers and conditions. Building this application involved using the `idb` package, a popular wrapper around the IndexedDB API, which helped in managing the app's offline data storage effectively.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

No installation explicily required to run this app. See Usage for link to application

## Usage

Text-Editor is designed to be intuitive and easy to use:

1. **Starting the Application**: vist [text-editor-site](https://text-editor-3f3n.onrender.com/)

2. **Using the Editor**: Any text or code snippets entered into the editor will be automatically saved to IndexedDB when you click off the DOM window.

3. **Offline Functionality**: The service worker bundled with the application provides offline capabilities, caching all necessary assets and data.

4. **Installation on Desktop**: Click on the 'Install' button within the application to download and install the web application as an icon on your desktop.



## Credits

This project was developed by me, Nardgelen Jean Francois with starter code from UCF Coding Bootcamps

Service-worker provided by Google Inc.

This project utilizes the following open source packages:

- [idb](https://www.npmjs.com/package/idb) - A lightweight wrapper around the IndexedDB API.

- [Webpack](https://webpack.js.org/) - For bundling JavaScript files.

- [Workbox](https://developers.google.com/web/tools/workbox) - For service worker generation and management.


## License

No license to show for this project.

_________________________________________________


## Features

- **PWA Functionality**: The text editor can be installed as a desktop app and is fully functional offline.

- **Data Persistence**: Utilizes IndexedDB for storing and retrieving written content, ensuring data is not lost even when the browser is closed.

- **Modern JavaScript Compatibility**: Utilizes Babel with Webpack to ensure next-gen JavaScript works seamlessly across all browsers.


## How to Contribute

Contributions are welcome! To contribute:

1. Fork the repository.





