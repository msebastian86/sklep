<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$post = file_get_contents('php://input');
		$_POST = json_decode($post, true);
		
	}

	public function get( $id = false )
	{	

		// ładujomy model (ścieżka)
		$this->load->model('admin/Products_model');

		// teraz możemy sie do niego odnosic (nazwa/koniec sciezki) i mamy dostepne jego funkcjonalnosci
		$output = $this->Products_model->get( $id );

		echo json_encode( $output );
	}

}
