//dummy database

    const post1 = {
      id:1,
      title: 'post title 1',
      body: 'here is my body'}

      const post2 = {
        id:2,
        title: 'post title 2',
        body: 'here is my body 2'}

        const post3 = {
          id:3,
          title: 'post title 3',
          body: 'here is my body 3'}

     const allPosts = [post1, post2, post3]


module.exports = {
  posts: function(req, res){

    res.send(allPosts)

  },

  findById: function(req,res){
    const postId = req.param('postId')

    res.send(postId)
  }
}
