export const UsersServiceName = 'usersService';
export const UsersService = function ($http) {

  this.login = (user) => {
    return $http.post('https://floating-wildwood-28200.herokuapp.com/userlist', user)
  };

  this.register = (user) => {
    return $http.post('https://floating-wildwood-28200.herokuapp.com/register', user)
  };

  this.logout = () => {
    return $http.post('https://floating-wildwood-28200.herokuapp.com/logout');
  };

  this.getCurrentUser = (currentUserToken) => {
    return $http.get('https://floating-wildwood-28200.herokuapp.com/profile', {
      headers: {'Authorization': currentUserToken}
    });
  };

};