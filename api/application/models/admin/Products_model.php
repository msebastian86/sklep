<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Products_model extends CI_Model {

	public function get( $id = false )
	// false zeby nie bylo wymagane
	{

		if ($id == false)
		{
			// szuka tabele w sql
			$q = $this->db->get( 'products' );
			$q = $q->result();

		} else {
			// szuka pole kolumny
			$this->db->where( 'id', $id );
			$q = $this->db->get( 'products' );
			$q = $q->row();
		}

		return $q;

	}

}
