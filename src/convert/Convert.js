import React from 'react';

class Convert extends React.Component {
    state = { number: '10011011' };

    update = (event) => this.setState({ number: event.target.value });

    toDecimal = (binary) => parseInt(binary, 2).toString(10);
    toHexadecimal = (decimal) => parseInt(decimal, 10).toString(16).toUpperCase();

    render() {
        const { number } = this.state;
        const decimal = this.toDecimal(number);
        const hexadecimal = this.toHexadecimal(decimal);

        return (
            <>
                <div>
                    <form>
                        Number: <input value={number} name="number" onChange={this.update} />
                        <br />
                        <p>Двоичное: {number}</p>
                        <p>Десятичное: {decimal}</p>
                        <p>Шестнадцатеричное: {hexadecimal}</p>
                    </form>
                </div>
            </>
        );
    }
}

export default Convert;
