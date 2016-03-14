<form action="" ng-submit="formSubmit( user )">

	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-default">

				<div class="panel-heading">
					<div class="panel-title">
						<h3>LOGOWANIE</h3>
					</div>
				</div>
				<div class="panel-body">

					<div class="alert alert-danger text-center" ng-if="error">
						{{error}}
					</div>
					
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">

							<div class="form-group" ng-class="{ 'has-error' : error }">
								<label for="">Email</label>
								<input type="text" class="form-control" ng-model="user.email" placeholder="Twój adres email">
							</div>

							<div class="form-group" ng-class="{ 'has-error' : error }">
								<label for="">Masło</label>
								<input type="password" class="form-control" ng-model="user.password" placeholder="Twoje hasło">
							</div>

							<button class="btn btn-primary btn-block">Zaloguj się</button>

						</div>
					</div>
					
				</div>

			</div>
		</div>
	</div>

</form>