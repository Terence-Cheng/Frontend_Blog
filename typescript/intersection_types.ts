interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);}
   
draw({ color: "blue", radius: 42 });

draw({ color: "red", raidus: 42 }); // error, Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'