module.exports = {
  posts: function(req, res){

    const post1 = {
      id:1,
      title: 'post title 1',
      body: 'here is my body'}

      const post2 = {
        id:2,
        title: 'post title 2',
        body: 'here is my body 2'}


    res.send([post1, post2])

  }
}
