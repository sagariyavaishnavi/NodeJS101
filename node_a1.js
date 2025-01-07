//Synchronously 

//Q1 Folder space_project created 
const fs = require("fs");
fs.mkdirSync("space_project");

//Q2 create a file log.txt and add the line -using 
// const fs = require("fs");
// let data2 = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.";
// const path= './space_project/log.txt'
// fs.writeFileSync(path, data2);


//Q3 replace the line in the log.txt file 
// const fs = require("fs");
// let data3 = "ISRO has started working on Gaganyaan.";
// const path= './space_project/log.txt'
// fs.writeFileSync(path, data3);

//Q4 Append another line to the log.txt file 
// const fs = require("fs");
// let data4 = "\n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
// const path= './space_project/log.txt'
// fs.appendFileSync(path, data4);


// Q5: Rename file
// const fs = require("fs");
// fs.renameSync('space_project/log.txt', 'space_project/update.txt');
// console.log('File renamed synchronously.');

// Q6: Read file and log data
// const fs = require("fs");
// const data = fs.readFileSync('space_project/update.txt', 'utf8');
// console.log('Data read synchronously:', data);
// console.log('We are excited');

// Q7: Delete file
// const fs = require("fs");
// fs.unlinkSync('space_project/update.txt');
// console.log('File deleted synchronously.');

// Q8: Delete folder
// const fs = require("fs");
// fs.rmdirSync('space_project');
// console.log('Folder deleted synchronously.');



//Asynchronously
//Q1 Folder space_project created 
// const fs = require("fs");
// fs.mkdir(space_project,(err)=>{
//     if(err){
//         throw err
//     }  
// })

 //Q2 create a file log.txt and add the line 
// const fs = require("fs");
// const path= './space_project/log.txt'
// let data2='\n ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.'
// fs.appendFile(path, data2,(err)=>{
//     if(err){
//         throw err
//     }  
// })

//Q3 replace the line in the log.txt file 
// const fs = require("fs");
// let data3="ISRO has started working on Gaganyaan.";
// const path="./space_project/log.txt";
// fs.writeFile(path,data3,(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("Data added successfully!");
//     }
// });


//Q4 Append another line to the log.txt file 
// const fs=require("fs");
// let data4 ="\n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
// const path="./space_project/log.txt";
// fs.appendFile(path,data4,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Data added successfully!");
//     }
// });

//Q5 Rename the log.txt file to update.txt
// const fs=require("fs");
// fs.rename("./space_project/log.txt","./space_project/update.txt",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File renamed successfully!");
//     }
// });

//Q6 Read the update.txt file and display the data
// const fs=require("fs");
// let data="./space_project/update.txt"
// fs.readFile(data,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//         console.log("We are excited");
//     }
// });

//Q7 Delete the file update.txt
// const fs=require("fs");
// fs.unlink("./space_project/update.txt",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File deleted successfully! Asynchronously");
//     }
// });

// //Q8 Delete the folder space_project
const fs=require("fs");
fs.rmdir('space_project',(err)=>{
    if(err){
        throw err
    }
    console.log('Folder deleted asynchronously.')
})