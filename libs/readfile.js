import {fileURLToPath} from "node:url";
import {join, dirname} from "node:path";
import {readFile} from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFileFunction = (path, myfunction = ()=>{}) => {
    readFile(join(__dirname, "../", path),{encoding:"utf-8"},(error, result)=>{
        if(error){
            myfunction(error, result = null);
        }else{
            myfunction(error = null, result);
        }
    });
};

export {readFileFunction};

