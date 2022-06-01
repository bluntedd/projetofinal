import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JogadorService from '../../services/futebol/JogadorService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const JogadoresLista = () => {

  const [jogadores, setJogadores] = useState([])

  useEffect(() => {

    setJogadores(JogadorService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      JogadorService.delete(id)
      setJogadores(JogadorService.getAll())
    }
  }

  return (
    <div>
      <Card className="bg-light align-items-center">
        <h1 className='text-dark p-2'>Jogadores</h1>
      </Card>

      <Link className='btn btn-success mb-5 w-100 text-light' to={'/jogadores/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead className='bg-success text-light'>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Matrícula/Número de Registro</th>
            <th>País de Origem</th>
            <th>Nacionalidade</th>
            <th>Altura</th>
            <th>Clube</th>
            <th>Salario</th>
            
          </tr>
        </thead>
        <tbody>
          {jogadores.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/jogadores/' + i}><BsPencilFill /></Link>{' '}
              </td>
              <td>
                <Link to={""}><BsTrash onClick={() => apagar(i)} className='text-danger' /></Link>
              </td>
              <td>{item.nome}</td>
              <td>{item.idade}</td>
              <td>{item.matricula}</td>
              <td>{item.paisdeorigem}</td>
              <td>{item.nacionalidade}</td>
              <td>{item.altura}</td>
              <td>{item.clube}</td>
              <td>{item.salario}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default JogadoresLista