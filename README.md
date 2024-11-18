# Hostel App

## Overview
This project requires two steps to run the development environment. The first step is to run the client-side application, and the second is to run the server-side application. 

## Prerequisites
Before running the application, ensure you have installed all dependencies for both the client and server.

### Install Dependencies

1. **Client-side dependencies**:
   - Navigate to the root folder of the project:
     ```bash
     cd /path/to/project
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```

2. **Server-side dependencies**:
   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```

## Running the Application

1. **Start the client-side application**:
   - In the root folder, run the following command to start the client-side application:
     ```bash
     npm run dev
     ```

2. **Start the server-side application**:
   - In the `server` folder, run the following command to start the server:
     ```bash
     nodemon index.js
     ```

## Notes
- Ensure that `nodemon` is installed globally or is listed in your server dependencies. If it's not installed globally, you can install it using:
  ```bash
  npm install -g nodemon
