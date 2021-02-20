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

///////////////////////////////////////////////////////////////////////////////////////////2

let pessoa = {
    nome: 'ana',
    sobrenome: 'pereira',
    idade: 18,
    redesocial: {
        face: 'pereiraana',
        insta: {
            url: '@anainsta',
            seguidores: 1000
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};
/*
//filtrando 1
let { face, insta } = pessoa.redesocial;
console.log(face, insta)


//filtrando 2 (selecionando elemento dentro do objeto, dentro do objeto)
let { nome, idade, redesocial:{ insta } } = pessoa;
console.log(nome,idade, insta);
*/

//filtrando 3 objeto (3 camadas)
//pegando o dado url com saida de nome instagram
let { nome, idade, redesocial:{insta:{url:instagram}} } = pessoa;
console.log(nome,idade, instagram);

//funcoes x objetos
/*
function dadosPadrao(obj){
    return obj.nome+" "+obj.sobrenome+" "+obj.idade+" "+obj.redesocial.face;
}
console.log(dadosPadrao(pessoa));
*/
function dadosPadrao({nome, sobrenome, idade = 18, redesocial:{insta:{url:instagram}}}){
    return `${nome} ${sobrenome} ${idade} Siga em ${instagram} `;
}
