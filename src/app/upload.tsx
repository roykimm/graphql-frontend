import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useUploadFileMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const FileUpload : React.FC = () => {

    const [ uploadFile ] = useUploadFileMutation();

    const handleFileChange = (e :any) => {
        const file = e.target.files[0]
        console.log(file)
        if(!file) return 
        uploadFile({ variables : { file }})
    }

    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={handleFileChange} />
        </div>
    )
}