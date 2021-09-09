import React from 'react'
import '../App.css'
import Footer from './Footer'
import './Menu.css'
import c1 from '../images/1.jpg'
import c2 from '../images/2.png'
import c4 from '../images/4.jpg'
import c7 from '../images/7.jpg'
import c11 from '../images/11.png'
import c12 from '../images/12.jpg'
import b1 from '../images/b1.jpg'
import b2 from '../images/b2.jpg'
import b3 from '../images/b3.jpg'
import b4 from '../images/b4.jpg'
import b5 from '../images/b5.jpg'
import b6 from '../images/b6.jpg'
import d1 from '../images/d1.jpg'
import d2 from '../images/d2.jpg'
import d3 from '../images/d3.jpeg'
import d4 from '../images/d4.png'
import d5 from '../images/d5.jpg'
import d6 from '../images/d6.jpg'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import a3 from '../images/a3.jpg'
import a4 from '../images/a4.jpg'
import a5 from '../images/a5.jpg'
import a6 from '../images/a6.jpg'

export default function Menu () {
  return (
    <>

      <div className={'bg-image-menu'}>
        <div className={'title-m'}>
          <h1 className={'text-center'}>Our Menu</h1>
        </div>
      </div>

      <div className={'container mb-5'}>
        <div className={'title-menu mt-5'}>
          <h3 className={'text-primary'}>Coffees</h3>
        </div>
        <div className={'row mt-5'}>
          <div className={'col-2 menu-img'}>
            <img src={c1}/>
          </div>
          <div className={'col-4'}>
            <h4>Macchiato</h4>
            <p>Price ....... 3.50$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={c2}/>
          </div>
          <div className={'col-4'}>
            <h4>Latte</h4>
            <p>Price ....... 2.60$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={c12}/>
          </div>
          <div className={'col-4'}>
            <h4>Americano</h4>
            <p>Price ....... 1.50$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={c4}/>
          </div>
          <div className={'col-4'}>
            <h4>Cappuccino</h4>
            <p>Price ....... 2.40$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={c7}/>
          </div>
          <div className={'col-4'}>
            <h4>Kuwait</h4>
            <p>Price ....... 3.20$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={c11}/>
          </div>
          <div className={'col-4'}>
            <h4>Ice coffee</h4>
            <p>Price ....... 2.10$</p>
          </div>
        </div>
        <div className={'title-menu mt-5'}>
          <h3 className={'text-primary'}>Breakfast</h3>
        </div>
        <div className={'row mt-5'}>
          <div className={'col-2 menu-img'}>
            <img src={b1}/>
          </div>
          <div className={'col-4'}>
            <h4>American Pancakes</h4>
            <p>Price ....... 4.50$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={b2}/>
          </div>
          <div className={'col-4'}>
            <h4>Traditional English Breakfast</h4>
            <p>Price ....... 15.60$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={b3}/>
          </div>
          <div className={'col-4'}>
            <h4>Healthy porridge bowl</h4>
            <p>Price ....... 8.20$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={b4}/>
          </div>
          <div className={'col-4'}>
            <h4>Omelette</h4>
            <p>Price ....... 3.70$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={b5}/>
          </div>
          <div className={'col-4'}>
            <h4>MIX</h4>
            <p>Price ....... 10.00$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={b6}/>
          </div>
          <div className={'col-4'}>
            <h4>Croissant</h4>
            <p>Price ....... 2.50$</p>
          </div>
        </div>
        <div className={'title-menu mt-5'}>
          <h3 className={'text-primary'}>Desserts</h3>
        </div>
        <div className={'row mt-5'}>
          <div className={'col-2 menu-img'}>
            <img src={d1}/>
          </div>
          <div className={'col-4'}>
            <h4>Donuts</h4>
            <p>Price ....... 2.60$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={d2}/>
          </div>
          <div className={'col-4'}>
            <h4>Ice Cream</h4>
            <p>Price ....... 1.80$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={d3}/>
          </div>
          <div className={'col-4'}>
            <h4>Hot Cold</h4>
            <p>Price ....... 2.90$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={d4}/>
          </div>
          <div className={'col-4'}>
            <h4>Baklava</h4>
            <p>Price ....... 5.00$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={d5}/>
          </div>
          <div className={'col-4'}>
            <h4>Churros</h4>
            <p>Price ....... 4.20$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={d6}/>
          </div>
          <div className={'col-4'}>
            <h4>Flan</h4>
            <p>Price ....... 3.80$</p>
          </div>
        </div>
        <div className={'title-menu mt-5'}>
          <h3 className={'text-primary'}>Drinks</h3>
        </div>
        <div className={'row mt-5'}>
          <div className={'col-2 menu-img'}>
            <img src={a1}/>
          </div>
          <div className={'col-4'}>
            <h4>Cuba Libre</h4>
            <p>Price ....... 4.00$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={a2}/>
          </div>
          <div className={'col-4'}>
            <h4>Mojito</h4>
            <p>Price ....... 4.30$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={a3}/>
          </div>
          <div className={'col-4'}>
            <h4>Kamikaze</h4>
            <p>Price ....... 4.50$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={a4}/>
          </div>
          <div className={'col-4'}>
            <h4>Aperol Spritz</h4>
            <p>Price ....... 5.00$</p>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-2 menu-img'}>
            <img src={a5}/>
          </div>
          <div className={'col-4'}>
            <h4>Espresso martini</h4>
            <p>Price ....... 6.00$</p>
          </div>
          <div className={'col-2 menu-img'}>
            <img src={a6}/>
          </div>
          <div className={'col-4'}>
            <h4>Piña colada</h4>
            <p>Price ....... 5.50$</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}