# Sample Angular Application

## Overview
This is how I typically set up an Angular project.  There are several important considerations that influence how the Angular application get's architected so before I dive into the architecture, lets look at some of those considerations.

### Deployment
How you deploy the application is often an afterthought, but I prefer to think of it up-front.  It's very common to have different options / configuration for deployment vs. local development.  Some of those are things like:
- Backend URL
- Debug / log settings
- UI / layout options
- etc..

To allow different environments to have different settings, Angular makes use of environment files (which I put in the `environments` folder).  These files have settings that control application behavior and can be used throughout the application in services, components, modules, and even directives.

> environment.ts
```js
{
    "someValue": true
}
```

> environment.production.ts
```js
{
    "someValue": false
}
```

In this example, the `production` environment file has a different value for `someValue`, allowing us the ability to change behavior of the system based on where we're deploying, without having to change code files directly.

These things are managed in the `angular.json` file, where different "configurations" are defined.

```js
"configurations": {
    "production": {
        "buildOptimizer": false,
        "optimization": true,
        "vendorChunk": true,
        "extractLicenses": false,
        "sourceMap": false,
        "namedChunks": true,
        "budgets": [
        {
            "type": "initial",
            "maximumWarning": "500kb",
            "maximumError": "1mb"
        },
        {
            "type": "anyComponentStyle",
            "maximumWarning": "2kb",
            "maximumError": "4kb"
        }
        ],
        "fileReplacements": [
            {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.production.ts"
            }
        ],
        "outputHashing": "all"
    },
    "development": {
        "buildOptimizer": false,
        "optimization": false,
        "vendorChunk": true,
        "extractLicenses": false,
        "sourceMap": true,
        "namedChunks": true
    }
}
```

In the above example, there are two "configurations": `development` and `production`.  When you run angular using `ng serve`, that is mapped to the "serve" angular command defined in the `angular.json` file which uses the primary environment.  When you switch to a production configuration however, it replaces the normal `environment.ts` file with an `environment.production.ts` file (but the Angular code is not aware of this change).  

> NOTE: The default configuration for the `build` command is set to `production` and the default configuration for the `serve` command is development.

In addition, there are node commands that can be used to simplify complex `ng` commands in your `package.json` file.

Doing `npm start` is equivalent to `ng serve`.  While that isn't that useful, it can be useful for more complex things like if you want to deploy a specific "environment" configuration file.

You can add additional commands in the `package.json` file:

```js
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
}
```

For example, a new name / value pair can be added for production:

```js
"prod": "ng build --configuration production --base-url http://mysite.com"
```

This command can be run from the terminal as:
> npm prod


### Organization
The death of many an Angular project is in how files are organized.  Angular allows for many sub-folders and gives some guidance but it is in large part up to the developer to be responsible.  Modules are the highest level grouping of things in Angular and there are two types of modules:
- Standard
- Lazy

The decision for which depends on many factors (such as budgets configured in the `angular.json`, number of developers working on the project, and the nature of the application itself).

For example, in a large application it is possible that certain aspects of the system will never get touched by a user or if they are, they are touched in-frequently.  From a performance perspective, it might not make sense to try to load the JavaScript for ALL of the system's features when the page first loads.  To deal with this, a "lazy-loaded" feature module can be used to defer loading of content until it is necessary.

Other modules are used so frequently that it makes sense to load them initially.

This project has the following breakdown:

- app <-- Module (Primary)
  - shared <-- Module
    - components <-- Folder
    - services <-- Folder
  - prime <-- Module
  - content <-- Folder
    - company-services <-- Lazy-loaded Feature (with routes)
    - call-to-action <-- Lazy-loaded Feature (with routes)

This structure defines three primary modules (app, company-services, and call-to-action), with two modules being lazy-loaded features.

#### App Module
Contains the base application setup.  Ideally we keep "global" type things here, but we should minimize anything that is truly "global".  App component, index, primary routing, and module management happen here.

#### Shared Module
Re-usable components, services, directives and things that get exported for use within the other modules go here.  This is useful to ensure maximum re-use of components in Angular.  It's considered a code-smell to have feature modules that depend on each-other.  Shared functionality instead goes in the shared module.

#### Prime Module
Only used for prime components.  This module exports the prime components used by the `shared`, `app`, `company-services`, and `call-to-action` modules.  This is considered a best-practice for 3rd party component libraries in particular.

#### Company-Services Module
A lazy-loaded feature module with it's own routing.  ONLY components and types that are specific to company services (ex: about us, hours, services, etc..)

#### Call-to-Action Module
A lazy-loaded feature module with it's own routing.  ONLY components and types that are specific to call to action(s) (ex: contact form, request quote, login, etc..)

### Module Notes
A module in Angular is like a namespace in C#.  It's a logical grouping of things but also has some security / access behaviors to it.  It's like a higher-level scope.

Things declared within a module MUST be exported if they are to be used in other modules.  Things that need to be used within a module that aren't declared in that module MUST be imported from elsewhere.

With that in mind several rules appear with the structure above.

- The shared module should MOSTLY `declare`, and `export` it's components
- The lazy-loaded modules should **NOT** `export` anything
- The lazy-loaded modules **SHOULD** `import` from `shared` and `prime`
- The prime module should NOT DECLARE any components of it's own, but should IMPORT components from the npm package and SHOULD export MANY things for use in other modules