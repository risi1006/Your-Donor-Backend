import Post from "../models/Post";

const PostController = {
    async createPost(req, res, next){
        let {title, description} = req.body;
        let email = req.email;
        console.log(title, email);
        try{
            await Post.insertMany({title: title, description : description, created_by : email}, (error, data)=>{
                console.log(error, data)
                if(error){
                    res.send('Failed to push the post');
                } else{
                    res.send('post submitted susccessfully');
                }
            });
        } catch(err){
            res.send(err);
        }
    },

    async fetchPost(req, res, next){
        let email = req.email;
        console.log(email)
        try{
            // res.send(email)
            let data = await Post.find({created_by : email})
            res.send(data)
            // await Post.find({}, (err, data)=>{
            //     if(err){
            //         res.send('Error in fetching data');
            //     } else {
            //         res.send(data);
            //     }
            // })
        } catch(err){
            res.send(err)
        }
    }
}


export default PostController;