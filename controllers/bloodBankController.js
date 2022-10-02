import quadtree from "./quadtreeController";
import {Point, Circle} from 'js-quadtree';

const bloodBankController = {
    async fetchBloodBank(req, res, next){
        let {lat, lon} = req.body;
        const results = await quadtree.query(new Circle(lat, lon, 100));
        res.send(results);
    },
    async updateBloodBank(req, res ,next){
        let {lat, lon, data} = req.body;
        try{
            quadtree.insert(new Point(lat, lon, {custom : data}));
            // await UserLocation.insertMany({userName : data.userName, lat : lat, lon : lon, mobile : data.mobile, bloodGroup : data.bloodGroup});
            res.status(200).send('Data inserted Successfully');
        } catch(err){
            res.status(401).send('Data Insertion failed');
        }
    }
}

export default bloodBankController;