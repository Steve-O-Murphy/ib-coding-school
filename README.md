# About

This is my implementation of the exercise posted here: https://www.youtube.com/watch?v=bNGzDA9LSAg&list=PL-XnT4KCow_-5IfZRZG5BBVPTEnMiqxIq&index=16. 

## Project Goal

Given a list of users, the application creates messages for each user. One user name is "Admin" and has a unique message "Would you like to see the status reports?" All other users receive "Thank you for logging in again!" as the message.

Instead of creating another console application I decided it would be fun to do a web application that includes some classes to represent users/admins and functionality to create greetings. 

If you happened upon this application while browsing the web, then I would appreciate your feedback on my implementation of users and admins in:
* GreetingBlockBase.ts
* GBAdmin.ts
* GBUser.ts

I haven't done OO for a while, and never in TypeScript so feedback and PRs  would be appreciated!

# Acknowledgements

Thank you, ILLAHI BUX JAGIRANI for the amazing exercises and learning videos you created!

# Some Instructions

This repo has a package.json file so be sure to install the dependencies. 

The project uses Snowpack as its build tool so create the app:

npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force

# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
