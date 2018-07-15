const { products }= require('../routes/db.json');
module.exports={
    getProduct:(req,res)=>{
        res.json({products:products});
    },
    addProduct:(req,res)=>{
        var {name}=req.body;
        products.push({
            name,
            id:products.length
        });
        res.json({
            "success":true,
            "msj":"Se agrego correctamente"
        });
    },
    updateProduct:(req,res)=>{
        var {id}=req.params;
        var {name}=req.body;

        products.forEach((product,i) => {
            if(product.id===Number(id)){
                products.name=name;
                res.json({
                    "Success":true,
                    "Mjs":"El cambio se hizo correctamente"
                });
            }
        });
    },
    deleteProduct:(req,res)=>{
        var {id}=req.params;
        products.forEach((product,i) => {
            if(product.id===Number(id)){
                products.splice(i,1);
                res.json({
                    "Success":true,
                    "Mjs":"Se ha eliminado corerctamente el producto"
                });
            }
        });
    }
}