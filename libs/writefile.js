import {fileURLToPath} from "node:url";
import {join, dirname} from "node:path";
import {writeFile} from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writeFileFunction = (path, data, myfunction = (result)=>{}) =>{
        writeFile(join(__dirname, "../", path),data,{encoding:"utf-8",flag:"a"},(error)=>{
            if(error){
                myfunction(error);
            }else{
                myfunction("The file has been written!");
            }
        });
};


export {writeFileFunction};
