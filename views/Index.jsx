const React = require('react')

function Index({ pokemon }) {
    return (
        <>
            <h1>See All The Pokemon!</h1>
            <a href="/pokemon/new">Create new pokemon</a>
            <ul id="pokemon-list">
                {pokemon.map((p, i) => (
                    <li key={p.name} className="pokemon-li">
                        <a href={`/pokemon/${i}`}>
                            <h2>{p.name}</h2>
                        </a>
                        
                    </li>
                ))}
            </ul>
        </>
    )
}

module.exports = Index