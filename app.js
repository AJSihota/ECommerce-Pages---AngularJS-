(function() {

	var app = angular.module('store', [ ]);

	var gems = [{

		name: 'Dodecahedron',
		price: 2.95,
		description: 'Dodecahedron description',
		canPurchase: true,
		soldOut: false,
		images: [{
			full:"red-jewel-250.png"
		}],

		reviews: [{
			stars: 5,
			body: "I Love this product!",
			author:"joe@thomas.com"

		}]
	},
	   {
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Pentagonal description',
		canPurchase: true,
		soldOut: false,
		images: [{
			full:"red-jewel-250.png"
		}],
		reviews: [{
			stars: 5,
			body: "I hate this product!",
			author:"joe@hater.com"

		}]


		}

	];

	var jewellery = gems;

	app.controller('StoreController', function(){

		this.product = gems;
	});

	app.controller('PanelController', function(){

		this.tab = 1;

		this.selectTab = function(setTab) {

			this.tab = setTab;
		};
		this.isSelected = function(checkTab){


			return this.tab === checkTab;
		}

	});

	app.controller("ReviewController", function(){
		this.review={};

		this.addReview = function(prod){

			jewellery.reviews.push(prod);

			

		};
		
	});

	

})();

