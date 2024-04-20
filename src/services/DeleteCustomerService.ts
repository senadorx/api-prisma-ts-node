import prismaClient from "../prisma"
interface DeleteCustomerProps{
    id: string
}

class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps) {

        if (!id) {
       throw new Error("Solicitação invalida, falta o id!")
        }     
        const findCustomer = await prismaClient.customers.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não existe!")
        }
        await prismaClient.customers.delete({
            where: {
                id: findCustomer.id
            }
        })

        return {
            message: "Cliente deletado com sucesso!",
            data: findCustomer,
        }
        
    }
}

export { DeleteCustomerService }