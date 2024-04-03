

let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportx = Object.assign({},passport);
passportx.name = "Ivan";

console.log(passport.name);
console.log(passportx.name);

