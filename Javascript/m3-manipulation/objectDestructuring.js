//object desctructuring -> guardar as infos do objeto em uma variavel

let person = {
    name: 'boni',
    lastName: 'silva',
    age: 99,
    social: {
        facebook: 'boniweb',
        instagram: 'boninsta'
    },
    fullName: function(){
        return `${this.name} ${this.lastName}`;
    }
};

/*
console.log(person.age);
console.log(person.social.facebook);
console.log(person.fullName());


let age = person.age;
let facebook = person.social.facebook;
let fullName = person.fullName();

console.log(age, facebook, fullName );
*/
//neste formato, as variaves puxam o mesmo nome do atributo do objeto
let { name, lastName, age} = person;

//declarando de forma a modificar o nome da variavel ou valor da variavel
//let { social:redes,  age = 0 } = person;