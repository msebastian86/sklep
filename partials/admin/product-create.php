<form ng-submit="createProduct( product )">
    <div class="row">
        <div class="col-md-6">
            
            <div class="form-group">
                <label>Nazwa Produktu</label>
                <input type="text" class="form-control" ng-model="product.name">
            </div>

            <div class="form-group">
                <label>Waga:</label>
                <input type="text" class="form-control" ng-model="product.weight">
            </div>

            <div class="form-group">
                <label>Opis:</label>
                <textarea rows="4" type="text" class="form-control" ng-model="product.description">
                </textarea>
            </div>

            <div class="form-group">
                <label>Cena:</label>
                <input type="text" class="form-control" ng-model="product.price">
            </div>

        </div>
    
        <div class="col-md-6">
                        
            {{product.name}}
            <br/><strong class="label label-warning">waga:</strong> {{product.weight}}
            <br/><strong class="label label-warning">opis:</strong> {{product.description}}
            <br/><strong class="label label-warning">cena:</strong> {{product.price | number:2}}

        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-sm-12">
            <a href="#/admin/products" class="btn btn-primary">Wróć, olej zmiany</a>

            <button type="submit" class="btn btn-primary btn-lg" ng-if="!success">Dodaj Produkt</button>
            <button type="button" class="btn btn-success btn-lg" ng-if="success">Produkt dodany!</button>

        </div>
    </div>

    <p></p>
</form>