import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'

class CreateCustomerController {
    //request: temos acesso ao corpo da página.
    //reply(é o response): enviamos respostas aos users, ao frontend.
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: string, email: string }
        //o service é o model no adonis!
        

    //acessando a classe criada no arquivo CreateCustomerService
    const customerService = new CreateCustomerService() 
    
        const customer = await customerService.execute({name, email});

        //dar retorno à API:
        reply.send(customer)
        
    }
}
export { CreateCustomerController }