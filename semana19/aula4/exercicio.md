### EXERCICIO 1
```
a) É um valor único que referencia outra tabela.
```
```
b)INSERT INTO rating (id, comment, rate, movie_id)
VALUES(
"001",
"Filme bom pra por seus gatos para assistirem!",
9.1,
"001"
);
```
```
c)	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_gabriela_salvo`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`))	0,136 sec

 O erro nos diz que a referencia de chave estrangeira não existe para efetuarmos a associação.
```

```
d) ALTER TABLE movie DROP column rating;
```

```
e)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_gabriela_salvo`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`))

```

### EXERCICIO 2 

```
a)Estamos criando uma tabela que tera os atores dos filmes onde setamos nossa coluna movie_id como FOREIGN KEY com a referência da coluna id da tabela Movie e tambem setamos a actor_id como FOREIGN KEY e como referência a coluna id da tabela Actor
```

```
b)
```