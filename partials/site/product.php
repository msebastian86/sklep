<div class="row">

    <div class="col-md-12">
                    
        <div class="panel panel-default">
        	<div class="panel-body">
        		<h2 style="margin-top:0;">{{product.name}}
        			<strong class="label label-warning pull-right">{{(product.price | number:2) + " €"}} </strong>
        		</h2>
        		<p><strong class="label label-info">waga:</strong> {{product.weight}} kg</p>
        		<p style="margin-bottom:0;">{{product.description}}</p>
        	</div>
        </div>

    </div>

    <hr/>

    <a href="#/products" class="btn btn-primary">Back</a>
</div>