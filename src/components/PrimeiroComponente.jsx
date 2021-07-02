import React, { Component } from 'react';

class PrimeiroComponente extends Component {
    render() {
        return (
            <div>
                <h1>Comunicação Spring</h1>
                <figure>
                    <img src="https://apod.nasa.gov/apod/image/1705/CygnusApproach_ISS_960.jpg" alt="Minha imagem"></img>
                    <figcaption>Figura qualquer</figcaption>
                </figure>
            </div>
        );
    }
}

export default PrimeiroComponente;