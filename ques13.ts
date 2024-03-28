//13.Your Own Array.Think of your favourite mode of transpotation ,suc as a motorcycle or a car and make a list that stor several examples.Use a list to print a series of statments about these items,Such as I would liake to own a Honda motor cycle.


let transport:string[] = ["Honda motarcycle", "Corolla", "Hilux"];
transport.map((item) =>{
    console.log(`I would like to own a ${item}.`)
})