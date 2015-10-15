
<div ng-controller="products">
	
	<input type="text" placeholder="sercz" ng-model="search">
	<p></p>

    <div class="alert alert-info" ng-repeat="product in products | filter : search">
    	<h2 class="pull-right">{{$index}}</h2>
        <strong>nazwa:</strong> {{ product.nazwa | uppercase}}
        <br/><strong>waga sztuki:</strong> {{ product.waga }}
        <br/><strong>opis:</strong> {{ product.opis }}
        <br/><strong>cena:</strong> {{ product.cena | number:2 }} zł/kg
        <p><a href="#/product/{{$index}}" class="btn btn-default">EDIT</a></p>
    </div>

 </div>