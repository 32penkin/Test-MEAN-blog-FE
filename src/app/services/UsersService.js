export const UsersServiceName = 'usersService';
export const UsersService = function ($http) {

  this.login = (user) => {
    return $http.post('https://fathomless-mesa-71587.herokuapp.com/userlist', user)
  };

  this.register = (user) => {
    return $http.post('https://fathomless-mesa-71587.herokuapp.com/register', user)
  };

  this.logout = () => {
    return $http.post('https://fathomless-mesa-71587.herokuapp.com/logout');
  }

};