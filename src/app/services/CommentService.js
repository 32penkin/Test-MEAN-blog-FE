export const CommentsServiceName = 'commentsService';
export const CommentsService = function ($http) {

  this.getComments = () => {
    return $http.get('https://powerful-brushlands-92814.herokuapp.com/commentlist');
  };

  this.getCommentsByPostId = (postID) => {
    return $http.get('https://powerful-brushlands-92814.herokuapp.com/commentlist/' + postID)
  };

  this.addCommentToPost = (commentatorName, commentCont, postID) => {
    let d = new Date();
    $http
      .post('https://powerful-brushlands-92814.herokuapp.com/commentlist', {
      name: commentatorName,
      content: commentCont,
      date: d.toDateString() + ' ' + d.toLocaleTimeString(),
      post_id: postID
    });
  };
};