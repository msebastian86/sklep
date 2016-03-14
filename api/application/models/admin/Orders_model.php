<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Orders_model extends CI_Model {

	public function get()

	{

		$q = $this->db->get( 'orders' );

		// row to jeden wiersz result wszystkie
		$q = $q->result();


		return $q;
	}

	public function create( $data )
	{
		$this->db->insert( 'orders' , $data );
	}

	public function update( $id, $data )
	{
		$this->db->where('id', $id);
		$this->db->update('orders', $data);
	
	}

	public function delete( $id )
	{
		$this->db->where('id', $id);
		$this->db->delete('orders');
	}

}
