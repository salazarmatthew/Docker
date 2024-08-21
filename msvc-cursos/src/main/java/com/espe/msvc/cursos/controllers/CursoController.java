package com.espe.msvc.cursos.controllers;

import com.espe.msvc.cursos.models.Usuario;
import com.espe.msvc.cursos.models.entity.Curso;
import com.espe.msvc.cursos.services.CursoService;
import feign.FeignException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
    private CursoService service;

    @GetMapping("/listar")
    public List<Curso> listar() {
        return service.listar();
    }

    @GetMapping("/detalle/{id}")
    public ResponseEntity<?> detalle(@PathVariable Long id) {
        Optional<Curso> cursoOptional = service.porId(id);
        if (cursoOptional.isPresent()){
            return ResponseEntity.ok().body(cursoOptional.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/crearCurso")
    public ResponseEntity<?> crear(@Valid @RequestBody Curso curso, BindingResult result) {
        if (result.hasErrors()) {
            return validar(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.guardar(curso));
    }

    private static ResponseEntity<Map<String, String>> validar(BindingResult result) {
        Map<String, String> errores = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errores.put(err.getField(), "El campo " + err.getField() + " " + err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errores);
    }

    @PutMapping("/editarCurso/{id}")
    public ResponseEntity<?> editar(@Valid @RequestBody Curso curso, BindingResult result, @PathVariable Long id) {
        if (result.hasErrors()) {
            return validar(result);
        }
        Optional<Curso> cursoOptional = service.porId(id);
        if (cursoOptional.isPresent()){
            Curso cursoDB = cursoOptional.get();
            cursoDB.setNombre(curso.getNombre());
            return ResponseEntity.status(HttpStatus.CREATED).body(service.guardar(cursoDB));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/eliminarCurso/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        Optional<Curso> cursoOptional = service.porId(id);
        if (cursoOptional.isPresent()){
            service.eliminar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/asignar-usuario/{idcurso}")
    public ResponseEntity<?> asignarUsuario(@RequestBody Usuario usuario, @PathVariable Long idcurso) {
        Optional<Usuario> o;
        try {
            o = service.agregarUsuario(usuario, idcurso);
        } catch (FeignException e) {
            // Log the exception details
            e.printStackTrace(); // Log to the console (or use a logging framework)
            // Include more details in the error message
            String errorMsg = "Error al asignar usuario al curso con ID " + idcurso + ": " + e.getMessage();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje", errorMsg));
        }
        if (o.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(o.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje", "Usuario no encontrado para el curso con ID " + idcurso));
    }

}
