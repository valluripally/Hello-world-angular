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
class Point{
    x:number;
   y:number;
   draw()
   {
       console.log("x"+this.x);
   }  
}
let point=new Point();
point.x=1;
point.draw();
