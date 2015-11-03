<form name="myForm" ng-submit="setOrder( $event )" action="https://www.paypal.com/cgi-bin/webscr" method="post">
	<div class="row">
	    <div class="col-md-12">
	        <div class="panel panel-default">
	            <div class="panel-body">

	                <h1>Koszyk</h1>

	                <div ng-if="!cart.length" class="alert alert-info">Koszyk jest pusty, kup coś :P</div>

	                <table ng-if="cart.length" class="table table-hover">
	                	<thead>
					    	<tr>
					    		<td>Nazwa</td>
					    		<td>Waga</td>
					    		<td>Ilość</td>
					    		<td>Cena</td>
					    		<td>Razem</td>
					    		<td>Usuń</td>
					    	</tr>
					    </thead>	
					    <tbody>
					    	<tr ng-repeat="item in cart">
					    		<td>{{item.name}}</td>
					    		<td>{{item.weight}}</td>
								<td>
									<div class="form-group" ng-class="{ 'has-error' : myForm.input{{$index}}.$error.required || myForm.input{{$index}}.$error.number || myForm.input{{$index}}.$error.max || myForm.input{{$index}}.$error.min }">
										<input class="form-controll" name="input{{$index}}" type="number" ng-model="item.qty" min="1" max="100" style="width:65px;" required>
									
										<span class="text-danger" ng-show="myForm.input{{$index}}.$error.required">Podaj ilość</span>
										<span class="text-danger" ng-show="myForm.input{{$index}}.$error.number">Tylko cyfry</span>
										<span class="text-danger" ng-show="myForm.input{{$index}}.$error.max">Nie mamy tyle :P</span>
										<span class="text-danger" ng-show="myForm.input{{$index}}.$error.min"><span class="glyphicon glyphicon-fire"></span> Rly?</span>

									</div>
								</td>
					    		<td>{{item.price | number:2}} zł</td>
					    		<td>{{item.qty * item.price | number:2}}</td>
					    		<td><button ng-click="removeItem( $index )" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></button></td>
					    	</tr>
					    	<tr style="border-top: 2px solid black;">
					    		<td colspan="4"></td>
					    		<td>Łącznie:</td>
					    		<td><strong class="label label-info">{{ total() | number:2 }} zł</strong></td>
					    	</tr>
					    </tbody>
	                </table>


					<input type="hidden" name="cmd" value="_cart">
					<input type="hidden" name="upload" value="1">
					<input type="hidden" name="business" value="smmm123@wp.pl">
					<input type="hidden" name="charset" value="utf-8">
					<input type="hidden" name="currency_code" value="PLN">

					<!-- +1 zeby nie bylo od 0 -->

					<div ng-repeat="item in cart">
						<input type="hidden" name="item_name_{{$index+1}}" value="{{item.name}}">
						<input type="hidden" name="quantity_{{$index+1}}" value="{{item.qty}}">
						<input type="hidden" name="amount_{{$index+1}}" value="{{item.price}}">
					</div>

	                <button ng-if="cart.length" ng-click="emptyCart()" class="btn btn-danger"> Wyczyść koszyk </button>

	                <button ng-if="cart.length" class="btn btn-primary" type="submit" ng-disabled="!myForm.$valid"><span class="glyphicon glyphicon-piggy-bank"></span> Zamów i zapłać</button>
	                
	            </div>
	        </div>
	    </div>
	</div>

</form>