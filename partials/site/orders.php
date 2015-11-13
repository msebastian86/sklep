<h1>lista zakupów:</h1>

<div>

    <div class="row">

        <div class="col-sm-12">
        	<table class="table table-hover">
        		<thead>
        			<tr>
        				<th>ID</th>
        				<th>Imię</th>
        				<th>mail</th>
                        <th>koszzyk</th>
                        <th>do zapłaty</th>
        				<th>status</th>
        			</tr>
        		</thead>
        		<tbody>
        			<tr ng-repeat="order in orders | filter : search">
        				<td>{{ $index }}</td>
        				<td>{{order.name}}</td>
        				<td>{{order.email}}</td>
                        <td>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Produkt</th>
                                        <th>cena</th>
                                        <th>waga</th>
                                        <th>ilość</th>
                                        <th>razem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat="item in order.items">
                                        <td>{{item.name}}</td>
                                        <td>{{item.price}}</td>
                                        <td>{{item.weight}}</td>
                                        <td>{{item.qty}}</td>
                                        <td>{{item.price * item.qty | number:2}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <h3>{{order.total}} zł</h3>
                        </td>
        				<td>
                            <button  class="btn btn-warning" style="width:100%;" ng-click="changeStatus(order)" ng-if="order.status == 0" disabled>Oczekuje</button>
                            <button  class="btn btn-info" style="width:100%;" ng-if="order.status == 1" disabled>Zrealizowano</button>
                        </td>
        			</tr>
        		</tbody>
        	</table>
        </div>

    </div>

</div>