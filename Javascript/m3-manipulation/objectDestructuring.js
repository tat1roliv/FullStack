//object desctructuring

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

console.log(person.age);
console.log(person.social.facebook);
console.log(person.fullName());