import db from '../config files/FirebaseConfig.js';
import {useState,useEffect} from 'react';
import * as baseService from './BaseService.js';
import * as StringLibrary from '../Libraries/StringLibrary.json';

const errorStrings = StringLibrary.Errors;

  function GetDialogue(dialogueID) {
    const [dialogue,setDialogue] = useState(null);
    const fetchDialogue = async() => {
        await db.collection(baseService.dialogueCollection).doc(dialogueID)
        .get()
        .then(docSnapshot => {
            let data = docSnapshot.data();
            setDialogue(data);
        })
        .catch(function(error) {
            console.error(errorStrings.documentFetchError, error);
        });
    }

    useEffect(() => {
        fetchDialogue();
    }, [])

    return dialogue
  }
  
export default GetDialogue;
