------------------ Select Generico --------------------
--------------- Produtos ----------------

-- SELECT *
-- FROM produtos;

--------------- Categorias ----------------

-- SELECT * 
-- FROM categorias


--------------- Usuarios & Dados ------------------

---------------- Select Personalizado ------------------
---- Informações de produtos com suas categorias ----
SELECT
    pd.id,
    pd.imagem,
    pd.nome,
    pd.descricao,
    pd.id_categoria,
    ct.nome "nome_categoria",
    pd.quantidade_p,
    pd.quantidade_m,
    pd.quantidade_g,
    pd.desconto 
FROM produtos as pd
JOIN categorias as ct
on pd.id_categoria = ct.id

---- Informações de produtos com suas categorias ----