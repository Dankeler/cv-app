import { useEffect, useState } from "react";
import Pokemon from "./singlePokemon"

function Pokemons() {
    const [data, setData] = useState([]);
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    const [selectedPokemons, setSelectedPokemons] = useState([])

    const fetchPokemons = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
            const dataArr = await response.json();
            const randomArr = [];
            const usedNames = [];
    
            for (let i = 0; i < 10; i++) {
                let randomIndex;
                let randomResult;
    
                // Ensure unique name
                do {
                    randomIndex = Math.floor(Math.random() * dataArr.results.length);
                    randomResult = dataArr.results[randomIndex];
                } while (usedNames.includes(randomResult.name));
    
                usedNames.push(randomResult.name);
                randomArr.push(randomResult);
            }

            const resultsMap = randomArr.map(async (result) => {
                try {
                    const pokemonResponse = await fetch(result.url)
                    const pokemonData = await pokemonResponse.json()

                    return {
                        name: result.name,
                        sprite: pokemonData.sprites.front_default
                    }

                } catch (error) {
                    console.log("pokemon sprite fetch error")
                }
            })
            const allPokemons = await Promise.all(resultsMap)
            setData(allPokemons);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [selectedPokemons])



    const handleClick = (pokemonName) => {
        setSelectedPokemons((prevSelectedPokemons) => [...prevSelectedPokemons, pokemonName]);
        checkPokemons(pokemonName)
    };

    function checkPokemons(pokemonName) {
        console.log(score)
        console.log(highScore)
        console.log(selectedPokemons)
        if (selectedPokemons.includes(pokemonName)) {
            console.log("You lose!")
            setSelectedPokemons([])
            setScore(0)
        } else {
            setScore((prevScore) => {
                const newScore = prevScore + 1;
                
                if (newScore > highScore) {
                  setHighScore(newScore);
                }

                return newScore
              });
        }
    }

    return (
        <div className="container">
            <div className="scores">
                <div className="score">
                    <h2><b>Score: </b>{score}</h2>
                </div>
                <div className="highScore">
                    <h2><b>High Score: </b>{highScore}</h2>
                </div>
            </div>
            <div className="pokemons">
                {data.map((pokemon) => (
                    <Pokemon key={pokemon.name} name={pokemon.name} sprite={pokemon.sprite} onClick={() => handleClick(pokemon.name)}/>
                ))}
            </div>
        </div>
    );

    
}

export default Pokemons;