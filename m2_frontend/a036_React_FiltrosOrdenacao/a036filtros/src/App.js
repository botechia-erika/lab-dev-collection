import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
  
  body{
    background: #e6e6e6;
  }
`;
const CardsContainer = styled.div`
background-color: aliceblue;
width: 100%;
display: flex;
justify-content: space-evenly;
padding: 2rem;
margin: 30px 10vw;
border-radius: 1rem;
box-shadow: 0px 6px 10px 0px rgba(27, 71, 71, 0.4);
width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("")
  console.log(searchName);
  console.log(searchId);


  console.log(searchId);
  return (
    <>
      <GlobalStyle />
      <Header 
      searchId={searchId} 
      setSearchId={setSearchId}
      searchName={searchName}
      setSearchName={setSearchName}
      />
    
      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            console.log(pokemon);
           // if (searchId && pokemon.id.includes(searchId))
          
          if(searchId && pokemon.id === searchId)
          {
              return pokemon;
          }
          else if( !searchId)
          {
            return pokemons;
          }
     })
     
      .filter((pokemon=>{
        console.log(pokemon);
        if(searchName && 
          pokemon.name.english.toLowerCase().includes(searchName.toLowerCase()))
          {
            return pokemon;
          }
          else if(!searchName){
            return pokemons;
          }
      })

      .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            )
      })
  )})      </CardsContainer>
    </>
  );
}

export default App;
