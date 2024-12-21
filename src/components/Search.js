import React from 'react';
import './Search.css';

class Search extends React.Component
{
    constructor(props)
    {
        super(props);
        
        // Устанавливаем начальное состояние
        this.state={
            search: "Matrix",
            type:   "all",
            page:   1,
            totalPages: Math.ceil((props.total || 0) / 10) // Рассчитываем количество страниц на основе переданного props.total
        }

        
    }

    // для обновления конечного количества страниц после фильтрации
    componentDidUpdate(prevProps, prevState) {
        // Если total или фильтр изменились, обновляем totalPages
        if (prevProps.total !== this.props.total || prevState.type !== this.state.type) {
            this.setState({ totalPages: Math.ceil((this.props.total || 0) / 10) });
        }
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

        goToPage = (page) => {
            this.setState(
                { page },
                () => this.props.searchMovie(this.state.search, this.state.type, page)
            );
        };

        renderPaginationButtons = () => {            

            const { page, totalPages } = this.state;
            const totalButtons = 5;
            const halfButtons = Math.floor(totalButtons / 2);

            //let позволяет нам изменять значение переменных в зависимости от условий
            let startPage = Math.max(1, page - halfButtons);  
            let endPage = Math.min(totalPages, startPage + totalButtons - 1);

            // Если количество отображаемых кнопок меньше, чем totalButtons 
            if (endPage - startPage + 1 < totalButtons) {
                 startPage = Math.max(1, endPage - totalButtons + 1); 
                } 
            // Убедимся, что отображается минимум totalButtons кнопок 
            if (totalPages <= totalButtons) {
                 startPage = 1; 
                 endPage = totalPages; 
                }

            return { startPage, endPage, page };

        };

    render()
    {
        const { page, totalPages } = this.state;
        const { startPage, endPage } = this.renderPaginationButtons();
        
        const buttons = []; 
        for (let i = startPage; i <= endPage; i++) {
             buttons.push(
                 <button 
                    key={i} 
                    className={`btn2 ${i === page ? 'active' : ''}`} 
                    onClick={() => this.goToPage(i)} 
                    > 
                    {i} 
                 </button> 
                 ); 
                }

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
                    {/* Кнопка First */}
                    <button
                        className="btn"
                        onClick={() => this.goToPage(1)}
                        disabled={page === 1}
                    >
                        First
                    </button>

                    {/* Кнопка Previous */}
                    <button
                        className="btn"
                        onClick={this.prevPage}
                        disabled={this.state.page === 1} // Отключаем кнопку, если текущая страница 1
                    >
                        Previous
                    </button >
                   
                    {/* Кнопки пагинации */}                    
                    {buttons}

                    {/* Кнопка Next */}
                    <button
                        className="btn"
                        onClick={this.nextPage}
                        disabled={this.state.page === this.state.totalPages} // Отключаем кнопку, если текущая страница последняя
                    >
                        Next
                    </button>

                    {/* Кнопка Last */}
                    <button
                        className="btn"
                        onClick={() => this.goToPage(totalPages)}
                        disabled={page === totalPages}
                    >
                        Last
                    </button>
                </div>

            </>
        )
    }
}
export default Search;