angular.module('directivePractice').directive('lessonHider', function(){
 return {
   templateUrl: 'lessonHider.html',
   restrict: 'AE',
   scope: {
      lesson: '=',
      dayAlert: '&'
   },
   controller: function($scope, lessonService){
     $scope.getSchedule = lessonService.getSchedule();
   },
   link: function(s, e, a){
     s.getSchedule.then(function(response){
       s.schedule = response.data;
       s.schedule.forEach(function(scheduleDay){
         s.isChecked = false;
         if(scheduleDay.lesson === s.lesson){
           s.lessonDay = scheduleDay.weekday;
           s.isChecked = true;
           e.css('text-decoration', 'line-through');
         }
       })
     });
   }
 }
});
