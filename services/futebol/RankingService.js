class RankingService {
   
    getAll(){
        const rankingjogadores = localStorage.getItem('rankingjogadores')
        return rankingjogadores ? JSON.parse(rankingjogadores) : []
    }

    get(id){
        const rankingjogadores = this.getAll()
        return rankingjogadores[id]
    }

    create(dados){
        const rankingjogadores = this.getAll()
        rankingjogadores.push(dados)
        localStorage.setItem('rankingjogadores', JSON.stringify(rankingjogadores))
    }

    update(id, dados){
        const rankingjogadores = this.getAll()
        rankingjogadores.splice(id, 1, dados)
        localStorage.setItem('rankingjogadores', JSON.stringify(rankingjogadores))
    }

    delete(id){
        const rankingjogadores = this.getAll()
        rankingjogadores.splice(id, 1)
        localStorage.setItem('rankingjogadores', JSON.stringify(rankingjogadores))
    }
}


export default new RankingService()