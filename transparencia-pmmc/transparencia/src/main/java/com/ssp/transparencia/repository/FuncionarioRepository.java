package com.ssp.transparencia.repository;

import org.springframework.data.repository.CrudRepository;
import com.ssp.transparencia.models.Funcionario;

public interface FuncionarioRepository extends CrudRepository<Funcionario,String> {
}
