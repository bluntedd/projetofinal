import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand className='btn-success btn p-3' href="/times">Futebol</Navbar.Brand>
          <Nav className="me-auto">
            
            <Link className="nav-link btn-outline-success btn m-2 text-light" to="/times">Clubes/Times</Link>
            <Link className="nav-link btn-outline-success btn m-2 text-light" to="/jogadores">Jogadores</Link>
            <Link className="nav-link btn-outline-success btn m-2 text-light" to="/campeonatos">Campeonatos</Link>
            <Link className="nav-link btn-outline-success btn m-2 text-light" to="/estadios">Estádios</Link>
            <Link className="nav-link btn-outline-success btn m-2 text-light" to="/rankingjogadores">Ranking/Melhores da Temporada</Link>

            
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu