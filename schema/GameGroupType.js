import graphql from 'graphql';
import GameType from './GameType.js';
import Game from '../models/Game.js';

const {GraphQLID, GraphQLString, GraphQLObjectType, GraphQLList} = graphql;


const GameGroupType = new GraphQLObjectType({
    name: 'GameGroup',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        
        games: {
            type: new GraphQLList(GameType),
            resolve(parent, args){
                return Game.find({gameGroupId: parent.id});
            }
        }
    })
});

export default GameGroupType;