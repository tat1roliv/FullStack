CREATE DATABASE brasil;
USE brasil;

CREATE TABLE municipios(
    nome TEXT,
    uf VARCHAR(2)
);

INSERT INTO municipios (nome, uf) VALUES ('Sorocaba', 'SP'), 
('Osasco', 'SP'), 
('Recife', 'PE'),
('Altamira', 'PA'),
('Palmas', 'TO');

SHOW tables;

UPDATE municipios SET uf = 'TT' WHERE nome = 'Palmas';

DELETE FROM municipios WHERE nome = 'Osasco';

SHOW tables;
