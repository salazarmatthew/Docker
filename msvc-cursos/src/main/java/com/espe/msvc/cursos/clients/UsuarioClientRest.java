package com.espe.msvc.cursos.clients;
import com.espe.msvc.cursos.models.Usuario;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "msvc-usuarios", url = "http://msvc-usuarios:8080")
public interface UsuarioClientRest {
    @GetMapping("/usuarios/detalle/{id}")
    Usuario detalle(@PathVariable Long id);

    @PostMapping
    Usuario crear(@RequestBody Usuario usuario);

}

