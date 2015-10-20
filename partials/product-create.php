

<form ng-submit="createProduct()">
    <div class="row">
        <div class="col-md-6">
            
            <div class="form-group">
                <label>Nazwa Produktu</label>
                <input type="text" class="form-control" ng-model="product.nazwa">
            </div>

            <div class="form-group">
                <label>Waga:</label>
                <input type="text" class="form-control" ng-model="product.waga">
            </div>

            <div class="form-group">
                <label>Opis:</label>
                <textarea rows="4" type="text" class="form-control" ng-model="product.opis">
                </textarea>
            </div>

            <div class="form-group">
                <label>Cena:</label>
                <input type="text" class="form-control" ng-model="product.cena">
            </div>

        </div>
    
        <div class="col-md-6">
                        
            {{product.nazwa}}
            <br/><strong class="label label-warning">waga:</strong> {{product.waga}}
            <br/><strong class="label label-warning">opis:</strong> {{product.opis}}
            <br/><strong class="label label-warning">cena:</strong> {{product.cena | number:2}}

        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-sm-12">
            <button type="submit" class="btn btn-primary">Zapisz pan zmiany</button>
            <a href="#/products" class="btn btn-primary">Wróć, olej zmiany</a>
        </div>
    </div>

    <p></p>
</form>