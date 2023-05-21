# Leafy
Website to sell excess home grower's excess produce to local neighbors

#### Clone Repo
To begin, clone the repo via SSH or HTTPS via the terminal.

#### Check for required libraries
If Node.JS and yarn are already installed, double check in the terminal with these commands:
```bash
node -v
```
```bash
yarn -v
```
If they are not installed, follow the following instructions.

#### Install Node.js
First, follow this link and download the LTS version based on the OS being used *(recommended for most people)*:
*https://nodejs.org/en/download*

#### Install Yarn
*https://yarnpkg.com/getting-started/install*

#### Download the required libraries:
In ```/api``` run the following command:
```yarn add express cors mongoose bcryptjs jsonwebtoken dotenv cookie-parser image-downloader```

In ```/client``` run the following command:
```yarn add @headless/react @mui/material```

#### To run the program:
Navigate to the ```/api``` folder and run the following command to start the database/backend:
```nodemon index.js```

This will continue to run until it is stopped.

Navigate to the ```/client``` folder in a new terminal and run the following command to start the frontend:
```yarn dev```

This will continue to run until stopped.

#### Open Website:
To load up the website from the terminal running the frontend in the client folder, there are two options:
1. Copy and paste the link given where it says ```Local:``` into a browser
2. Press the letter ```o``` on the keyboard to automatically open the website in the browser