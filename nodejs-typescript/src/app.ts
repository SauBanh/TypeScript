let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 23;
userInput = "Nguyen Tuan Anh";
// userName = userInput;

if (typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, code: code };
}

generateError("An error occurred!", 500);
