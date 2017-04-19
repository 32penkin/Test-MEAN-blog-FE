export const AppCtrlName = 'appCtrl';
export const AppCtrl = ($scope) => {
  $scope.$on('LOAD',function(){$scope.loading = true});
  $scope.$on('UNLOAD',function(){$scope.loading = false});
};