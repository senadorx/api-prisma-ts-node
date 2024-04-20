import prismaClient from "../prisma";

class ListCustomersService{
    async execute(){ //este método vai ao banco e lista os clientes cadastrados
        const customers = await prismaClient.customers.findMany()
        return customers;
    }
}

export { ListCustomersService }