const yargs = require("yargs")
  
const data10 = require ("./student")


 yargs.command({
    command:"add",
    describe:"adding yarges",
    builder:{
        fname:{
            describe:"adding the frist name",
            domindOption:true,
            type:"string"
        },
         lname:{
            describe:"adding the last namr ",
            domindOption:true,
            type:"string"
        }
 },
    handler:(x)=>{
        
        data10.addClient(x.fname,x.lname,x.city,x.age,x.id,x.course1,x.course2,x.course3,x.course4,x.course5,x.course6)
    }
 })


 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        data10.deleteClient(x.id)
    }
 });


 
 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        data10.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data10.listData()
    }
 })

yargs.parse();
