# README
Example of the application login and signup using JWT Auth:

https://github.com/moiseyalaev/moiseys-meals/assets/22864591/6f41188f-c591-4d01-9192-53ca4bc1dc7e

Example of the application's chatbot answering meal prep questions by calling openAPI

https://github.com/moiseyalaev/moiseys-meals/assets/22864591/9c06d841-bba4-491a-9039-e4166a3d015a

App not hosted online due to the cost of tokens to use openAPI

* Future feature
  A grocery list and calendar UI that will automatically fill as the ai helps the user decided on a meal

* Ruby, Rails, and React version
  3.1, 7.0, 18. 2

* System dependencies
  All the dependencies are listed in gemfile. The only external service required is OpenAPI to power the ai bot

* Database
  PostgreSQL was set up when the first iteration of the application had prepopulated meals, directions, and ingredients from which the bot queried.
  This approach was tedious and not easily scalable without a paid API.

* Services (job queues, cache servers, search engines, etc.)
  Ai chat powered by openAI's "OpenAPI". Initially, I considered training my own agent and tuning it for food prep-related questions but this required
  a lot of data and computational power. Nonetheless, this is still possible especially if you can seed a DB with prompts and answers using another API
  or get a large json dataset to read into the PSQL db. An easier proof of concept invloved utilizing openAPI and adjusting a pretrained model via query params.
  
* Deployment instructions
  1. Copy this repo on your local machine
  2. Set up devise with your own auth token
  3. Set up a paid OpenAPI account (I suggest you set a limit on usage per month, to keep costs low) and save the auth token in secret file
  4. Navigate to this project and run `rails start`
  5. Navigate into react_frontend and run `npm start`
  6. Sign up for an account, then log in (if not already), and enjoy some of moisey's meals!
