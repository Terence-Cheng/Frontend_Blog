function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(101);

printId("202");

printId({ myID: 22342 }); // error

function printId2(id: number | string) {
    console.log(id.toUpperCase()); 
    // error, Property 'toUpperCase' does not exist on type 'string | number'. 
    // Property 'toUpperCase' does not exist on type 'number'.
}