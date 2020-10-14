# nlw3-happy
Next Level Week #3 back-end services app in NodeJS.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:33333](http://localhost:3333) to view it in the browser.<br />
Available routes:<br />
* GET: /orphanages<br />
* GET: /orphanages/:id<br />
* POST: /orphanages<br />

### `yarn typeorm migration:run`

Runs the migrations to create all tables.

### `yarn typeorm migration:revert`

Runs the migrations to drop the tables one by one.
