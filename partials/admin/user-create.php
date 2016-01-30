

<form ng-submit="createUser()">
    <div class="row">
        <div class="col-md-12">

        {{errors.name}}
            
            <div class="form-group">
                <label>imie</label>
                <input type="text" class="form-control" ng-model="user.name">
            </div>

            <div class="form-group">
                <label>mail:</label>
                <input type="text" class="form-control" ng-model="user.email">
            </div>

            <div class="form-group">
                <label>maslo:</label>
                <input type="password" class="form-control" ng-model="user.password">
            </div>

            <div class="form-group">
                <label>Powtórz maslo:</label>
                <input type="password" class="form-control" ng-model="user.passconf">
            </div>

            <div class="form-group">
                <label>rola:</label>
                <select class="form-control" ng-model="user.role">
                    <option value="user">user</option>
                    <option value="admin">admin kozak</option>
                </select>
            </div>

            <hr/>

            <a href="#/admin/users" class="btn btn-primary">Wróć, olej zmiany</a>

            <button type="submit" class="btn btn-primary btn-lg" ng-if="!success">Dodaj chłopa</button>
            <button type="button" class="btn btn-success btn-lg" ng-if="success">Chłop dodany!</button>

        </div>
    </div>
</form>