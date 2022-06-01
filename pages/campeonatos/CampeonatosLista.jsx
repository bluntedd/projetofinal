import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CampeonatoService from '../../services/futebol/CampeonatoService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const CampeonatosLista = () => {

  const [campeonatos, setCampeonatos] = useState([])

  useEffect(() => {

    setCampeonatos(CampeonatoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      CampeonatoService.delete(id)
      setCampeonatos(CampeonatoService.getAll())
    }
  }

  return (
    <div>
      <Card className="bg-light align-items-center">
        <h1 className='text-dark p-2'>Campeonatos</h1>
      </Card>

      <Link className='btn btn-success mb-5 w-100 text-light' to={'/campeonatos/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead className='bg-success text-light'>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Temporada</th>
            <th>Quantidade de Times</th>
          </tr>
        </thead>
        <tbody>
          {campeonatos.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/campeonatos/' + i}><BsPencilFill /></Link>{' '}
                
              </td>
              <td>
                <Link to={""}><BsTrash onClick={() => apagar(i)} className='text-danger' /></Link>
              </td>
              <td>{item.nome}</td>
              <td>{item.temporada}</td>
              <td>{item.quantidadedetimes}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default CampeonatosLista