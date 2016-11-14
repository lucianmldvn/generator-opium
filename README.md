# Opium generator

> A simple [Yeoman](http://yeoman.io) generator for creating APIs using Node and Express.


##Features

* Provides a directory structure similar to [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)
* Includes Yeoman sub-generators for api routes, application components and helper functions
* Testable: each sub-generator also generates test skeletons


## Usage

Assuming you already have [Node](https://nodejs.org) installed, run:
```
npm install -g yo mocha supervisor jshint
```

Install **Opium** generator:
```
npm install -g generator-opium
```

Next, to create a project:
```
mkdir FooBar
cd FooBar
yo opium
```
The generator will then ask you to provide the application name (by default it will take the folder name, in this case ```FooBar```) and it will create some skeleton files as well as installing dependencies.

After this you can run ```npm start```, which will automatically run linting and tests before starting the server on  ```http://localhost:9000```. The server will automatically restart itself when you modify and save a file.


## Folder structure

For the ```FooBar``` project:

    FooBar
    ├── api
    │   └── thing
    │       ├── index.js ............... 'thing' specific routes (like '/thing/:id')
    │       └── thing.controller.js .... 'thing' specific methods (like 'ThingController.GetById`)
    ├── components
    │   └── something
    │       └── index.js ............... main logic of the 'something' component
    ├── config
    │   ├── environment
    │   │   ├── development.js ......... development specific configuration
    │   │   └── production.js .......... production specific configuration
    │   ├── cors.js .................... Express middleware for enabling CORS
    │   └── express.js ................. Express configuration
    ├── lib
    │   └── helper.js .................. main logic of the 'helper' helper function
    ├── node_modules
    ├── public ......................... static files served by the server (if any)
    ├── test ........................... unit tests (follows the application folder structure)
    ├── .gitignore
    ├── .jshintignore
    ├── .stylishcolors
    ├── .package.json
    ├── foo-bar.js ..................... main application file
    └── routes.js ...................... main application routes


## Sub-generators

**Opium** provides a set of sub-generators to create application parts. Each sub-generator will:

* Create one or more skeleton files for the application part type (api route, application component, helper function)
* Create a skeleton unit test in ```/test```
* Update ```routes.js``` with the new route (```apiroute``` sub-generator)

There are three sub-generators: 
* **apiroute** (usage: ```yo opium:apiroute thing```)
* **component** (usage: ```yo opium:component something```)
* **lib** (usage: ```yo opium:lib helper```)

The name parameter passed in (e.g. ```thing```) will be used for route, folder and/or file names. 

> Note: if you pass in something like ```my-awesome-stuff```, ```myAwesomeStuff``` or ```"my awesome stuff"``` the name will be normalized: using *kebab-case* for the routes, files and folders and *CamelCase* for the function names ([Special case styles](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)).


## ```npm``` scripts

* ```lint```: runs linting using the configuration from ```.jshintrc``` file. Usage: ```npm run lint```
* ```start```: starts the server using [node-supervisor](https://github.com/petruisfan/node-supervisor) (it automatically runs ```lint``` and ```test``` before). Usage: ```npm start```
* ```test```: runs the unit tests in the ```/test``` folder using [mocha](http://mochajs.org) (it automatically runs ```lint``` before). Usage: ```npm test```

## License

[MIT License](https://github.com/lucianmoldovan/generator-opium/blob/master/LICENSE)