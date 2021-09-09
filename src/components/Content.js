import React from 'react'
import './Content.css'
import '../App.css'
import cappuccino from '../images/cappuccino.jpg'
import c1 from '../images/1.jpg'
import c2 from '../images/2.png'
import c4 from '../images/4.jpg'
import c6 from '../images/6.jpg'
import c10 from '../images/10.jpg'
import c12 from '../images/12.jpg'
import c13 from '../images/13.jpeg'

function Content () {
  return (

    <div>

      <div className={'bg-image'}>
        <div className={'row'}>
          <div className={"col-5 bg-black bg"}>
            <div className={"text-center text-white mt-5"}>
              <h1>W<span className={"text-primary"}>E</span>
                L<span className={"text-primary"}>C</span>O
                <span className={"text-primary"}>M</span>E<span className={"text-primary"}>!</span></h1>
              <h5>Your Day Starts with Our Coffee</h5>
              <p className={"mt-4"}>Drinking Coffee can do much than provide on Energy boost.</p>
              <p>Coffee is the biggest source of antioxidants in the Diet.</p>
              <p>So find your favourite. Always fresh coffee.</p>
              <p>Visit us at our location</p>

              <a href={'/contact'} className={"btn btn-outline-primary mt-5"}>
                <i className={'fas fa-arrow-right'}></i> &nbsp; Location</a>
            </div>
          </div>
        </div>
      </div>

      <div className={'services'}>
        <div className={'title'}>
          <h1 className={'text-center'}>About Us</h1>
        </div>
        <div className={'container mt-5'}>
          <div className={'row'}>
            <div className={'col-sm-4 text-center'}>
              <a href={'#'} className={'btn btn-primary rounded-circle'}>
                <i className={'fas fa-birthday-cake fs-1'}></i></a>
              <h5 className={'mt-3 text-primary'}>Dinner & Dessert</h5>
              <p className={'text-dark'}>Stressed is desserts spelled backwards</p>
            </div>
            <div className={'col-sm-4 text-center'}>
              <a href={'#'} className={'btn btn-primary rounded-circle'}>
                <i className={'fas fa-coffee-togo fs-1'}></i></a>
              <h5 className={'mt-3 text-primary'}>Coffee Zone</h5>
              <p className={'text-dark'}>Life happens coffee helps</p>
            </div>
            <div className={'col-sm-4 text-center'}>
              <a href={'#'} className={'btn btn-primary rounded-circle'}>
                <i className={'fas fa-salad fs-1'}></i></a>
              <h5 className={'mt-3 text-primary'}>Ice Shakes</h5>
              <p className={'text-dark'}>When life gets tough shake it</p>
            </div>
          </div>

          <div className={'row pt-5'}>
            <div className={'col-sm-4 text-center'}>
              <a href={'#'} className={'btn btn-primary rounded-circle'}>
                <i className="fas fa-hamburger fs-1"></i></a>
              <h5 className={'mt-3 text-primary'}>Fresh Foods</h5>
              <p className={'text-dark'}>The foods we choose make a difference</p>
            </div>
            <div className={'col-sm-4 text-center'}>
              <a href={'#'} className={'btn btn-primary rounded-circle'}>
                <i className="fas fa-utensils-alt fs-1"></i></a>
              <h5 className={'mt-3 text-primary'}>Breakfast</h5>
              <p className={'text-dark'}>A good breakfast fuels you up and gets you ready for the day</p>
            </div>
            <div className={'col-sm-4 text-center'}>
              <a href={'#'} className={'btn btn-primary rounded-circle'}>
                <i className="fas fa-glass-cheers fs-1"></i>
              </a>
              <h5 className={'mt-3 text-primary'}>Ice drinks</h5>
              <p className={'text-dark'}>A cold drink is the answer to most problems</p>
            </div>
          </div>
        </div>
      </div>

      <div className={'menu-image'}>
        <div className={'row'}>
          <div className={"col-4 bg-primary menu"}>
            <div className={"text-center text-white mt-5"}>
              <h1>Our Menu</h1>
              <p className={"text-center mt-5 m-lg-5"}>Today's menu has two choices TAKE IT or LEAVE IT.</p>
              <a href={'/menu'} className={"btn btn-light text-uppercase mt-5"}>View menu</a>
            </div>
          </div>
        </div>
      </div>

      <div className={'count bg-dark text-white text-center p-5 fs-3'}>
        <div className={'number'}>
          <i className="fas fa-mug-hot"></i>
          <p>10</p>
          <h2>Coffees</h2>
        </div>
        <div className={'number'}>
          <i className="fas fa-cocktail"></i>
          <p>25</p>
          <h2>Coctails</h2>
        </div>
        <div className={'number'}>
          <i className="fas fa-utensils-alt"></i>
          <p>15</p>
          <h2>Breakfast</h2>
        </div>
        <div className={'number'}>
          <i className="fas fa-ice-cream"></i>
          <p>20</p>
          <h2>Desserts</h2>
        </div>
      </div>

      <div className={'galery bg-light mb-5'}>
        <div className={"title"}>
          <h1 className={'text-center'}>Gallery</h1>
        </div>
        <div className={'row mt-5'}>
          <div className={'item col-sm-3 mb-3'}>
            <a href={c1} className={'fancybox'} data-fancybox={'gallery1'}>
              <img src={c1}/>
            </a>
          </div>
          <div className={'item col-sm-3 mb-3'}>
            <a href={cappuccino} className={'fancybox'} data-fancybox={'gallery1'}>
              <img src={cappuccino}/>
            </a>
          </div>
          <div className={'item col-sm-3 mb-3'}>
            <a href={c12} className={'fancybox'} data-fancybox={'gallery1'}>
              <img src={c12}/>
            </a>
          </div>
          <div className={'item col-sm-3 mb-3'}>
            <a href={c4} className={'fancybox'} data-fancybox={'gallery1'}>
              <img src={c4}/>
            </a>
          </div>
        </div>
        <div className={"text-center mt-3"}>
          <a href={"/gallery"} className={"btn btn-primary"} >View more</a>
        </div>

      </div>

      <div className={'popular mt-3'}>
        <div className={'row'}>
          <div className={'col text-center pb-5 title'}>
            <h1 className={'text-color font-weight-bold'}>Our Favorites Menu</h1>
          </div>
        </div>

        <div className={'row justify-content-around align-items-center'}>
          <div className={'col-xl-3 col-lg-4 col-sm rotate'}>
            <div className={'card text-center mb-3 card'}>
              <div className={'card-header'}>
                <h4 className={'font weight-light title-text'}>AMERICANO</h4>
              </div>
              <div className={'card-body'}>
                <img src={c13} className={'img-fluid rounded'}/>
              </div>
              <div className={'card-footer'}>
                $3.00
              </div>
            </div>
          </div>
          <div className={'col-xl-3 col-lg-4 col-sm rotate'}>
            <div className={'card text-center mb-3 card'}>
              <div className={'card-header'}>
                <h4 className={'font weight-light title-text'}>ESPRESSO</h4>
              </div>
              <div className={'card-body'}>
                <img src={c2} className={'img-fluid rounded'}/>
              </div>
              <div className={'card-footer'}>
                $5.50
              </div>
            </div>
          </div>
          <div className={'col-xl-3 col-lg-4 col-sm rotate'}>
            <div className={'card text-center mb-3 card'}>
              <div className={'card-header'}>
                <h4 className={'font weight-light title-text'}>MACCHIATO</h4>
              </div>
              <div className={'card-body'}>
                <img src={c6} className={'img-fluid rounded'}/>
              </div>
              <div className={'card-footer'}>
                $4.00
              </div>
            </div>
          </div>
          <div className={'col-xl-3 col-lg-4 col-sm rotate'}>
            <div className={'card text-center mb-3 card'}>
              <div className={'card-header'}>
                <h4 className={'font weight-light title-text'}>LATTE</h4>
              </div>
              <div className={'card-body'}>
                <img src={c10} className={'img-fluid rounded'}/>
              </div>
              <div className={'card-footer'}>
                $6.00
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Content