import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EstadioService from '../../services/futebol/EstadioService';
import estadioValidator from '../../validators/estadioValidator';
import Swal from 'sweetalert2';

const Estadios = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue,  formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const estadio = EstadioService.get(params.id)

      for (let campo in estadio) {
        setValue(campo, estadio[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Registro Salvo!'})
    if(params.id){
      EstadioService.update(params.id, dados) 
    }

    else{
    EstadioService.create(dados)
    navigate('/estadios')
    }
  }

   

  return (
    
    <div>
    <Card className="bg-success align-items-center mb-5">
        <h1 className='text-light p-2'>Estádios</h1>
    </Card>

    <Form >
      <Card className='p-4'>
        <Row>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome do Estadio: </Form.Label>
            <Form.Control isInvalid={errors.nome} type="text" {...register("nome", estadioValidator.nome)} />
            {errors.nome && <span>{errors.nome.message}</span>}
          </Form.Group>
          <Col>
            <Form.Group className="mb-3" controlId="capacidade">
              <Form.Label>Capacidade: </Form.Label>
              <Form.Control isInvalid={errors.capacidade} type="text" {...register("capacidade", estadioValidator.capacidade)} />
              {errors.capacidade && <span>Campo Obrigatório</span>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="clubedono">
              <Form.Label>Clube Dono: </Form.Label>
              <Form.Control isInvalid={errors.clubedono} type="text" {...register("clubedono", estadioValidator.clubedono)} />
              {errors.clubedono && <span>Campo Obrigatório</span>}
            </Form.Group>
          </Col>
          <Form.Group className="mb-3" controlId="paisdeorigem">
            <Form.Label>País de Origem: </Form.Label>
            <Form.Control isInvalid={errors.paisdeorigem} type="text" {...register("paisdeorigem", estadioValidator.paisdeorigem)} />
            {errors.paisdeorigem && <span>Campo Obrigatório</span>}
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


export default Estadios