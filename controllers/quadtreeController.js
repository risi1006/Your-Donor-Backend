import {QuadTree, Box, Point, Circle} from 'js-quadtree';
import UserLocation from '../models/UserLocation';

const quadtree = new QuadTree(new Box(0, 0, 1000, 1000));

export default quadtree;


// quadtree.insert(new Point(100, 200, {custom: 'data'}));
// quadtree.insert(new Point(123, 200, {custom: 'risi'}));
// quadtree.insert(new Point(75, 120, {custom: 'ritesh'}));
// quadtree.insert(new Point(90, 90, {custom: 'singh'}));

// const results = quadtree.query(new Circle(50, 50, 100));
// console.log(results)