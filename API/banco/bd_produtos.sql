-------------------Apagar tabelas-----------------------
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS categorias;

-------------------Criar tabelas------------------------
CREATE TABLE categorias (
    id   SERIAL PRIMARY KEY,
    nome VARCHAR(20)
);

CREATE TABLE produtos (
    id            SERIAL        PRIMARY KEY,
    imagem        VARCHAR(1000) NOT NULL,
    nome          VARCHAR(100)  NOT NULL,
    descricao     VARCHAR(500)  NOT NULL,
    id_categoria  INT REFERENCES categorias(id) NOT NULL,
    preco         DECIMAL(12,2) NOT NULL,
    quantidade_p  INT           NOT NULL, 
    quantidade_m  INT           NOT NULL,
    quantidade_g  INT           NOT NULL,
    desconto      INT           NOT NULL
);

-------------------Inserir dados------------------------

INSERT INTO categorias (nome)
VALUES
    ('Smoking'),
    ('Modern Fit'),
    ('Terno Conjunto'),
    ('Blazer');

INSERT INTO produtos (imagem, nome, descricao, id_categoria, preco, quantidade_p, quantidade_m, quantidade_g, desconto)
VALUES
    ('https://media.discordapp.net/attachments/1008727983223230494/1008728067188994098/unknown.png?width=491&height=634', 'Smoking Prata',                      'produto 1',  1,  500, 2, 5, 0,   0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008728216627843134/unknown.png?width=491&height=634', 'Smoking Vinho Prateado',             'produto 2',  1,  750, 0, 5, 10, 15),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008728475261227088/unknown.png?width=491&height=634', 'Smoking Azul Escuro',                'produto 3',  1,  500, 2, 0, 10, 10),
	('https://media.discordapp.net/attachments/1008727983223230494/1008728641582137435/unknown.png?width=497&height=642', 'Smoking Vermelho Sangue',            'produto 4',  1,  680, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008729063357173830/unknown.png?width=417&height=642', 'Smoking Preto',                      'produto 5',  1,  740, 2, 0, 10,  5),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008730638674841620/unknown.png?width=493&height=633', 'Terno Modern Fit Azul',              'produto 6',  2, 1500, 0, 5, 10,  0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008730793285275799/unknown.png?width=406&height=634', 'Terno Modern Fit Branco',            'produto 7',  2, 1500, 2, 5, 10,  0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008730954036162600/unknown.png?width=482&height=634', 'Terno Modern Fit Cinza Escuro',      'produto 8',  2, 2000, 0, 5, 10, 25),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731089252126720/unknown.png?width=489&height=642', 'Terno Modern Fit Cinza Navy',        'produto 9',  2, 2200, 2, 5, 10, 25),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731323717918740/unknown.png?width=500&height=642', 'Terno Modern Fit Cinza Claro',       'produto 10', 2, 1200, 2, 5,  0,  5),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731490915463208/unknown.png?width=489&height=642', 'Terno Modern Fit Areia',             'produto 11', 2, 2400, 2, 0, 10, 35),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731582162554923/unknown.png?width=489&height=642', 'Terno Modern Fit Marrom',            'produto 12', 2, 2700, 2, 5, 10, 15),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731741508337665/unknown.png?width=412&height=642', 'Terno Modern Fit oliva',             'produto 13', 2, 2550, 2, 5, 10,  5),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731862509830194/unknown.png?width=412&height=642', 'Terno Modern Fit Vermelho Sangue',   'produto 14', 2, 2200, 2, 5, 10, 25),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008734697427324948/unknown.png?width=519&height=634', 'Terno Conjunto Rosa',                'produto 15', 3, 3500, 2, 5, 10,  8),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008735052999430174/unknown.png?width=362&height=634', 'Terno Conjunto Azul Claro',          'produto 16', 3, 4000, 0, 5, 10,  0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008735264186847232/unknown.png?width=362&height=634', 'Terno Conjunto Cinza Xadrez',        'produto 17', 3, 4000, 2, 5, 10, 10),
	('https://media.discordapp.net/attachments/1008727983223230494/1008735690156150784/unknown.png?width=415&height=642', 'Terno Conjunto Beje Xadrez',         'produto 18', 3, 2000, 2, 5, 0,  15),
	('https://media.discordapp.net/attachments/1008727983223230494/1008736245255524362/unknown.png?width=390&height=642', 'Terno Conjunto Cinza Escuro Xadrez', 'produto 19', 3, 3000, 2, 0, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008736571618512987/unknown.png?width=428&height=642', 'Terno Conjunto Burg Xadrez',         'produto 20', 3, 4000, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008736679856705645/unknown.png?width=428&height=642', 'Terno Conjunto Navy Xadrez',         'produto 21', 3, 5000, 0, 5, 10, 25),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008740609793740871/unknown.png?width=498&height=634', 'Blazer Algodão Azul Claro',          'produto 22', 4, 1800, 0, 5, 10, 60),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008740789976830055/unknown.png?width=422&height=634', 'Blazer Slim Fit Preto Cetim',        'produto 23', 4, 2000, 2, 5, 0,   0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008741114108444834/unknown.png?width=569&height=634', 'Blazer Slim Vinho Cetim',            'produto 24', 4, 2500, 0, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008741669585305631/unknown.png?width=428&height=642', 'Blazer Slim Fit cinza',              'produto 25', 4, 1500, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008741797452841000/unknown.png?width=515&height=642', 'Blazer Veludo Bege',                 'produto 26', 4, 2550, 2, 0, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008741951685804093/unknown.png?width=428&height=642', 'Blazer Veludo Preto',                'produto 27', 4, 2580, 0, 5, 0,   0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008742222889484378/unknown.png?width=435&height=642', 'Blazer Slim Fit grafite',            'produto 28', 4, 2140, 0, 2, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008742427600883772/unknown.png?width=428&height=642', 'Blazer Slim Fit Azul Marinho',       'produto 29', 4,  500, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008742675383595078/unknown.png?width=398&height=642', 'Blazer algodão skinny bege',         'produto 30', 4,  700, 2, 5, 10,  0);