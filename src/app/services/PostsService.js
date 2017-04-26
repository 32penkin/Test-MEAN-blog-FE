export const PostsServiceName = 'postsService';
export const PostsService = function ($http, $rootScope) {

  this.getPostsList = () => {
    return $http.get('https://polar-chamber-14511.herokuapp.com/bloglist');
  };

  this.getPostById = (id) => {
    return $http.get('https://polar-chamber-14511.herokuapp.com/bloglist/' + id);
  };

  this.addPost = (newName, newContent, user) => {
    let d = new Date();
    return $http
      .post('https://polar-chamber-14511.herokuapp.com/bloglist', {
        name: newName,
        content: newContent,
        date: d.toDateString() + ' ' + d.toLocaleTimeString(),
        author: user.username
      });
  };
};