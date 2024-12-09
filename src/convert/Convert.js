import React from 'react';

class Convert extends React.Component
{
    state = {number:10011011}
   
    update = (event) => this.setState({number:event.target.value})

   

    render()
    {
        
        return(
            <>
            <div>
                <form>
                   
                    Number:<input value={this.state.number} name="number" onChange={this.update}/>
                    <br/>
                    <p>Двоичное: </p> {/* <p>Двоичное: {binary}</p>  */}
                    <p>Десятичное: </p> {/* <p>Десятичное: {decimal}</p>*/}
                    <p>Шестнадцатеричное: </p> {/* <p>Шестнадцатеричное: {hexadecimal}</p>*/}

                </form>

                {/* <p>{this.state.number}</p> */}
                       
            </div>
            </>
        )
    }
}
export default Convert;