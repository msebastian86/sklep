<div class="row">

    <div class="col-md-12">
                    
        <div class="panel panel-default">
        	<div class="panel-body">
        		<h2 style="margin-top:0;">{{product.name}}
        			<strong class="label label-warning pull-right">{{(product.price | number:2) + " €"}} </strong>
        		</h2>
        		<p><strong class="label label-info">waga:</strong> {{product.weight}} kg</p>
                <button ng-click="addToCart( product ); checkCart( product )" class="btn btn-primary pull-right" ng-if="!product.qty">Dodaj do koszyka</button>
                        <button ng-click="addToCart( product ); checkCart( product )" class="btn btn-primary pull-right"  ng-if="product.qty">W koszyku: {{product.qty}}</button>
                <p style="margin-bottom:0;">{{product.description}}</p>

                <div ng-repeat="image in images" style="margin-top:10px; display:inline-block;">
                  <div style="position:relative; display:inline-block;" class="pull-left;">
                    <a href="uploads/{{ product.id }}/{{ image }}" target="_blank">
                        <img ng-src="uploads/{{ product.id }}/{{ image }}" alt="{{product.name}}" style="max-width:120px; max-height: 100px; margin-right:5px;" class="img-thumbnail pull-left margin-10">
                    </a>
                  </div>
                </div>

        	</div>
        </div>

    </div>

    <hr/>

    <a href="#/products" class="btn btn-primary">Back</a>
</div>