const ImageKit=require("@imagekit/nodejs");
const imagekit=new ImageKit({
    
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadimage(buffer){
    try{
        const response=await imagekit.files.upload({
            file:buffer.toString('base64'),
            fileName:"image.jpg",
        });
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}
module.exports=uploadimage;