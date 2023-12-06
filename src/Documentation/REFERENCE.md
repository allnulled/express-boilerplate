

----


 - **@name**:  setupInitialization
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Initializes an express app on `api.app`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupConfigurations
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Initializes `process.env` variables from source and from `src/Configurations/.env`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupUtilities
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Sets up all the utilities from `src/Utilities`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupQueries
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Sets up all the queries from `src/Queries`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupModels
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Sets up all the models from `src/Models`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupDatabaseConnection
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Creates `api.Database` with:
    - api.Database.Connection
    - api.Database.Schema
    - api.Database.CompactedSchema
 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupApplication
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Sets up the application, applying cors, body-parser and a static files middleware on "/ui" url path.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupMiddlewares
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Creates, injects, sorts and sets the controllers to the application.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  setupControllers
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Creates, injects, sorts and sets the controllers to the application.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  deployApplication
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Deploys the express application.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  main
 - **@type**:  Function
 - **@parameter**:  `api` 
 - **@description**:  Defines the whole setup.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js

----


 - **@name**:  module.exports
 - **@type**:  Promise
 - **@description**:  Exports a call to `main()`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/main.js