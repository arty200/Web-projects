select * from estados where id = 31
insert into cidades (nome,area,estado_id)
values('Campinas',795,31)

insert into cidades (nome,area,estado_id)
values('Niterói',133.9,25)

insert into cidades (nome,area,estado_id)
values('Caramuru',920,(select id from estados where sigla ='PE'))

insert into cidades (nome,area,estado_id)
values('Juazero do Norte',173.856,(select id from estados where sigla='CE'))
select * from cidades