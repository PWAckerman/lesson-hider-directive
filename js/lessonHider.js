angular.module('directivePractice').directive('lessonHider', function(){
 return {
   templateUrl: 'lessonHider.html',
   restrict: 'AE',
   scope: {
      lesson: '=',
      dayAlert: '&',
      removeLesson: '&'
   },
   controller: function($scope, lessonService){
     $scope.getSchedule = lessonService.getSchedule();
   },
   link: function(s, e, a){
     s.toggleChecked = function(){
      if(s.isChecked === true){
        e.css('text-decoration', 'none')
        // scope.isChecked = false;
      } else {
        // scope.isChecked = true;
        e.css('text-decoration', 'line-through');
      }
    }
     s.getSchedule.then(function(schedule){
       s.schedule = schedule.data;
       var formatData = function(arr, lesson){
         for (var i = 0; i < arr.length; i++) {
           if(arr[i].lesson === lesson) {
             s.lessonDay = arr[i].weekday
             e.css('text-decoration', 'line-through')
             s.isChecked = false;
             break;
           } else {
             s.isChecked = true;
           }
         };
       };
       formatData(s.schedule, s.lesson);
       });
   }
 }
});
