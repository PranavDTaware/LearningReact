
var customers = [
     { id: 1, firstname: "Pranav", lastname:"Taware", email:"pranavtaware@gmail", contact:9607829884, location: "Pune"},
     { id: 2, firstname: "Harish", lastname:"Choudhary",email:"harishchoudhary@gmail", contact:9607829884, location: "Pune"},
     { id: 3, firstname: "Aditya", lastname:"Dagade", email:"adityadagade@gmail",contact:9607829884, location: "Pune"},
     { id: 4, firstname: "Narayan", lastname:"Kale", email:"narayankale@gmail",contact:9607829884, location: 'Pune'}    
 ];
 
 const CustomersService = {
    
     getAllCustomers() {     
         return customers;
     },
 
     getCustomerById(id){
        let customer= customers.find( (theCustomers)=>(theCustomers.id ===id));
        return customer;
     },
 
     register(theCustomer){
        customers.push(theCustomer);
    },
 
     Update(theCustomer){
        customers=customers.filter(customer=>customer.id !==theCustomer.id);
        customers.push(theCustomer);
     },
 
     remove(id){
        customers=customers.filter(customer=>customer.id !==id);
     } 
 }
  
 export default CustomersService;