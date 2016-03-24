angular.module('tabsApp', [])
    .controller('TabsCtrl', ['$scope', function ($scope) {
        $scope.tabs = [{
            title: 'Students',
            url: 'one.tpl.html'
        }, {
            title: 'Contact',
            url: 'two.tpl.html'
        }, {
            title: 'Market Tool',
            url: 'three.tpl.html'
        }
        ];

        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        }

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl == $scope.currentTab;
        }
    }]);



