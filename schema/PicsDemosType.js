import graphql from 'graphql';
import PicsDemos from '../models/PicsDemos.js';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const PicsDemosType = new GraphQLObjectType({
    name: 'PicsDemos',
    fields: ()=>({
        id: {type: GraphQLID},
        picpath: {type: GraphQLString}
    })
});

export default PicsDemosType;