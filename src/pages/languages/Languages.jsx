import React from 'react'
import './languages.css'

const Languages = () => {
  return (
    <section className='languages'>
        <div className="content-languages">
            <div className="left-languages">
                <img src="./images/languages/illustration-languages.png" alt="" />
            </div>
            <div className="right-languages">
                <h2>Lenguas Andinas</h2>
                <p>Sumérgete en la riqueza de las lenguas andinas <br /> y conecta con sus culturas milenarias</p>
                <div className="cards-languages">
                    <div className="card-language quechua">
                        <img src="./images/languages/quechua.png" alt="" />
                        <h3>Quechua</h3>
                        <p>El Quechua, hablado por millones en los Andes, es una lengua rica en historia y cultura. Aprende y conecta con sus tradiciones milenarias.</p>
                    </div>
                    <div className="card-language aimara">
                        <img src="./images/languages/aimara.png" alt="" />
                        <h3>Aimara</h3>
                        <p>El Aimara, lengua ancestral de los Andes, es un puente hacia una cultura vibrante y resiliente. Sumérgete en su historia y tradiciones únicas.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Languages