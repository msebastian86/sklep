

<form ng-submit="saveChanges( user )">

    <div class="row">
        <div class="col-md-12">
            
            <div class="form-group">
                <label>Nazwa usera</label>
                <input type="text" class="form-control" ng-model="user.name">
            </div>

            <div class="form-group">
                <label>mail:</label>
                <input type="text" class="form-control" ng-model="user.email">
            </div>

            <div class="form-group">
                <label>nowe maslo:</label>
                <input type="password" class="form-control" ng-model="user.password">
            </div>

            <div class="form-group">
                <label>Powtórz maslo:</label>
                <input type="password" class="form-control" ng-model="user.passconf">
            </div>

            <div class="form-group">
                <label>rola:</label>
                <select class="form-control" ng-model="user.role">
                    <option value="user">uuser</option>
                    <option value="admin">admin kozak</option>
                </select>
            </div>

            <hr/>

            <button type="submit" class="btn btn-primary">Zapisz pan zmiany</button>
            <a href="#/users" class="btn btn-primary">Wróć, olej zmiany</a>

        </div>
    </div>
</form>