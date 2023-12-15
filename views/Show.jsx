const React = require('react')

/*
    / = root
    ./ = current folder
    ../ = previous folder
*/

function Show({ p }) {

    return (
        <>
            <h1>Gotta catch 'em all</h1>
            <div id="pokemon">
                <h2>{p.name}</h2>
                <img src={p.img} alt={`Image of ${p.name}`} />
                <br />
                <a href={`/pokemon`}>Go back</a>
            </div>
        </>
    )
}

module.exports = Show