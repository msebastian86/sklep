<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="css/theme.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="bower_components/angularjs/angular.min.js"></script>
    <script src="js/aplication.js"></script>
    <script src="js/moje.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body ng-app="app">

    <header>
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
                  <a class="navbar-brand" href="#">stefanShop</a>
                </div>
              
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">Produkty</a></li>
                  </ul>
              
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Link</a></li>
                  </ul>
        
                </div><!-- /.navbar-collapse -->
              </div><!-- /.container-fluid -->
        
            </div>
          </div>
        </nav>
    </header>



    <div class="container">
      <div class="row">
        <div class="col-sm-12">


            <input type="text" class="form-controll" placeholder="szukaj" ng-model='search'>
            <p></p>

            <div ng-controller="products">

                <div class="alert alert-info" ng-repeat="product in products | filter : search">
                    <strong>nazwa:</strong> {{ product.nazwa | uppercase}}
                    <br/><strong>waga:</strong> {{ product.waga }}
                    <br/><strong>opis:</strong> {{ product.opis }}
                </div>

             </div>

        </div>
      </div>
    </div>


  </body>
</html>