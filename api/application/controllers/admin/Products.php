<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$post = file_get_contents('php://input');
		$_POST = json_decode($post, true);

		// ładujomy model (ścieżka)
		$this->load->model('admin/Products_model');
		
	}

	public function get( $id = false )
	{	

		// teraz możemy sie do niego odnosic (nazwa/koniec sciezki) i mamy dostepne jego funkcjonalnosci
		$output = $this->Products_model->get( $id );

		echo json_encode( $output );
	}

	public function update()
	{	

		$product = $this->input->post('product');

		// odniesienie do modelu produktów i ścieżka gdzie on sie znajduje nastepnie przekazujemy $product które pozniej odbieramy w tym modelu
		$output = $this->Products_model->update( $product );
		
	}


	public function create()
	{	

		$product = $this->input->post('product');
		$output = $this->Products_model->create( $product );
		
	}

	public function delete()
	{	

		$product = $this->input->post('product');
		$output = $this->Products_model->delete( $product );
		
	}

}
