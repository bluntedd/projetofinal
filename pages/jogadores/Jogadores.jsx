import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import jogadoresValidator from '../../validators/jogadoresValidator';
import JogadorService from '../../services/futebol/JogadorService';
import Swal from 'sweetalert2'
import { mask } from 'remask'



const Jogadores = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const jogador = JogadorService.get(params.id)

      for (let campo in jogador) {
        setValue(campo, jogador[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Registro Salvo!'})
    if(params.id){
      JogadorService.update(params.id, dados) 
    }

    else{
    JogadorService.create(dados)
    navigate('/jogadores')
    }
  }
  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  

  return (
    <div>
      <Card className="bg-success align-items-center mb-5">
        <h1 className='text-light p-2'>Jogadores</h1>
      </Card>

      <Form >
        <Card className='p-4'>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome: </Form.Label>
                <Form.Control isInvalid={errors.nome} type="text" {...register("nome", jogadoresValidator.nome)} />
                {errors.nome && <span>{errors.nome.message}</span>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="idade">
                <Form.Label>Idade: </Form.Label>
                <Form.Control isInvalid={errors.cpf} type="number" {...register("idade", jogadoresValidator.idade)} />
                {errors.cpf && <span>Campo Obrigatório</span>}
              </Form.Group>
            </Col>
            <Form.Group className="mb-3" controlId="matricula">
              <Form.Label>Matricula: </Form.Label>
              <Form.Control type="text"{...register("matricula", jogadoresValidator.cpf)}
                mask="999.999.999-99" onChange={handleChange} 
                />
                {errors.telefone && <span>{errors.cpf.message}</span>}
            </Form.Group>
            
            <Col>
              <Form.Group className="mb-3" controlId="paisdeorigem">
                <Form.Label>País de Origem: </Form.Label>
                <Form.Control isInvalid={errors.paisdeorigem} type="text" {...register("paisdeorigem", jogadoresValidator.paisdeorigem)} />
                {errors.paisdeorigem && <span>Campo Obrigatório</span>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="nacionalidade">
                <Form.Label>Nacionalidade: </Form.Label>
                <Form.Control isInvalid={errors.nacionalidade} type="text" {...register("nacionalidade", jogadoresValidator.nacionalidade)} />
                {errors.nacionalidade && <span>Campo Obrigatório</span>}
              </Form.Group>
            </Col>
            <Form.Group className="mb-3" controlId="altura">
              <Form.Label>Altura: </Form.Label>
              <Form.Control isInvalid={errors.altura} type="number" {...register("altura", jogadoresValidator.altura)} />
              {errors.altura && <span>Campo Obrigatório</span>}
            </Form.Group>
            <Col>
            <Form.Group className="mb-3" controlId="clube">
              <Form.Label>Clube: </Form.Label>
              <Form.Control isInvalid={errors.clube} type="text" {...register("clube", jogadoresValidator.clube)} />
              {errors.clube && <span>Campo Obrigatório</span>}
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="altura">
              <Form.Label>Salario: </Form.Label>
              <Form.Control isInvalid={errors.salario} type="number" {...register("salario", jogadoresValidator.salario)} />
              {errors.salario && <span>Campo Obrigatório</span>}
            </Form.Group>
            </Col>
          
          
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

export default Jogadores