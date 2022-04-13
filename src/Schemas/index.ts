import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import cardData from '../../mock-data.json';
import CardType from './TypeDefs/CardType';

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllCards: {
      type: new GraphQLList(CardType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return cardData;
      },
    },
  },
});

export const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: CardType,
      args: {
        number: { type: GraphQLString },
        name: { type: GraphQLString },
        cardType: { type: GraphQLString },
        monsterType: { type: GraphQLString },
        level: { type: GraphQLString },
        attack: { type: GraphQLString },
        defense: { type: GraphQLString },
        password: { type: GraphQLString },
        starCost: { type: GraphQLString },
      },
      resolve(parent, args) {
        cardData.push({
          id: cardData.length + 1,
          name: args.name,
          number: args.number,
          cardType: args.cardType,
          monsterType: args.monsterType,
          level: args.level,
          attack: args.attack,
          defense: args.defense,
          password: args.password,
          starCost: args.starCost,
        });
        return args;
      },
    },
  },
});