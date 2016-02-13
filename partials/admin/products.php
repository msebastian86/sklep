<div class="row">
    <div class="col-sm-12">
        <div class="row">
            <div class="col-sm-6">
                <input type="text" placeholder="sercz" ng-model="search">
            </div>
            
            <div class="col-sm-6">
                <p><a href="#/admin/product/create" class="btn btn-success">CREATE PRODUCT</a></p>
            </div>
        </div>
        
        <div class="alert alert-info" ng-repeat="product in products | filter : search">
            <h2 class="pull-right">{{product.id}}</h2>
            <strong>nazwa:</strong> {{ product.name | uppercase}}
            <br/><strong>waga sztuki:</strong> {{ product.weight }}
            <br/><strong>opis:</strong> {{ product.description }}
            <br/><strong>cena:</strong> {{ product.price | number:2 }} zł/kg
            <p>&nbsp;</p>
        
            <div class="row">
                <div class="col-xs-6">
                    <p><a ng-click="delete( product, $index )" class="btn btn-danger" style="width:100%;">DELETE</a></p>
                </div>
                <div class="col-xs-6">
                    <p><a href="#/admin/product/edit/{{product.id}}" class="btn btn-primary" style="width:100%;">EDIT</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <!-- <img src="img/zukwypas.png" alt="żuk :P" class="img-responsive"> -->
    </div>
</div>