import React from 'react';
import './Search.css';

class Search extends React.Component
{
    constructor(props)
    {
        super(props);
        //this.setState({totalPages:props.total/10})
        this.state.totalPages=props.total
    }
    state=
    {
        search: "Terminator",
        type:   "all",
        page:   1,
        totalPages: 1
    }

    handleKey = (event) =>
    {
        if(event.key === 'Enter')
        {
            console.log('Enter was pressed');
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }
    handlerFilter = (event) =>
    {
        this.setState
        (
            () => ({type:event.target.dataset.type}),
            () => {this.props.searchMovie(this.state.search, this.state.type);}
        );

    }

    prevPage = () =>
    {
        this.setState
        (
            () => (this.state.page > 1 ? {page:this.state.page - 1} : {page:1}),
            () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
        )
    }

    nextPage = () =>
        {
            this.setState
            (
                () => (this.state.page < this.state.totalPages ? {page:this.state.page + 1} : {page:this.state.totalPages}),
                () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
            )
        }

    render()
    {
        console.log('Search render')
        return(
            <>
                    <div className="radio">
                        <div>
                            <input type="radio" 
                                   name="type" 
                                   id="all"
                                   data-type="all" 
                                   checked={this.state.type === 'all'} 
                                   onChange={this.handlerFilter} 
                                   />
                                   <label htmlFor="all"><span>All</span></label>
                        </div>
                        <div>
                            <input type="radio" 
                                   name="type" 
                                   id="movies"
                                   data-type="movie"//см в файле json
                                   checked={this.state.type === 'movie'}//см в файле json
                                   onChange={this.handlerFilter}
                                   />
                                   <label htmlFor="movies"><span>Movies</span></label>
                        </div>
                        <div>
                            <input type="radio" 
                                   name="type" 
                                   id="series"
                                   data-type="series"//см в файле json
                                   checked={this.state.type === 'series'} //см в файле json
                                   onChange={this.handlerFilter}
                                   />
                                   <label htmlFor="series"><span>Television series</span></label>
                        </div>
                        <div>
                            <input type="radio" 
                                   name="type" 
                                   id="games"
                                   data-type="game"//см в файле json
                                   checked={this.state.type === 'game'} //см в файле json
                                   onChange={this.handlerFilter}
                                   />
                                   <label htmlFor="games"><span>Games</span></label>
                        </div>                     
  
                    </div>

                <div className="search">
                    <input
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search:e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className='btn' onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
                        Search
                    </button>                   
                </div>

                <div className="navigator">
                    <button className="btn" onClick={this.prevPage}>Previous</button>
                    <button className="btn" onClick={this.nextPage}>Next</button>
                </div>

            </>
        )
    }
}
export default Search;