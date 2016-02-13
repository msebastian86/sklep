<form ng-submit="saveChanges( user )">

    <div class="row">
        <div class="col-md-12">
            
            <div class="form-group" ng-class="{ 'has-error' : errors.name, 'has-success' : !errors.name && submit && !success }">
              <label>Imię</label>
              <input type="text" class="form-control" ng-model="user.name">
              <span class="text-danger">{{errors.name}}</span>
            </div>

            <div class="form-group" ng-class="{ 'has-error' : errors.email, 'has-success' : !errors.email && submit && !success }">
              <label>Email:</label>
              <input type="text" class="form-control" ng-model="user.email">
              <span class="text-danger">{{errors.email}}</span>
            </div>

            <div class="form-group" ng-class="{ 'has-error' : errors.password, 'has-success' : !errors.password && submit && !success }">
              <label>Nowe hasło</label>
              <input type="password" class="form-control" ng-model="user.password">
              <span class="text-danger">{{errors.password}}</span>
            </div>

            <div class="form-group" ng-class="{ 'has-error' : errors.passconf, 'has-success' : !errors.passconf && submit && !success }">
              <label>Powtórz nowe hasło</label>
              <input type="password" class="form-control" ng-model="user.passconf">
              <span class="text-danger">{{errors.passconf}}</span>
            </div>

            <div class="form-group">
              <label>Rola</label>
              <select class="form-control" ng-model="user.role">
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
            </div>

            <hr/>

            <a href="#/admin/users" class="btn btn-warning">Wróć, olej zmiany</a>
            <button type="submit" class="btn btn-primary btn-lg" ng-if="!success">Zapisz pan zmiany</button>
            <button type="button" class="btn btn-success btn-lg" ng-if="success">Zmiany zapisane!</button>

        </div>
    </div>
</form>