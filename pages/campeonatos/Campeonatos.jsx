import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import CampeonatoService from '../../services/futebol/CampeonatoService';
import campeonatoValidator from '../../validators/campeonatosValidator';
import Swal from 'sweetalert2';

const Campeonatos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue,  formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const campeonato = CampeonatoService.get(params.id)

      for (let campo in campeonato) {
        setValue(campo, campeonato[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Registro Salvo!'})
    if(params.id){
      CampeonatoService.update(params.id, dados) 
    }

    else{
    CampeonatoService.create(dados)
    navigate('/campeonatos')
    }

    
  }

  return (
    
    <div>
      <Card className="bg-success align-items-center mb-5">
        <h1 className='text-light p-2'>Campeonatos</h1>
      </Card>

    <Form >
      <Card className='p-4'>
          <Row>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome do Campeonato: </Form.Label>
                <Form.Control isInvalid={errors.nome} type="text" {...register("nome", campeonatoValidator.nome)} />
                {errors.nome && <span>{errors.nome.message}</span>}
              </Form.Group>
              <Col>
                <Form.Group className="mb-3" controlId="temporada">
                  <Form.Label>Temporada: </Form.Label>
                  <Form.Control isInvalid={errors.temporada} type="text" {...register("temporada", campeonatoValidator.campeonato)} />
                  {errors.datainicio && <span>Campo Obrigatório</span>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="quantidadedetimes">
                  <Form.Label>Quantidade de Times: </Form.Label>
                  <Form.Control isInvalid={errors.quantidadedetimes} type="text" {...register("quantidadedetimes", campeonatoValidator.quantidadedetimes)} />
                  {errors.datafim && <span>Campo Obrigatório</span>}
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


export default Campeonatos