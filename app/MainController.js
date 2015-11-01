app.controller("MainController", [
	"$mdSidenav", 
	function($mdSidenav) {

		var vm = this;

		vm.toggleSidenav = function(menuId) {
		    $mdSidenav(menuId).toggle();
		};

	}]);