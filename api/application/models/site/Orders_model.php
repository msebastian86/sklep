<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Orders_model extends CI_Model {

	// public function get( $id )

	// {

	// 	// szuka pole kolumny
	// 	$this->db->where( 'id', $id );
	// 	$q = $this->db->get( 'users' );
	// 	$q = $q->row();

	// 	return $q;
	// }

	public function create( $data )
	{
		$this->db->insert( 'orders' , $data );
	}	

}
