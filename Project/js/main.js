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
		$scope.alDirectives=loadNgDirectivies();
		
	}]);
	
	function loadPageData(){
		var pageData={};
		pageData=[{'image':'one','id':'1','show':true},{'image':'two','id':'2','show':false},{'image':'three','id':'3','show':false},{'image':'four','id':'4','show':false}];
		return pageData;
	}
	function loadNgDirectivies(){
		var data=[];
		data=['ng-if','ng-repeat','ng-controller','ng-click','ng-init','ng-bind','ng-model','ng-show','ng-hide','ng-keyup','ng-app','ng-change','ng-class'];
		return data;
	}
})();	
	