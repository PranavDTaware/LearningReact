
var products = [
    { id: 1, title: 'Gerbera', description:'Wedding Flower', imageurl:"/images/flowers/gerbera.jfif", unitprice:8, quantity:2300,likes:8734 },
     { id: 2, title: 'Lotus', description:'Worship Flower',imageurl:"/images/flowers/lotus.jfif", unitprice:35, quantity:5400,likes:4598 },
     { id: 3, title: 'Jasmine', description:'Fregrance Flower', imageurl:"/images/flowers/jasmine.jfif",unitprice:2, quantity:5600,likes:6587 },
     { id: 4, title: 'Lily', description:'De licate Flower', imageurl:"/images/flowers/lily.jpg",unitprice:15, quantity:1200,likes:5678 },
     { id: 5, title: 'Rose', description:'Valentine Flower', unitprice:9,imageurl:"/images/flowers/rose.jpg", quantity:1200,likes:2387 },
     { id: 6, title: 'Marigold', description:'Festival Flower',imageurl:"/images/flowers/marigold.jpg", unitprice:2, quantity:6500,likes:9834 }    
 ];
 
 const ProductService = {
    
     getAll() {     
         return products;
     },
 
     getById(id){
        let product= products.find( (product)=>(product.id ===id));
        return product;
     },
 
     insert(theProduct){
         products.push(theProduct);
     },
 
     Update(theProduct){
         products=products.filter(product=>product.id !==theProduct.id);
         products.push(theProduct);
     },
 
     remove(id){
         products=products.filter(product=>product.id !==id);
     } 
 }
  
 export default ProductService;