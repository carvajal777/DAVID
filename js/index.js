import { CRUD } from "./CRUD.js";

function app(){
    let crud = new CRUD("example");
    crud.create([1,2,3]);
    crud.create({ message:"Hi world"});

    let crud2 = new CRUD("example");
    console.log(crud2.readALL());
}
app();