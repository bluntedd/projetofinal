class TimeService {
    
        getAll(){
            const times = localStorage.getItem('times')
            return times ? JSON.parse(times) : []
        }
    
        get(id){
            const times = this.getAll()
            return times[id]
        }
    
        create(dados){
            const times = this.getAll()
            times.push(dados)
            localStorage.setItem('times', JSON.stringify(times))
        }
    
        update(id, dados){
            const times = this.getAll()
            times.splice(id, 1, dados)
            localStorage.setItem('times', JSON.stringify(times))
        }
    
        delete(id){
            const times = this.getAll()
            times.splice(id, 1)
            localStorage.setItem('times', JSON.stringify(times))
        }
    }
    
export default new TimeService()