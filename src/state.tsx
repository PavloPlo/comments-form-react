import {renderEntireTree} from "./render";

export const state = {
    commentsTotal: 1,
    newUserName:'',
    newCommentText:'',
    commentItem: [
        {
            username: 'Initial Username',
            message: 'Initial Message',
            isShown: true
        }
    ],
    addCommentItem: function () {

        const newComment = {
            username: state.newUserName,
            message: state.newCommentText,
            isShown: true
        }
        state.commentItem.push(newComment);
        state.commentsTotal++;
        renderEntireTree(state);
        state.newUserName = '';
        state.newCommentText = '';
    },

    updateNewCommentText:function (text:string){
        state.newCommentText = text;
        renderEntireTree(state)
    },

    updateNewUserName:function (name:string){
        state.newUserName = name;
        renderEntireTree(state)
    },




}