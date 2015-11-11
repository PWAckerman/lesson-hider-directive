angular.module('directivePractice').controller('lessonCtrl', function($scope){
    $scope.lessons = ['Services','Routing','Directives','Review','Firebase','No server project','Node','Express','Mongo'];
    $scope.announceDay = function(lesson, day){
      if(!day){
        alert(lesson + ' is not an active lesson.');
      } else {
        alert(lesson + ' is active on ' + day + '.');
      }
    }
    $scope.removeLesson = function(lesson){
      for(var i = 0; i < $scope.lessons.length; i++){
        if(lesson === $scope.lessons[i]){
          $scope.lessons.splice(i, 1);
          break;
        }
      }
    }
    // $scope.logChange = function(){
    //   console.log('Changed!');
    // }
})
