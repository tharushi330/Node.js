const os = require('os'); //os package eka aragaththa(import) vidiya
const path = require('path');

// import os  from "os"; //import karana aluth vidiya
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);



//------ os eken balagnna puluwan dewal------
console.log(os.platform());
console.log(os.version());
console.log(__dirname); //directory eke full path eka ganna
console.log(__filename); //filename ekath ekka path eka araganna


//------ path eken balagnna puluwan dewal-------
console.log(path.basename(__filename)); //filename eka vitharak ganna ona unoth
console.log(path.extname(__filename)); //file extention eka ganna(html or css or js)







