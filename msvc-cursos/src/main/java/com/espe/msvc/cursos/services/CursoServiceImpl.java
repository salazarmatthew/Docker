package com.espe.msvc.cursos.services;

import com.espe.msvc.cursos.clients.UsuarioClientRest;
import com.espe.msvc.cursos.models.Usuario;
import com.espe.msvc.cursos.models.entity.CursoUsuario;
import org.springframework.stereotype.Service;

import com.espe.msvc.cursos.repositories.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import com.espe.msvc.cursos.models.entity.Curso;
import java.util.List;
import java.util.Optional;

@Service
public class CursoServiceImpl implements CursoService{
    @Autowired
    private CursoRepository repository;

    @Autowired
    UsuarioClientRest usuarioClientRest;

    @Override
    @Transactional(readOnly = true)
    public List<Curso> listar(){
        return (List<Curso>) repository.findAll();
    }
    @Override
    @Transactional(readOnly = true)
    public Optional<Curso> porId(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public Curso guardar(Curso curso) {
        return repository.save(curso);
    }
    @Override
    @Transactional
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Usuario> agregarUsuario(Usuario usuario, Long idCurso) {
        Optional<Curso> o = repository.findById(idCurso);
        if (o.isPresent()) {
            Usuario usuarioMicro = usuarioClientRest.detalle(usuario.getId());
            Curso curso = o.get();
            CursoUsuario cursoUsuario = new CursoUsuario();
            cursoUsuario.setUsuarioId(usuarioMicro.getId());

            curso.addCursoUsuario(cursoUsuario);
            repository.save(curso);

            return Optional.of(usuarioMicro); // Devuelve el usuario asignado
        }

        return Optional.empty();
    }


    @Override
    public Optional<Usuario> crearUsuario(Usuario usuario, Long idCurso) {
        Optional<Curso> o = repository.findById(idCurso);
        if (o.isPresent()) {
            Usuario usuarioMicro = usuarioClientRest.crear(usuario);

            Curso curso = o.get();
            CursoUsuario cursoUsuario = new CursoUsuario();
            cursoUsuario.setUsuarioId(usuarioMicro.getId());

            curso.addCursoUsuario(cursoUsuario);
            repository.save(curso);
        }


        return Optional.empty();
    }

    @Override
    public Optional<Usuario> eliminarUsuario(Usuario usuario, Long idCurso) {

        Optional<Curso> o = repository.findById(idCurso);
        if (o.isPresent()) {
            Usuario usuarioMicro = usuarioClientRest.detalle(usuario.getId());
            Curso curso = o.get();
            CursoUsuario cursoUsuario = new CursoUsuario();
            cursoUsuario.setUsuarioId(usuarioMicro.getId());
            curso.removeCursoUsuario(cursoUsuario);
            repository.save(curso);
        }

        return Optional.empty();
    }
}
