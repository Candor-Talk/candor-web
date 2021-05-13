import db from '../config files/FirebaseConfig.js';
import {useState,useEffect} from 'react';
import * as BaseService from './BaseService.js';
import * as StringLibrary from '../Libraries/StringLibrary.json';

const errorStrings = StringLibrary.Errors;

function GetPosts(dialogueID) {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async() => {
        await db.collection(BaseService.postCollection)
        .where(BaseService.postDialogueIDField, BaseService.isEqualToOperation, dialogueID)
        .get()
        .then(querySnapshot => {
            const dataList = querySnapshot.docs.map(doc => doc.data());
            setPosts(dataList);
        })
        .catch(function(error) {
            console.error(errorStrings.documentFetchError, error);
        }); 
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return posts
}


export default GetPosts;