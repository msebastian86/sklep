<form action="" ng-submit="formSubmit( user )">

	<div class="row">
		<div class="col-md-12">


			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="panel-title">
						<h3>REJESTRACJA</h3>
					</div>
				</div>

				<div class="alert alert-success" ng-if="success">Zarejestrowałes sie, teraz czas na <a href="#/login" class="alert-link">logowanie</a></div>

				<div class="panel-body" ng-if="!success">
					
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">

							<div class="form-group" ng-class="{ 'has-error' : errors.name , 'has-success' : !errors.name && submit}">
								<label for="">Imię</label>
								<input type="text" class="form-control" ng-model="user.name" placeholder="Twoje imie">
								<span class="text-danger">{{errors.name}}</span>
							</div>

							<div class="form-group" ng-class="{ 'has-error' : errors.email , 'has-success' : !errors.email && submit }">
								<label for="">Email</label>
								<input type="text" class="form-control" ng-model="user.email" placeholder="Twój adres email">
								<span class="text-danger">{{errors.email}}</span>
							</div>

							<div class="form-group" ng-class="{ 'has-error' : errors.password, 'has-success' : !errors.password && submit }">
								<label for="">Masło</label>
								<input type="password" class="form-control" ng-model="user.password" placeholder="Twoje hasło">
								<span class="text-danger">{{errors.password}}</span>
							</div>

							<div class="form-group" ng-class="{ 'has-error' : errors.passconf, 'has-success' : !errors.passconf && submit }">
								<label for="">Powtórz Masło</label>
								<input type="password" class="form-control" ng-model="user.passconf" placeholder="Powtórz hasło">
								<span class="text-danger">{{errors.passconf}}</span>
							</div>

							<button class="btn btn-primary btn-block">ZAREJESTRUJ SIĘ</button>

						</div>
					</div>

				</div>
			</div>

		</div>
	</div>

</form>