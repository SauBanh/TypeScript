// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     // const person = {
//     name: "Nguyen Tuan Anh",
//     age: 23,
//     hobbies: ["Sprots", "Cooking"],
//     role: [2, "author"],
// };

// let favoriteActivities: any[];
// favoriteActivities = ["Nguyen Tuan Anh", 23];

// // console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toLocaleUpperCase());
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role {
//     ADMIN,
//     READ_ONLY,
//     AUTHOR,
// }

enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = 100,
    AUTHOR = "AUTHOR",
}

const person = {
    name: "Nguyen Tuan Anh",
    age: 23,
    hobbies: ["Sprots", "Cooking"],
    role: Role.ADMIN,
};

if (person.role == Role.ADMIN) {
    console.log("Administrator");
}
