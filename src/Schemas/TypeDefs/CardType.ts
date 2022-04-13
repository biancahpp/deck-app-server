import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const CardType = new GraphQLObjectType({
  name: "Card",
  fields: () => ({
    id: { type: GraphQLInt },
    number: { type: GraphQLString },
    name: { type: GraphQLString },
    cardType: { type: GraphQLString },
    monsterType: { type: GraphQLString },
    level: { type: GraphQLString },
    attack: { type: GraphQLString },
    defense: { type: GraphQLString },
    password: { type: GraphQLString },
    starCost: { type: GraphQLString },
  }),
});

export default CardType;
