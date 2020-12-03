import graphql from 'graphql';

import Game from '../models/Game.js';
import GameGroup from '../models/GameGroup.js';

import GameGroupType from './GameGroupType.js';
import GameType from './GameType.js';

import FileUpload from '../models/FileUpload.js';
import FileUploadType from './FileUploadType.js';

const {GraphQLID, GraphQLObjectType, GraphQLList} = graphql;


const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        //Obtener un juego por id
        game: {
            type: GameType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Game.findById(args.id);
            }
        },
        //Obrtener la lista de juegos
        games: {
            type: new GraphQLList(GameType),
            resolve(parent, args){
                return Game.find();
            }
        },
        getGamesByGroupId:{
            type: new GraphQLList(GameType),
            args: {groupId: {type: GraphQLID}},
            resolve(parent, args){
                return Game.find({gameGroupId: args.groupId});
            }
        },
        gameGroup: {
            type: GameGroupType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return GameGroup.findById(args.id);
            }
        },
        gameGroups: {
            type: new GraphQLList(GameGroupType),
            resolve(parent, args){
                return GameGroup.find();
            }
        },
        filesuploads: {
            type: new GraphQLList(FileUploadType),
            resolve(parent, args){
                return FileUpload.find();
            }
        }
    }   
});

export default RootQueryType;