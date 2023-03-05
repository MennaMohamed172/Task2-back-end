const fs  = require("fs")
const addClient=(fname,lname,city,age,id,course1,course2,course3,course4,course5,course6)=>{
    const allData =loadData()
    const allsubjects=[course1,course2,course3,course4,course5,course6] 
     allsubjects.reduce((a,b)=>a+b)
     course1+course2+course3+course4+course5+course6
    
     const sum= allsubjects.reduce((a,b)=>a+b)
     const avg = Math.round(sum*100 /600)
      const dplicatedData= allData.filter((obj)=>{
        return  obj.id ===id
      }
      )
     console.log(dplicatedData)

     if(dplicatedData.length==0){


     allData.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age,
       
        course1:course1,
        course2:course2,
        course3:course3,
        course4:course4,
        course5:course5,
        course6:course6,
        sum:sum,
        avg:avg
        

     })
       
  saveAllData(allData)
}else {
  console.log('error duplicated id')
}
}
// ////////////////////////////////////////////////////////////////////////////
 const deleteClient = (id) => {
        const allData = loadData()

        const dataToKeep = allData.filter ((obj) => {
             return obj.id !== id 
        })
        saveAllData(dataToKeep)
 }

// //////////////////////////////////////////////////////////////////
      
        const readData = (id) => {
            const allData = loadData()

            const itemNeeded = allData.find((obj) => {
                 return obj.id == id 
            })
            console.log(itemNeeded)

        }
// //////////////////////////////////////////////////////////////////

    const listData = () => {
        const allData = loadData()

        allData.forEach ((obj) => {
            console.log(obj.fname , obj.city, obj.age)
        })
    }
const loadData = () => {
   
        try {
            const dataJson = fs.readFileSync ("data2.json").toString()
            return JSON.parse (dataJson)
        } catch {
                return []
        }
    
      }
    // ///////////////////////////////////////////////////////////////////
    
      const saveAllData = (allData) => {
          const saveAllDataJson = JSON.stringify(allData) 
          fs.writeFileSync("data2.json" , saveAllDataJson)
      }



// //////////////////////////////////////////////////////////////////////

module.exports = {
  addClient,
  deleteClient,
  readData,
  listData,

};