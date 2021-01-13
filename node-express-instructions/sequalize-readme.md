# Setup for Sequelize

## Setup part 1 - getting the sequelize-cli tool

You only have to do this once on a new computer.

```text
npm install -g sequelize-cli
```

## Setup part 2 - starting a new node project

Create a new folder and add an index.js and .gitignore and initialize the repository

```text
mkdir userapp
cd userapp
npm init -y
touch index.js
echo "node_modules" >> .gitignore
```

Add/save dependencies \(sequelize needs pg for Postgres\)

```text
npm install pg sequelize
```

Initialize a sequelize project

```text
sequelize init
```

## Setup part 3 - config.json, models and migrations:

In the text editor we should now see a bunch of new folders. We now have config, migrations and models. This was created for us when we ran `sequelize init`.

Open up the config.json file. This file contains information about the database we are using as well as how to connect.

Let's change the config.json so it looks like this.

**config/config.json**

```javascript
{
  "development": {
    "database": "userapp_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "userapp_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "userapp_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

* If the dialects defaults to mySql, change them to postgres
* change the database names
* Delete the username and password for your Postgres server since you did not create one

### Create a database inside of Postgres

The sequelize CLI has an equivalent command to `createdb`. You can use either, they do the same thing!

```text
sequelize db:create userapp_development
```

### Create a model and a matching migration

Generating the model also generates a corresponding migration. You only need to do this once for your model.

```bash
sequelize model:create --name user --attributes firstName:string,lastName:string,age:integer,email:string
```

## Running the migration

To run the migration, use the following command.

```text
sequelize db:migrate
```

If you need to undo the last migration, this command will undo the last migration that was applied to the database.

```text
sequelize db:migrate:undo
```

Use the  `psql` shell to verify that your database and table was created:

```bash
psql
\l
\c userapp_development
\dt 

```