// 'https://powerful-brushlands-92814.herokuapp.com/commentlist'
export const CommentsServiceName = 'commentsService';
export const CommentsService = function ($http, $rootScope) {

  this.getComments = () => {
    return $http.get('https://floating-wildwood-28200.herokuapp.com/commentlist');
  };

  this.getCommentsByPostId = (postID) => {
    return $http.get('https://floating-wildwood-28200.herokuapp.com/commentlist/' + postID)
  };

  this.addCommentToPost = (commentCont, postID, user) => {
    let d = new Date();
    $http
      .post('https://floating-wildwood-28200.herokuapp.com/commentlist', {
        content: commentCont,
        date: d.toDateString() + ' ' + d.toLocaleTimeString(),
        post_id: postID,
        author: user.username
      });
  };
};