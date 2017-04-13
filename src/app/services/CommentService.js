export const CommentsServiceName = 'commentsService';
export const CommentsService = function ($http) {

  this.getComments = () => {
    return $http.get('http://localhost:3000/commentlist');
  };

  this.getCommentsByPostId = (postID) => {
    return $http.get('http://localhost:3000/commentlist/' + postID)
  };

  this.addCommentToPost = (commentatorName, commentCont, postID) => {
    let d = new Date();
    $http
      .post('http://localhost:3000/commentlist', {
      name: commentatorName,
      content: commentCont,
      date: d.toDateString() + ' ' + d.toLocaleTimeString(),
      post_id: postID
    })
      .then(function (responce) {
        $http.get('http://localhost:3000/commentlist/' + postID);
      });
  };
};