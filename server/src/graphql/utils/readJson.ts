import fs from "fs";
import path from "path";


export const readJson=(fileName:string)=>{
    const filePath = path.join(process.cwd(),"src/data", `${fileName}.json`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
}
