<div class="row">
    <div class="col-sm-6">
        <div class="row">
            <div class="col-sm-12">
                <input type="text" placeholder="sercz" ng-model="search">
                <p></p>
            </div>
        </div>
        
        <div class="panel panel-default" ng-repeat="product in products | filter : search">
            <div class="panel-body">
                <span class="label label-warning pull-right">{{ product.price | number:2 }} zł/kg</span>
                <strong class="pull-left"><a href="#/product/{{$index}}">{{ product.name | uppercase}}</a></strong>
                <div class="clearfix"></div>
                        
                <div class="row" style="margin-top: 15px;">
                    <div class="col-xs-6">
                        <p><a href="#/product/{{$index}}" class="btn btn-info" style="width:100%;">Details</a></p>
                    </div>
                    <div class="col-xs-6">
                        <h3 class="pull-right" style="margin-top:0;">{{$index}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <img src="img/zukwypas.png" alt="żuk :P" class="img-responsive">
    </div>
</div>