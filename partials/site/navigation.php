<header>

    <link ng-if="!name.default" rel="stylesheet" href="https://bootswatch.com/{{szablon}}/bootstrap.min.css">

    <nav class="navbar navbar-default">
      <div class="container">
        <div class="row">
    
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" ng-class="{active : isActive( '/home' ) }" href="#/home">Shop</a>
            </div>
          
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
              <ul class="nav navbar-nav">
                <li ng-class="{active : isActive( '/products' ) }"><a href="#/products">Products</a></li>
              </ul>
          
              <ul class="nav navbar-nav navbar-right">
                <li ng-if="cart" ng-class="{active : isActive( '/cart' ) }"><a href="#/cart">Cart</a></li>
                <li ng-class="{active : isActive( '/orders' ) }"><a href="#/orders">Orders</a></li>
                <li ng-class="{active : isActive( '/login' ) }" ng-if="!loggedIn"><a href="#/login">LogIn</a></li>
                <li ng-class="{active : isActive( '/logout' ) }" ng-if="loggedIn"><a href="" ng-click="logout()">LogOut</a></li>
                <li ng-class="{active : isActive( '/register' ) }"><a href="#/register" ng-if="!loggedIn">Register</a></li>
                <li ng-class="{active : isActive( '/admin' ) }" ng-if="isAdmin"><a href="#/admin/users">Admin</a></li>
              </ul>
    
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
    
        </div>
      </div>
    </nav>
    
    <div class="alert alert-warning" ng-if="noAdmin">
      Tylko dla Admina
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-6">
            <select class="form-control" ng-model="szablon">
                <option ng-repeat="name in [ 'cosmo', 'darkly', 'flatly', 'lumen' ]">{{name}}</option>
            </select>
        </div>
      </div>
    </div>
    <p></p>

</header>