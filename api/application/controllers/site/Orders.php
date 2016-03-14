<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Orders extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$post = file_get_contents('php://input');
		$_POST = json_decode($post, true);

		// ładujomy model (ścieżka)
		$this->load->model('site/Orders_model');
		
	}

	public function create()
	{	
		$token = $this->input->post('token');
		$this->jwt->decode( $token , config_item( 'encryption_key' ) );

		$payload = $this->input->post('payload');

		unset( $payload['role'] );

		$data = $payload;

		$items = $this->input->post('items');
		$items = json_encode( $items , JSON_FORCE_OBJECT );

		$data['items'] = $items;
		$data['total'] = $this->input->post('total');

		//var_dump( $data );

		$this->Orders_model->create( $data );

	}

}
