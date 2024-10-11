

export const Customers=(customers)=>({
    type:'CUSTOMERS', 
    payload: customers,
});

export const InsertCustomer =(customer)=>({
    type:'CUSTOMERINSERT',
    payload: customer,
});
export const UpdateCustomer =(customer)=>({
    type:'CUSTOMERUPDATE',
    payload: customer,
});
export const DeleteCustomer =(customerId)=>({
    type:'CUSTOMERDELETE',
    payload: customerId,
});