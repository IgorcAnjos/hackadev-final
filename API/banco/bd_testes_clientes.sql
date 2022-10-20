------------------ Select Generico --------------------
--------------- Forma de pagamento ----------------

-- SELECT *
-- FROM forma_pagamento;

--------------- Usuarios & Dados ------------------

-- SELECT *
-- FROM usuarios 

-- SELECT *
-- FROM dados_usuarios

-------------------- Pedidos ----------------------

-- SELECT *
-- FROM pedidos

-------------------- Compras ----------------------

-- SELECT *
-- FROM compras

--------------- Select Personalizados -----------------

---dados conjuntos de (usuarios & dados_usuarios)---

-- SELECT u.id, u.ativo, u.email, u.senha, du.cep, du.nome_completo, du.pais, du.cep, du.logradouro, du.cidade, du.estado, du.complemento, du.data
-- FROM usuarios as u 
-- join dados_usuarios as du
-- on du.id_usuario = u.id

--------informações dos pedidos de um cliente--------

-- SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora"
-- FROM pedidos as pd
-- JOIN status_pedidos as sp
-- ON pd.status = sp.id
-- JOIN forma_pagamento as fm
-- ON pd.id_forma_pagamento = fm.id
-- WHERE pd.id_usuario = 2

--------informações de um  pedido--------

-- SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora"
-- FROM pedidos as pd
-- JOIN status_pedidos as sp
-- ON pd.status = sp.id
-- JOIN forma_pagamento as fm
-- ON pd.id_forma_pagamento = fm.id
-- WHERE pd.id = 3

------------- informações dos pedidos ----------------

-- SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora"
-- FROM pedidos as pd
-- JOIN status_pedidos as sp
-- ON pd.status = sp.id
-- JOIN forma_pagamento as fm
-- ON pd.id_forma_pagamento = fm.id

--------------- produtos de um pedido ----------------
--  SELECT *
--  FROM compras
--  where id_pedido = 4

--------------- Updates Personalizados -----------------

----- Atualização de compra finalizada -----

-- UPDATE pedidos
-- SET status = 1
-- WHERE id = 3;

------ Atualização de inativação de usuario ------


-- UPDATE usuarios
-- SET ativo = false
-- WHERE id = 3;

-- select * FROM usuarios