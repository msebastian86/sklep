<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Users_model extends CI_Model {

	public function get( $id = false )
	// false zeby nie bylo wymagane
	{

		if ($id == false)
		{
			// szuka tabele w sql
			$q = $this->db->get( 'users' );
			$q = $q->result();

		} else {
			// szuka pole kolumny
			$this->db->where( 'id', $id );
			$q = $this->db->get( 'users' );
			$q = $q->row();
		}

		return $q;

	}

	public function update( $user )
	{

		echo "update usera";
		// updatuje produkt o przekazanym id....
		$this->db->where('id', $user['id']);

		// podajemy nazwe tabeli w której updatujemy...
		$this->db->update('users', $user);
	}

	public function create( $user )
	{
		$this->db->insert( 'users' , $user );
	}
	
	public function delete( $user )
	{
		// wskazujemy gdzie bedziemy dzialali
		$this->db->where('id', $user['id']);

		// podajemy nazwe tabeli w której usuwamy...
		$this->db->delete('users', $user);
	}

	public function get_unique( $id , $email )
	{
		$this->db->where( 'email' , $email );
		!$id || $this->db->where( 'id !=' , $id );
		$q = $this->db->get( 'users' );

		return $q->row();
	}

}
