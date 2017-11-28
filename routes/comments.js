module.exports = {
    getComments(req, res) {
        let postId = req.params.postId
        res.status(200).send(store.posts[postId].comments)
    }, 
    addComment(req, res) {
        let postId = req.params.postId
        let comment = req.body
        store.posts[postId].comments.push(comment)
    },
    updateComment(req, res) {
        let postId = req.params.postId
        let commentId = req.params.commentId
        let newComment = req.body
        store.posts[postId].comments[commentId] = newComment
    },
    removeComment(req, res) {
        let postId = req.params.postId
        let commentId = req.params.commentId
        store.posts[postId].comments.splice(commentId, 1)
    }  
  }