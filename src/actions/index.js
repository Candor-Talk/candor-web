import actionStrings from './actionStrings.json';

export const getDialogue = dialogueID => ({
    type: actionStrings.dialogueActions.get,
    id: dialogueID
});

export const getPosts = dialogueID => ({
    type: actionStrings.postActions.getAll,
    id: dialogueID
});