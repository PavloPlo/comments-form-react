export const state = {
    commentsTotal: 0,
    commentItem: [
        {
            username: 'First user',
            message: 'It is my first message from the state',
            isShown: true
        }
    ],
    addItem: function () {
        let newComment = {
            username: 'some name',
            message: 'some text',
            isShown: true
        }
        this.commentItem.push(newComment);
    }
}