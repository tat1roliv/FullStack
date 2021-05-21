CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT, 
    nome VARCHAR(20) NOT NULL,
    nascimento DATE
);

INSERT INTO pessoas (nome,nascimento) VALUES ('x','2003-01-31')
INSERT INTO pessoas (nome,nascimento) VALUES ('y','2020-09-30')
INSERT INTO pessoas (nome,nascimento) VALUES ('z','2000-08-11')
 