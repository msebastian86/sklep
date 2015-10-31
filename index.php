<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>stefanShop najtańsze ziemniaki w miescie</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="css/theme.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="bower_components/angularjs/angular.min.js"></script>
    <script src="bower_components/a0-angular-storage/dist/angular-storage.min.js"></script>
    <script src="https://code.angularjs.org/1.4.7/angular-route.min.js"></script>
    <script src="js/application.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers/controllers-admin.js"></script>
    <script src="js/controllers/controllers-site.js"></script>
    <script src="js/controllers/controllers-navigation.js"></script>
    <script src="js/moje.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body ng-app="app">
  
<div ng-controller="navigation" ng-include="navigation()">
</div>



  <div class="container">
    <div class="row">
      <div class="col-sm-12">

        <div ng-view>
          
        </div>

      </div>
    </div>
  </div>



</body>
</html>