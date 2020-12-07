const { update } = require('../models/Food');
const FoodModel = require('../models/Food');

module.exports = {

    createProducts :async(req,res)=>{

            const foodName = req.body.foodName;
            const days = req.body.days;

            const food = new FoodModel({ foodName :foodName , daysSinceIAte : days});

            try{
                await food.save();
                res.send("inserted data in database");
            } catch (err) {
                console.log(err);
            }
        },


        readProducts :async(req,res)=>{

            FoodModel.find({} , (err ,result) => {
                if(err){
                res.send(err)
                }
                 res.send(result)
            });

        },


        
        updateProducts : async(req,res)=>{
            const newFoodName = req.body.newFoodName;
            const id = req.body.id;

             try{
               await FoodModel.findById(id ,(err,updatedFood) =>{
                    updatedFood.foodName = newFoodName;
                    updatedFood.save();
                    res.send("updated");
                });
            } catch (err) {
                console.log(err);
            }
        },

        deleteProducts : async(req,res)=>{
            const id = req.params.id;
            await FoodModel.findByIdAndRemove(id).exec();
            res.send('deleted');
        }

        
}



        
