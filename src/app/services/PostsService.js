// 'https://powerful-brushlands-92814.herokuapp.com/bloglist'
export const PostsServiceName = 'postsService';
export const PostsService = function ($http, $rootScope) {

  this.getPostsList = () => {
    return $http.get('https://floating-wildwood-28200.herokuapp.com/bloglist');
  };

  this.getPostById = (id) => {
    return $http.get('https://floating-wildwood-28200.herokuapp.com/bloglist/' + id);
  };

  this.addPost = (newName, newContent, user) => {
    let d = new Date();
    return $http
      .post('https://floating-wildwood-28200.herokuapp.com/bloglist', {
        name: newName,
        content: newContent,
        date: d.toDateString() + ' ' + d.toLocaleTimeString(),
        author: user.username
      });
  };
};