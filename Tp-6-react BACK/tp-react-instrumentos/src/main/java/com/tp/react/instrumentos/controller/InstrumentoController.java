package com.tp.react.instrumentos.controller;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.formaciondbi.microservicios.generics.controllers.ControllerImpl;
import com.formaciondbi.microservicios.generics.services.ServicesImpl;
import com.tp.react.instrumentos.entity.Instrumento;
import com.tp.react.instrumentos.service.InstrumentoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/instrumento")
public class InstrumentoController extends ControllerImpl<Instrumento, ServicesImpl<Instrumento,Long>>{

	@Autowired
	InstrumentoService service;
	
	@PostMapping("/crear-con-foto")
	public ResponseEntity<?> crear(@Valid Instrumento instrumento, BindingResult result, @RequestParam MultipartFile archivo) throws IOException {
		if(!archivo.isEmpty()) {
			try {
				
				instrumento.setFoto(archivo.getBytes());
			} catch (Exception e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"falla al obtener la imagen.\"}"+e.getMessage());
			}
		}
		try {
			return super.save(instrumento, result);
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"falla al insertar en la db.\"}"+e.getMessage());
		}
	}
	

	@PutMapping("/editar-con-foto/{id}")
	public ResponseEntity<?> editar(@Valid Instrumento instrumento,@PathVariable Long id,  BindingResult result, 
			@RequestParam MultipartFile archivo)  throws Exception {
		
		Instrumento instrumentoOp;
		try {
			 instrumentoOp= this.service.findById(id);
			 			
		}
		catch(Exception e){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"error por favor intente mas tarde.\"}");
						
		}
		
		Instrumento instrumentoDB=instrumentoOp;
		
		instrumentoDB.setInstrument(instrumento.getInstrument());
		instrumentoDB.setMarca(instrumento.getMarca());
		instrumentoDB.setModelo(instrumento.getModelo());
		instrumentoDB.setPrecio(instrumento.getPrecio());
		instrumentoDB.setCostoEnvio(instrumento.getCostoEnvio());
		instrumentoDB.setCantidadVendida(instrumento.getCantidadVendida());
		instrumentoDB.setDescripcion(instrumento.getDescripcion());
	
	
	if(!archivo.isEmpty()) {
		instrumentoDB.setFoto(archivo.getBytes());
	}
	
	
	return ResponseEntity.status(HttpStatus.CREATED).body(service.save(instrumentoDB));
	
	}

}
