<form action="" ng-submit="formSubmit()">

	<div class="row">
		<div class="col-md-12">


			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="panel-title">
						<h3>LOGOWANIE</h3>
					</div>
				</div>
				<div class="panel-body">

					<div class="alert alert-danger text-center" ng-if="errors.login">
						{{errors.login}}
					</div>
					
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">

							<div class="form-group" ng-class="{ 'has-error' : errors.login }">
								<label for="">Email</label>
								<input type="text" class="form-control" ng-model="input.email" placeholder="Twój adres email">
							</div>

							<div class="form-group" ng-class="{ 'has-error' : errors.login }">
								<label for="">Masło</label>
								<input type="password" class="form-control" ng-model="input.password" placeholder="Twoje hasło">
							</div>

							<button class="btn btn-primary btn-block">Zaloguj się</button>

						</div>
					</div>

				</div>
			</div>

		</div>
	</div>

</form>