export const PostsServiceName = 'postsService';
export const PostsService = function ($http) {

  this.getPostsList = () => {
    return $http.get('http://localhost:3000/bloglist');
  };

  this.getPostById = (id) => {
    return $http.get('http://localhost:3000/bloglist/' + id);
  };

  this.addPost = (newName, newContent) => {
    let d = new Date();
    return $http
      .post('http://localhost:3000/bloglist', {
        name: newName,
        content: newContent,
        date: d.toDateString() + ' ' + d.toLocaleTimeString()
      });
  };
};