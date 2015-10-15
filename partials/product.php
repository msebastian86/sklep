
<div ng-controller="products">
	
	<input type="text" ng-model="search">

    {{product}}

    <span class="text-capitalize">{{product.nazwa}}</span>
    <br>
    waga szt.: {{product.waga}} kg
    <br>
    {{product.opis}}
    <br>
    {{product.cena | number:2}} zł / kg


</div>