const math = (number1, number2, number3, number4) => {   // arrow function
    let a = number1 + number2 * 2;
    if (number3) {
        a += number3 - 5;
    }
    
    if (number4) {
        a *= number4;
    }
    return a;
};

export { math }; //me hadala tyena function eka wena file ekakata denna onenam export krnawa me file eke(object destructuer)
// export default math; 
// export { math ,abc , aaa}; // function godak hadala e hama function ekakma "," dala export karanna puluwn.anith file eken import krnna oni

