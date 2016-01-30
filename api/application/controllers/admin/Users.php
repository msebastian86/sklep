<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$post = file_get_contents('php://input');
		$_POST = json_decode($post, true);

		// ładujomy model (ścieżka)
		$this->load->model('admin/Users_model');
		
	}

	public function get( $id = false )
	{	

		// teraz możemy sie do niego odnosic (nazwa/koniec sciezki) i mamy dostepne jego funkcjonalnosci
		$output = $this->Users_model->get( $id );

		echo json_encode( $output );
	}

	public function update()
	{	

		$user = $this->input->post('user');

		// odniesienie do modelu produktów i ścieżka gdzie on sie znajduje nastepnie przekazujemy $user które pozniej odbieramy w tym modelu
		$output = $this->Users_model->update( $user );
		
	}


	public function create()
	{	

		// imie to nazwa przesylana przez angulara i przypisujemy nazwe imie potem przypisujemy typ walidacji...
		$this->form_validation->set_rules( 'name', 'imie', 'required');

		if ($this->form_validation->run() )
		{
			$user = $this->input->post('user');
			$this->Users_model->create( $user );	

		} else {

			$output['name'] = form_error('name');
			echo json_encode( $output );
		}

	}

	public function delete()
	{	

		$user = $this->input->post('user');
		$output = $this->Users_model->delete( $user );		
	}

}
