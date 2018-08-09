// interface Point
// {
//     x:number,
//     y:number
// }
// let message=(point,Point)=>{
// }
// message({
//     x=5,
//     y=10
// })
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("x" + this.x);
    };
    return Point;
}());
var point = new Point();
point.draw();
