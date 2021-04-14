alter table empresas modify cnpj varchar(14);

insert into empresas(nome,cnpj) values ('Bradesco', 2545646851),('Vale-do-rio-salgado',1561532),('Ktorze',5135651);

desc empresas;
desc prefeitos;

insert into empresas_unidades (empresa_id,cidade_id,sede) values (1,1,1),(1,2,0),(2,1,0),(2,2,1);