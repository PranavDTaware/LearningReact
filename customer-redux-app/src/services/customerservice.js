
const customer = 'customers';

export const CustomerService = {
    getAllCustomers:() => {
        const customers = localStorage.getItem(customer);
        return customers ? JSON.parse(customers): [];
    },

    getCustomerById:(id) => {
        const customers = CustomerService.getAllCustomers();
        return customers.find(customer => customer.id === id);
    },

    addCustomer: (customer) => {
        const customers = CustomerService.getAllCustomers();
        customers.push(customer);
        localStorage.setItem(customer, JSON.stringify(customers));
    },

    updateCustomer:(updatedCustomer) => {
        let customers = CustomerService.getAllCustomers();
        customers = customers.map(customer => customer.id === updatedCustomer.id ? updatedCustomer:customer
        );
        localStorage.setItem(customer, JSON.stringify(customers));
    },

    deleteCustomer:(id)=> {
        let customers = CustomerService.getAllCustomers();
        customers = customers.filter(customer => customer.id !== id);
        localStorage.setItem(customer, JSON.stringify(customers));
    }
}

export default CustomerService;
