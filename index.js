// const os = require('os'); //os package eka aragaththa(import) vidiya
// const path = require('path');

// import os  from "os"; //import karana aluth vidiya
// import path from "path";
// import os  from "node:os"; //mehema dammama kiyanne node ekenma os eka ganna kiyala(node wala thiyena package ekak aragannawanm)
import { dirname, join } from "node:path"; //file read karaddi path ekata join eka gnnath oni (join eken path module eka create karanawa)
import { readFile } from "fs"; //file ekak read karaganna meka import karagnna one
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const __dirname = dirname(__filename); // file read kraddi dana vidiya



// //------ os eken balagnna puluwan dewal------
// console.log(os.platform());
// console.log(os.version());
// console.log(__dirname); //directory eke full path eka ganna
// console.log(__filename); //filename ekath ekka path eka araganna


// //------ path eken balagnna puluwan dewal-------
// console.log(path.basename(__filename)); //filename eka vitharak ganna ona unoth
// console.log(path.extname(__filename)); //file extention eka ganna(html or css or js)

    
        // file read function
 readFile(join(__dirname, "myname.txt"), (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());  //txt file eke liyapuwa print wenwa console eke
    
});









