export const PostsServiceName = 'postsService';
export const PostsService = function ($http, $rootScope) {

  this.getPostsList = () => {
    return $http.get('https://fathomless-mesa-71587.herokuapp.com/bloglist');
  };

  this.getPostById = (id) => {
    return $http.get('https://fathomless-mesa-71587.herokuapp.com/bloglist/' + id);
  };

  this.addPost = (newName, newContent) => {
    let d = new Date();
    return $http
      .post('https://fathomless-mesa-71587.herokuapp.com/bloglist', {
        name: newName,
        content: newContent,
        date: d.toDateString() + ' ' + d.toLocaleTimeString(),
        author: $rootScope.currentUser.username
      });
  };
};