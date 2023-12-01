// type Conbinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";

// function conmbine(
//     input1: Conbinable,
//     input2: Conbinable,
//     // resultConversion: string,
//     resultConversion: ConversionDescriptor
// ): Conbinable {
//     let result: Conbinable;
//     if (
//         (typeof input1 === "number" && typeof input2 === "number") ||
//         resultConversion === "as-number"
//     ) {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     // if (resultConversion === "as-number") {
//     //     return +result;
//     // } else {
//     //     return result.toString();
//     // }
//     return result;
// }

// const conbineAges = conmbine(30, 26, "as-number");
// console.log(conbineAges);

// const conbineStringAges = conmbine("30", "26", "as-number");
// console.log(conbineStringAges);

// const conbineNames = conmbine("Sau", "Banh", "as-text");
// console.log(conbineNames);

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(23, 19));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;

// console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});
