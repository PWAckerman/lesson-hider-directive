angular.module('directivePractice').controller('lessonCtrl', function($scope){
    $scope.lessons = ['Services','Routing','Directives','Review','Firebase','No server project','Node','Express','Mongo'];
    $scope.announceDay = function(lesson, day){
      if(!day){
        alert(lesson + ' is not an active lesson.');
      } else {
        alert(lesson + ' is active on ' + day + '.');
      }
    }
    $scope.logChange = function(){
      console.log('Changed!');
    }
})
