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

	public function update( $product )
	{
		// updatuje produkt o przekazanym id....
		$this->db->where('id', $product['id']);

		// podajemy nazwe tabeli w której updatujemy...
		$this->db->update('products', $product);
	}

	public function create( $product )
	{
		// podajemy nazwe tabeli w której updatujemy...
		$this->db->insert('products', $product);
	}

	public function delete( $product )
	{
		// wskazujemy gdzie bedziemy dzialali
		$this->db->where('id', $product['id']);

		// podajemy nazwe tabeli w której usuwamy...
		$this->db->delete('products', $product);
	}

}
