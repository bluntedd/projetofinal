import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TimeService from '../../services/futebol/TimeService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const TimesLista = () => {

  const [times, setTimes] = useState([])

  useEffect(() => {

    setTimes(TimeService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      TimeService.delete(id)
      setTimes(TimeService.getAll())
    }
  }

  return (
    <div>
      <Card className='p-3'>
      <Card className="bg-light align-items-center">
        <h1 className='text-dark p-2'>Clubes/Times</h1>
      </Card>

      <Link className='btn btn-success mb-5 w-100 text-light' to={'/times/create'}><FaPlus /> Novo time</Link>

      <Table striped bordered hover>
        <thead className='bg-success text-light'>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Campeonato</th>
            <th>País de Origem</th>
            <th>Fundação</th>
            <th>Patrimônio</th>
          </tr>
        </thead>
        <tbody>
          {times.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/times/' + i}><BsPencilFill /></Link>{' '}
              </td>
              <td>
                <Link to={""}><BsTrash onClick={() => apagar(i)} className='text-danger' /></Link>
              </td>
              <td>{item.nome}</td>
              <td>{item.campeonato}</td>
              <td>{item.paisdeorigem}</td>
              <td>{item.fundacao}</td>
              <td>{item.patrimonio}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Card>
    </div>
  )
}

export default TimesLista