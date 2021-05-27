package com.tp.react.instrumentos.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "instrumento")
public class Instrumento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String instrument;
	
	private String marca;
	
	private String modelo;
	
	@Lob //esta annotation permite guardar en ddbb objetos como fotos, pdf, etc
	
	private byte[] foto;	
	
	private String precio;

	private String costoEnvio;
	
	private String cantidadVendida;
	
	private String descripcion;
	
}
