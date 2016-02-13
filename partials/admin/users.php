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
                    <td>{{ $index + 1 }}</td> <!-- //tutaj dla samego widoku jest index zamiast id zeby byly numerki od 1 w góre a nie id czyli przyznawane po kolei=balagan po jakims czasie -->
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                    <td><a href="#/admin/user/edit/{{user.id}}" class="btn btn-info btn-sm"><span class="glyphicon glyphicon-pencil"></span></a></td>
                    <td><button ng-click="delete( user , $index )" class="btn btn-danger btn-sm pull-right"><span class="glyphicon glyphicon-trash"></span></button></td>
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