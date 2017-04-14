export const PostsServiceName = 'postsService';
export const PostsService = function ($http) {

  this.getPostsList = () => {
    return $http.get('https://powerful-brushlands-92814.herokuapp.com/bloglist');
  };

  this.getPostById = (id) => {
    return $http.get('https://powerful-brushlands-92814.herokuapp.com/bloglist/' + id);
  };

  this.addPost = (newName, newContent) => {
    let d = new Date();
    return $http
      .post('https://powerful-brushlands-92814.herokuapp.com/bloglist', {
        name: newName,
        content: newContent,
        date: d.toDateString() + ' ' + d.toLocaleTimeString()
      });
  };
};