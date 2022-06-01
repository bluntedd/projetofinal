import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EstadioService from '../../services/futebol/EstadioService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const EstadiosLista = () => {

  const [estadios, setEstadios] = useState([])

  useEffect(() => {

    setEstadios(EstadioService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      EstadioService.delete(id)
      setEstadios(EstadioService.getAll())
    }
  }

  return (
    <div>
      <Card className="bg-light align-items-center">
        <h1 className='text-dark p-2'>Estádios</h1>
      </Card>

      <Link className='btn btn-success mb-5 w-100 text-light' to={'/estadios/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead className='bg-success text-light'>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Clube Dono</th>
            <th>País de Origem</th>
          </tr>
        </thead>
        <tbody>
          {estadios.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/estadios/' + i}><BsPencilFill /></Link>{' '}
              </td>
              <td>
                <Link to={""}><BsTrash onClick={() => apagar(i)} className='text-danger' /></Link>
              </td>
              <td>{item.nome}</td>
              <td>{item.capacidade}</td>
              <td>{item.clubedono}</td>
              <td>{item.paisdeorigem}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default EstadiosLista