import {renderEntireTree} from "./render";

export const state = {
    commentsTotal: 0,
    newUserName:'',
    newCommentText:'',
    commentItem: [
        {
            username: '',
            message: '',
            isShown: true
        }
    ],
    addCommentItem: function () {

        let newComment = {
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

    updateNewUserName:function (name:string){
        state.newUserName = name;
    },

    updateNewCommentText:function (text:string){
        state.newCommentText = text;

    },


}