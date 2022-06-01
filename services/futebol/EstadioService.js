class EstadioService {
  
    getAll(){
        const estadios = localStorage.getItem('estadios')
        return estadios ? JSON.parse(estadios) : []
    }

    get(id){
        const estadios = this.getAll()
        return estadios[id]
    }

    create(dados){
        const estadios = this.getAll()
        estadios.push(dados)
        localStorage.setItem('estadios', JSON.stringify(estadios))
    }

    update(id, dados){
        const estadios = this.getAll()
        estadios.splice(id, 1, dados)
        localStorage.setItem('estadios', JSON.stringify(estadios))
    }

    delete(id){
        const estadios = this.getAll()
        estadios.splice(id, 1)
        localStorage.setItem('estadios', JSON.stringify(estadios))
    }
}


export default new EstadioService()