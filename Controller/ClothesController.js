const Clothes = require('../Modals/Clothes');

const getAllClothes = async (req, res ,next) =>
{
    let clothes;
    try{
       clothes = await Clothes.find();
    }catch(err)
    {
       console.log(err);
    }
    if(!clothes){
       return res.status(404).json({message:"No products found"});
    }
    return res.status(200).json({clothes});
}
const addClothes = async (req, res, next )=>
{ 
    const  {name ,description ,gender , price  ,image}=req.body;
    let clothes ;
    try{
        clothes= new Clothes({
            name ,
            description,
            gender,
            price,
            image
        });
        await clothes.save();

    }catch(err)
    {
        console.log(err);
    }
    if(!clothes)
    {
        return res.status(500).json({message :'Unable to add this clothes'});
    }
    return  res.status(201).json({clothes});
};

const getById = async (req, res , next)=>
{
    const id = req.params.id;
    let clothes;
    try{
        clothes= await Clothes.findById(id);
    }catch(err)
    {
        console.log(err);
    }
    if(!clothes)
    {
        return res.status(404).json({message :'No Clothes has this id'});
    }
    return  res.status(200).json({clothes});

};
const updateClothes = async(req, res, next)=>
{
    const id = req.params.id;
    const  {name  ,description , gender, price ,image}=req.body;
    let book ;
    try{
        Clothes = await Clothes.findByIdAndUpdate(id,{
            name,
            description,
            gender,
            price,
            image

        });
        Clothes = await Clothes.save();
    }catch(err)
    {
        console.log(err);
    }
    if(!Clothes)
    {
        return res.status(404).json({message :'No Clothes has this id'});
    }
    return  res.status(200).json({Clothes});

};
const deleteClothes = async(req, res ,next)=>
{
    const id = req.params.id;
    let clothes;
    try{
        clothes = await Clothes.findByIdAndRemove(id);
    }catch(err)
    {
        console.log(err);
    }
    if(!clothes)
    {
        return res.status(404).json({message :'No Clothes has this id to delete it'});
    }
    return  res.status(200).json({message :'Clothes deleted successfully'});
};
exports.deleteClothes =deleteClothes;
exports.updateClothes=updateClothes;
exports.getById=getById;
exports.addClothes=addClothes;
exports.getAllClothes =getAllClothes;