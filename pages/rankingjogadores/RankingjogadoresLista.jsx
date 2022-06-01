import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RankingService from '../../services/futebol/RankingService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const RankingjogadoresLista = () => {

  const [jogadores, setJogadores] = useState([])

  useEffect(() => {

    setJogadores(RankingService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      RankingService.delete(id)
      setJogadores(RankingService.getAll())
    }
  }

  return (
    <div>
      <Card className="bg-light align-items-center">
        <h1 className='text-dark p-2'>Ranking/Melhores da Temporada</h1>
      </Card>

      <Link className='btn btn-success mb-5 w-100 text-light' to={'/rankingjogadores/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead className='bg-success text-light'>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Matricula</th>
            <th>País de Origem</th>
            <th>Número de Gols Marcados</th>
            <th>Número de Assistências</th>
            <th>Número de Títulos Conquistados</th>
            <th>Clube</th>
          </tr>
        </thead>
        <tbody>
          {jogadores.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/rankingjogadores/' + i}><BsPencilFill /></Link>{' '}
              </td>
              <td>
                <Link to={""}><BsTrash onClick={() => apagar(i)} className='text-danger' /></Link>
              </td>
              <td>{item.nome}</td>
              <td>{item.idade}</td>
              <td>{item.matricula}</td>
              <td>{item.paisdeorigem}</td>
              <td>{item.golsmarcados}</td>
              <td>{item.assistencias}</td>
              <td>{item.titulos}</td>
              <td>{item.clube}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default RankingjogadoresLista