import React from 'react'
import '../App.css'
import Footer from './Footer'

export default function Contact () {
  return (
    <>

      <div className={'title'}>
        <h1 className={'text-center mt-5 mb-5'}>Contact Us</h1>
      </div>

      <div className={'container bg-light mb-5'}>
        <form>
          <div className={'row'}>
            <div className={'col-lg-6 mt-5'}>
              <div className={'col-sm-10 form-group'}>
                <input type={'text'} className={'form-control'} placeholder={'Enter Your Name'}/>
              </div>
              <div className={'col-sm-10 form-group mt-3'}>
                <input type={'text'} className={'form-control'} placeholder={'Enter email'}/>
              </div>
              <div className={'col-sm-10 form-group mt-3'}>
                <input type={'text'} className={'form-control'} placeholder={'Subject'}/>
              </div>
              <div className={'col-sm-10 form-group mt-3'}>
                <textarea rows={'5'} className={'form-control'} placeholder={'Your message'}/>
              </div>
              <button className={'btn btn-outline-primary mt-3 mb-5'}>Send Message</button>
            </div>
            <div className={'col-md-1'}></div>
            <div className={'col-md-5 mt-5'}>
              <h3 className={'text-center mb-3'}>Contact Info</h3>
              <p><i className="fas fa-map-marker-alt text-primary"></i> &nbsp;&nbsp;&nbsp; Proleterski Brigadi No.62, Struga North
                Macedonia </p>
              <p><i className="fas fa-phone text-primary"></i> &nbsp;&nbsp;&nbsp; +389/ 77-000-123</p>
              <p><i className="fas fa-envelope text-primary"></i> &nbsp;&nbsp;&nbsp; caffee@gmail.com</p>
              <p><i className="fab fa-skype text-primary"></i> &nbsp;&nbsp;&nbsp; <a href={"#"} className={"text-black"}>CaffeeBar</a></p>
              <p><i className="fab fa-instagram text-primary"></i> &nbsp;&nbsp;&nbsp; <a href={"#"} className={"text-black"}>CaffeeBar</a></p>
              <p><i className="fab fa-facebook text-primary"></i> &nbsp;&nbsp;&nbsp; <a href={"#"} className={"text-black"}>CaffeeBar</a></p>
            </div>
          </div>

        </form>
      </div>

      <div>
       <iframe src={"https://www.google.com/maps/d/edit?mid=17AqRmdKMOh4qH617Cn_QSJp8tnbxfT2Y&usp=sharing"}></iframe>
       </div>
      <Footer/>
    </>
  )
}