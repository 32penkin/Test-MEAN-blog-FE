export const UsersServiceName = 'usersService';
export const UsersService = function ($http) {

  this.login = (user) => {
    return $http.post('https://polar-chamber-14511.herokuapp.com/userlist', user)
  };

  this.register = (user) => {
    return $http.post('https://polar-chamber-14511.herokuapp.com/register', user)
  };

  this.logout = () => {
    return $http.post('https://polar-chamber-14511.herokuapp.com/logout');
  };

  this.getCurrentUser = (currentUserToken) => {
    return $http.get('https://polar-chamber-14511.herokuapp.com/profile', {
      headers: {'Authorization': currentUserToken}
    });
  };

};