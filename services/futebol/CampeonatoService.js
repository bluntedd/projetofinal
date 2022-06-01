class CampeonatoService {
  
        getAll(){
            const campeonatos = localStorage.getItem('campeonatos')
            return campeonatos ? JSON.parse(campeonatos) : []
        }
    
        get(id){
            const campeonatos = this.getAll()
            return campeonatos[id]
        }
    
        create(dados){
            const campeonatos = this.getAll()
            campeonatos.push(dados)
            localStorage.setItem('campeonatos', JSON.stringify(campeonatos))
        }
    
        update(id, dados){
            const campeonatos = this.getAll()
            campeonatos.splice(id, 1, dados)
            localStorage.setItem('campeonatos', JSON.stringify(campeonatos))
        }
    
        delete(id){
            const campeonatos = this.getAll()
            campeonatos.splice(id, 1)
            localStorage.setItem('campeonatos', JSON.stringify(campeonatos))
        }
    }
    
   
export default new CampeonatoService()