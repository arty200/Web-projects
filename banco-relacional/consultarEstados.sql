select * from estados

select nome,sigla from estados

select sigla,nome as 'Nome do Estado' from estados where regiao = 'Sul'

--Mostra dados ordenados pela população
select nome,regiao from estados where populacao >= 10 order by populacao desc