(function(){
	'use strict';
	var aaApp=angular.module('aaApp',[]);
	aaApp.controller('firstCtrl',['$scope','$interval',function($scope,$interval){
		$scope.appName="AngularALL";
		$scope.$watch('showConModal',function(){
			if($scope.showConModal){
				$scope.openMsgSend=false;
			}
		});
		$scope.temp=[];
		for(var i=0;i<20;i++){
				$scope.temp[i]=i;
		}
		
	}]);
	
	function loadPageData(){
		var pageData={};
		pageData=[{'image':'one','id':'1','show':true},{'image':'two','id':'2','show':false},{'image':'three','id':'3','show':false},{'image':'four','id':'4','show':false}];
		return pageData;
	}
})();	
	