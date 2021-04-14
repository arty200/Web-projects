--Mostrando cada uma das regioes e suas respectivas populações
select regiao as 'Região', sum(populacao) as Total from estados group by regiao order by Total desc

--Mostra a população total
select  sum(populacao) as Total from estados


--Mostra a media da população por estado
select  avg(populacao) as Total from estados