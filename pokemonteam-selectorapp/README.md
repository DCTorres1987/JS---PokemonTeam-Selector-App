pokemonteam-selector => where git repository is initialized
    README.md
    pokemonteam-selector -api => use rails generator to create dir
    pokemonteam-selector -trainer
        index.html => the single page of the app, will load all js that interacts with api
        src 
            index.js => top-level js file (where the js starts running)
            class1.js
            class2.js
            class3.js

The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.


AJAX Request
1. get /pokemons return associated categories
2. delete (release) from team pokemon/:id
3. create /pokemon