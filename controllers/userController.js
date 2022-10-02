import quadtree from "./quadtreeController";
import {Point, Circle} from 'js-quadtree';
const userController = {
    async insertData(req, res, next){
        let {lat, lon, data} = req.body;
        // console.log(lat, lon, data)
        try{
            quadtree.insert(new Point(lat, lon, {custom : data}));
            await UserLocation.insertMany({userName : data.userName, lat : lat, lon : lon, mobile : data.mobile, bloodGroup : data.bloodGroup});
            res.status(200).send('Data inserted Successfully');
        } catch(err){
            res.status(401).send('Data Insertion failed');
        }
    },

    async fetchData(req, res, next){
        let {lat, lon, bloodGroup} = req.body;
        const results = await quadtree.query(new Circle(lat, lon, 100));
        // console.log(bloodGroup)
        let finalAns = results.filter(i=>{
            // console.log(i, i.data.custom.bloodGroup == bloodGroup)
            return i.data.custom.bloodGroup == bloodGroup
        });
        res.send(finalAns);
    }
}

export default userController;