import {readFileFunction} from "./libs/readfile.js";
import {writeFileFunction} from "./libs/writefile.js"

readFileFunction('read.txt',(readError, readResult)=>{
    if(readError){
        console.log(readError);
    }else{

        const data = String(readResult).split(" ");

        const command = data[0];

        const fileName = data[data.length-1];

        const content =  data.slice(1, data.length-1).join(" ");

        if(command === 'write'){
            writeFileFunction(fileName,content+"\n",(writeResult)=>{
                console.log(writeResult);
            });
        }else{
            console.log("Not Command !");
        }

    }
});



