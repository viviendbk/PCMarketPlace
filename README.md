# PcMarketBuilder Quick Start Guide

This guide provides instructions on how to get both the frontend and backend of PcMarketBuilder up and running on your local development environment.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js and npm (https://nodejs.org/en/download/)
- Angular CLI (https://cli.angular.io/)

## Backend Setup

Follow these steps to start the backend server:

1. Open your terminal.
2. Change directory to your backend folder: `cd path/to/back-end`
3. Start the backend server: `node server.js`

Make sure there are no errors in the console and that the server is listening on the designated port.

## Frontend Setup

To get the frontend running, execute these commands in a new terminal:

1. Navigate to your frontend directory: `cd path/to/front-end`
2. Install dependencies: `npm install`
3. Serve the application on a local server: `ng serve`

By default, the Angular application will be available at `http://localhost:4200/`.

## Notes

- The backend server (`node server.js`) should be active before starting the frontend (`ng serve`).
- If you encounter any problems with starting the backend, check that you're in the right directory and have installed all required npm packages.
- For the frontend, if `ng serve` fails, confirm that Angular CLI is installed globally and all npm packages specific to the project are installed.

Enjoy PcMarketBuilder!






