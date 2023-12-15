const React = require('react')

function New() {
    return (
        <>
            <h1>Create new pokemon</h1>
            <form action="/pokemon/new" method='POST'>
                <label className='field'>
                    Name <input name="name" />
                </label>
                <br />
                <label className='field'>
                    Image <input name="img" />
                </label>
                <br />
                <button>
                    Submit
                </button>
            </form>
            <br />
            <a href="/pokemon">Go back</a>
        </>
    )
}

module.exports = New