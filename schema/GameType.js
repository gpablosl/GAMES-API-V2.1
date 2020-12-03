import graphql from 'graphql';
import GameGroup from '../models/GameGroup.js';
import GameGroupType from './GameGroupType.js';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        author:{type: GraphQLString},
        image:{type: GraphQLString},
        description:{type: GraphQLString},
        filePath: {type: GraphQLString},
        GameGroup: {
            type: GameGroupType,
            resolve(parent, args){
                return GameGroup.findById(parent.gameGroupId);
            }
        }
    })
});

export default GameType;
