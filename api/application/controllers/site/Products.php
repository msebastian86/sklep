<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$post = file_get_contents('php://input');
		$_POST = json_decode($post, true);

		// ładujomy model (ścieżka)
		$this->load->model('site/Products_model');
		
	}

	public function get( $id = false )
	{	

		// teraz możemy sie do niego odnosic (nazwa/koniec sciezki) i mamy dostepne jego funkcjonalnosci
		$output = $this->Products_model->get( $id );

		echo json_encode( $output );
	}

	public function getImages( $id )
	{
		$basePath = FCPATH . '..' . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR;
		$basePath = $basePath . $id . DIRECTORY_SEPARATOR;

		if (!is_dir($basePath))
		{
			return;
		}

		$files = scandir( $basePath );
		//to nizej usuwa kropki z arraya -adresu
		//var_dump( $files );

		$files = array_diff( $files , array( '.' , '..' ) );

		$newFiles = array();

		foreach ($files as $file) {
			//zresetuj id w arrayu
			$newFiles[] .= $file;
		}

		//var_dump( $newFiles );

		echo json_encode( $newFiles );
	}

}
