# FILTROS ORDEN BUSCA

## OBJETIVOS
- FUNCOES DE ARRAY (MAP FILTER)
- FILTROS EM REACT
- ENCADENAMENTO DE FUNCOES DE ARRAY


OBJETIVOS
1-APLICAR FILTRAGEM por ID
2-APLICAR FILTRAGEM por includes em campo INPUT TEXT 
3-APLICAR FILTRAGEM por CATEGORIA

RESOLUCAO
1) FILTRAGEM POR ID
 1.1 - Criar estado para searchId em app.js
 1.2 - Passar a pokemonCard os valores do estado para searchId={searchId} e setSearchId={setSearchId}
 1.3 - Desistruturar props {searchId}, {setSearchId} em PokemonCard
 1.4 - Filter em App.js para filtrar caso searchId 
- Adaptacao outros contextos de 0 inicial nulo
(pokemon.id === "00" + searchId || pokemon.id === "0" + searchId ))
ou 
includes
ou 
caso usado **busca por id exato** verificando se busca foi  implementada retorna pokemon de id exato em caso de nao existir busca inclui todos