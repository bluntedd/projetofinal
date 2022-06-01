class JogadorService {
   
        getAll(){
            const jogadores = localStorage.getItem('jogadores')
            return jogadores ? JSON.parse(jogadores) : []
        }
    
        get(id){
            const jogadores = this.getAll()
            return jogadores[id]
        }
    
        create(dados){
            const jogadores = this.getAll()
            jogadores.push(dados)
            localStorage.setItem('jogadores', JSON.stringify(jogadores))
        }
    
        update(id, dados){
            const jogadores = this.getAll()
            jogadores.splice(id, 1, dados)
            localStorage.setItem('jogadores', JSON.stringify(jogadores))
        }
    
        delete(id){
            const jogadores = this.getAll()
            jogadores.splice(id, 1)
            localStorage.setItem('jogadores', JSON.stringify(jogadores))
        }
    }
    

export default new JogadorService()