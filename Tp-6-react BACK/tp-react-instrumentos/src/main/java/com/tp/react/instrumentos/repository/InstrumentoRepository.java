package com.tp.react.instrumentos.repository;

import com.formaciondbi.microservicios.generics.repository.Repository;
import com.tp.react.instrumentos.entity.Instrumento;

@org.springframework.stereotype.Repository
public interface InstrumentoRepository extends Repository<Instrumento, Long>{

}
