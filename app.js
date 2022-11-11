const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const fs = require('fs');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const parse = require('csv-parse/lib/sync');

const app = express()
  .use(cors())
  .use(json());

const schema = buildSchema(fs.readFileSync('schema-dogs.graphql', 'utf8'));
const characters = parse(fs.readFileSync('datasets/characters.csv', 'utf8'), { columns: true });
const species = parse(fs.readFileSync('datasets/species.csv', 'utf8'), { columns: true });
const allDogs = parse(fs.readFileSync('datasets/allDogDescriptions.csv', 'utf8'), { columns: true });

const root = {
  characters: (args) => {
    return {
      count: characters.length,
      characters: characters.slice(args.offset, args.offset + args.limit)
    };
  },
  character: (args) => {
    return characters.find((ch) => ch.name === args.name);
  },
  species: (args) => {
    return species.find((ch) => ch.name === args.name);
  },
};

/**
 * I need an object called stick
 * stick has one method
 * 1. getDogs
 * arguments are passed to getDogs
 * and it returns
 * count
 * and allDogs
 * 
 */
const stick = {
  getDogs: (args) => {
    return {
      count: allDogs.length,
      allDogs: allDogs.slice(args.offset, args.offset + args.limit)
    };
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: stick,
  graphiql: true,
}));

app.listen(4201, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('Server listening on port 4201');
});