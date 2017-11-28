module.exports = {
    getPosts(req, res) {
        res.status(200).send(store.posts)
    },
    postPost(req, res) {
        let post = req.body
        store.posts.push(post)
    },
    putPost(req, res) {
        let id = req.params.postId
        store.posts[id] = req.body
    },
    deletePost(req, res) {
        let id = req.params.postId
        store.posts.splice(id, 1)
    }
}