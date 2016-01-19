<h1>lista uzytkonwników:</h1>

<div class="row">
    <div class="col-sm-6">
        <input type="text" placeholder="sercz" ng-model="search">
    </div>
    
    <div class="col-sm-6">
        <p><a href="#/admin/user/create" class="btn btn-success">ADD USER</a></p>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>mail</th>
                    <th>rola</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="user in users | filter : search">
                    <td>{{ user.id }}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                    <td><a href="#/admin/user/edit/{{user.id}}" class="btn btn-default" style="width:100%;"><span class="glyphicon glyphicon-pencil"></span> EDIT</a></td>
                    <td><a ng-click="delete( user, user.id )" class="btn btn-danger" style="width:100%;"><span class="glyphicon glyphicon-trash"></span> DELETE</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="row" style="background:white;">
    <div class="col-sm-12">
        <img src="img/kartofle.png" alt="karfotle" class="img-responsive center-block">
    </div>
</div>