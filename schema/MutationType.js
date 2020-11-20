import graphql from 'graphql';
import Game from '../models/Game.js';

import GameGroupType from './GameGroupType.js';
import GameType from './GameType.js';
import GameGroup from '../models/GameGroup.js';


const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;


const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //game
        addGame: {
            type: GameType,
            args: {
                name: {type: GraphQLString},
                author: {type: GraphQLString},
                image:{type: GraphQLString},
                description: {type: GraphQLString},
                gameGroupId: {type: GraphQLID}
            },
            resolve(parent, args){
                let game = new Game(args);
                return game.save();
            }
        },
        editGame: {
            type: GameType,
            args:{
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                author:{type: GraphQLString},
                image:{type: GraphQLString},
                description:{type: GraphQLString},
                gameGroupId: {type: GraphQLID}
            },
            resolve(parent, args){

                return Game.findByIdAndUpdate(args.id, args);
            }
        },
        deleteGame: {
            type: GameType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Game.findByIdAndRemove(args.id);
            }
        },
        //game group
        addGameGroup: {
            type: GameGroupType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                const gameGroup = new GameGroup(args);
                return gameGroup.save();
            }
        },
        editGameGroup: {
            type: GameGroupType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(parent, args){

                return GameGroup.findByIdAndUpdate(args.id, args);
            }
        },
        deleteGameGroup: {
            type: GameGroupType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return GameGroup.findByIdAndRemove(args.id);
            }
        },
    }
});

export default MutationType;