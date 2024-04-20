import prismaClient from "../prisma";

//Ao passar pro service(model) que precisar criar o cadastro, é preciso falar que o método execute abaixo espera o name e email vindo do corpo do body, pelo request, via criação de tipagens:
interface CreateCustomersProps{
    name: string;
    email: string
}


class CreateCustomerService {
    //método
    async execute({name, email}: CreateCustomersProps) {
        
        if (!name || !email) { //se name e email estiverem vazios
            throw new Error("Preencha todos os campos!")//lance esse erro
        }

        //Agora, se name e email foram enviados, fazer o cadastro no banco:
        // const customer = await prismaClient.customer.create({
        //     data: {
        //         name, 
        //         email,
        //         status:
        //     }
        // })
        const customer = await prismaClient.customers.create({
            data: {
                name, 
                email,
                status: true
            }
        })
        
        
        
        return customer
    }
}


export { CreateCustomerService }