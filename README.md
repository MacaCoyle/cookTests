# Cook Unity challenge

Install dependencies:
- npm init
- npm install cypress
- npm install @badeball/cypress-cucumber-preprocessor
- npm install @badeball/cypress-esbuild-preprocessor

Run tests with 
- npx cypress open 


Notes:
Api tests are running well. UI test sometimes does not run well due to A/B tests and some time issues and prompts (I didn't get it fixed in time and there are some things to improve). Also I've change the UI test, it's a login not a register in order to avoid creating test users in your production environment.
