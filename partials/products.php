
<div ng-controller="products">
	
	<div class="row">
        <div class="col-sm-6">
            <input type="text" placeholder="sercz" ng-model="search">
        </div>
        
        <div class="col-sm-6">
            <p><a href="#/product/create" class="btn btn-success">CREATE PRODUCT</a></p>
        </div>
    </div>

    <div class="alert alert-info" ng-repeat="product in products | filter : search">
    	<h2 class="pull-right">{{$index}}</h2>
        <strong>nazwa:</strong> {{ product.nazwa | uppercase}}
        <br/><strong>waga sztuki:</strong> {{ product.waga }}
        <br/><strong>opis:</strong> {{ product.opis }}
        <br/><strong>cena:</strong> {{ product.cena | number:2 }} zł/kg
        <p>&nbsp;</p>

        <div class="row">
            <div class="col-xs-6">
                <p><a href="#/product/edit/{{$index}}" class="btn btn-default" style="width:100%;">EDIT</a></p>
            </div>
            <div class="col-xs-6">
                <p><a ng-click="delete( product, $index )" class="btn btn-danger" style="width:100%;">DELETE</a></p>
            </div>
        </div>
    </div>

 </div>