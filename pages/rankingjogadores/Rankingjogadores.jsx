import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import rankingValidator from '../../validators/rankingValidator';
import RankingService from '../../services/futebol/RankingService';
import Swal from 'sweetalert2'
import { mask } from 'remask'



const Rankingjogadores = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const ranking = RankingService.get(params.id)

      for (let campo in ranking) {
        setValue(campo, ranking[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Registro Salvo!'})
    if(params.id){
      RankingService.update(params.id, dados) 
    }

    else{
    RankingService.create(dados)
    navigate('/rankingjogadores')
    }
  }
  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  

  return (
    <div>
      <Card className="bg-success align-items-center mb-5">
        <h1 className='text-light p-2'>Ranking Jogadores/Melhores da Temporada
</h1>
      </Card>

      <Form >
        <Card className='p-4'>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome: </Form.Label>
                <Form.Control isInvalid={errors.nome} type="text" {...register("nome", rankingValidator.nome)} />
                {errors.nome && <span>{errors.nome.message}</span>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="idade">
                <Form.Label>Idade: </Form.Label>
                <Form.Control isInvalid={errors.cpf} type="number" {...register("idade", rankingValidator.idade)} />
                {errors.cpf && <span>Campo Obrigatório</span>}
              </Form.Group>
            </Col>
            <Form.Group className="mb-3" controlId="matricula">
              <Form.Label>Matricula: </Form.Label>
              <Form.Control type="text"{...register("matricula", rankingValidator.matricula)}
                mask="999.999-9999" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="paisdeorigem">
              <Form.Label>País de Origem: </Form.Label>
              <Form.Control isInvalid={errors.paisdeorigem} type="text" {...register("paisdeorigem", rankingValidator.paisdeorigem)} />
              {errors.paisdeorigem && <span>Campo Obrigatório</span>}
            </Form.Group>
            <Col>
              <Form.Group className="mb-3" controlId="golsmarcados">
                <Form.Label>Número de Gols Marcados: </Form.Label>
                <Form.Control isInvalid={errors.golsmarcados} type="text" {...register("golsmarcados", rankingValidator.golsmarcados)} />
                {errors.golsmarcados && <span>Campo Obrigatório</span>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="assistencias">
                <Form.Label>Número de Asssistências: </Form.Label>
                <Form.Control isInvalid={errors.assistencias} type="number" {...register("assistencias", rankingValidator.assistencias)} />
                {errors.assistencias && <span>Campo Obrigatório</span>}
              </Form.Group>
            </Col>
            <Form.Group className="mb-3" controlId="titulos">
              <Form.Label>Número de Títulos Conquistados: </Form.Label>
              <Form.Control isInvalid={errors.titulos} type="text" {...register("titulos", rankingValidator.titulos)} />
              {errors.titulos && <span>Campo Obrigatório</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="clube">
              <Form.Label>Clube: </Form.Label>
              <Form.Control isInvalid={errors.clube} type="text" {...register("clube", rankingValidator.clube)} />
              {errors.clube && <span>Campo Obrigatório</span>}
            </Form.Group>  
          
            <div className="text-center mt-4">
              <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
              <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
            </div>
          </Row>
        </Card>
      </Form>

    </div>
  )
}

export default Rankingjogadores