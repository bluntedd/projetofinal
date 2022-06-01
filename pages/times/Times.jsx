import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import TimeService from '../../services/futebol/TimeService';
import timesValidator from '../../validators/timesValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Times = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const time = TimeService.get(params.id)

      for (let campo in time) {
        setValue(campo, time[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Registro Salvo!'})
    if(params.id){
      TimeService.update(params.id, dados) 
    }

    else{
    TimeService.create(dados)
    navigate('/times')
    }
  }

  return (
    <div>
      <Card className="bg-success align-items-center mb-5">
        <h1 className='text-light p-2'>Clubes/Times</h1>
      </Card>

      <Form >
        <Card className='p-4'>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome do Clube: </Form.Label>
              <Form.Control isInvalid={errors.nome} type="text" {...register("nome", timesValidator.nome)} />
              {errors.nome && <span>{errors.nome.message}</span>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="campeonato">
              <Form.Label>Campeonato: </Form.Label>
              <Form.Control isInvalid={errors.campeonato} type="text" {...register("campeonato", timesValidator.campeonato)} />
              {errors.campeonato && <span>Campo Obrigatório</span>}
            </Form.Group>
          </Col>
            <Form.Group className="mb-3" controlId="paisdeorigem">
              <Form.Label>País de Origem: </Form.Label>
              <Form.Control isInvalid={errors.paisdeorigem} type="text" {...register("paisdeorigem", timesValidator.paisdeorigem)} />
              {errors.paisdeorigem && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="fundacao">
              <Form.Label>Fundação: </Form.Label>
              <Form.Control isInvalid={errors.fundacao} type="text" {...register("fundacao", timesValidator.fundacao)} />
              {errors.fundacao && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="patrimonio">
              <Form.Label>Patrimônio: </Form.Label>
              <Form.Control isInvalid={errors.patrimonio} type="text" {...register("patrimonio", timesValidator.patrimonio)} />
              {errors.patrimonio && <span>Campo Obrigatório</span>}
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

export default Times