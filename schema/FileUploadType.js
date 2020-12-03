import graphql from 'graphql';
import FileUpload from '../models/FileUpload.js';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const FileUploadType = new GraphQLObjectType({
    name: 'FileUpload',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        path: {type: GraphQLString}
    })
});

export default FileUploadType;