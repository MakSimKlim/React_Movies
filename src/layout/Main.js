import React from 'react';
import MovieList from '../components/MovieList';

import './Main.css';

//https://www.omdbapi.com/
//https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=

class Main extends React.Component
{
    state = {
        movies:[]
    }
    componentDidMount()
    {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=bf480b72&s=terminator')
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search}))   
    }
    render()
    {
        const {movies} = this.state;
        return(
            <div className="main">
                <div className="wrap">
                    {
                        //this.state.movies.length ? <MovieList movies={movies}/> : <h3>Loading data...</h3>
                        //<MovieList movies={movies}/>
                        movies.length ? <MovieList movies={movies}/> : <h3>Loading data...</h3>
                    }
                </div>
            </div>
        )
    }

}

export default Main;