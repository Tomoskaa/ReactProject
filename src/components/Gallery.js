import React from "react";
import '../App.css';
import Footer from "./Footer";
import img2 from '../images/img2.jpg'
import c1 from '../images/1.jpg'
import c2 from '../images/2.png'
import c4 from '../images/4.jpg'
import c6 from '../images/6.jpg'
import c8 from '../images/8.jpg'
import c9 from '../images/9.jpg'
import c12 from '../images/12.jpg'
import c13 from '../images/13.jpeg'
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
import d6 from '../images/d6.jpg'
import a1 from '../images/a1.jpg'
import a3 from '../images/a3.jpg'
import a4 from '../images/a4.jpg'
import a5 from '../images/a5.jpg'
import a6 from '../images/a6.jpg'

export default function Gallery() {
    return (
        <>
            <div className={'title'}>
                <h1 className={'text-center mt-5 '}>Gallery</h1>
            </div>

            <div className={"container mt-5"}>
                <div className={"row mt-4"}>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c1} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={c1} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c2} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={c2} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={a6} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={a6} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c4} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={c4} />
                        </a>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={a5} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={a5} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={img2} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={img2} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={b1} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={b1} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={b5} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={b5} />
                        </a>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={b3} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={b3} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c9} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={c9} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={b6} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={b6} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={d4} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={d4} />
                        </a>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c13} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={c13} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={a1} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={a1} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={b2} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={b2} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c12} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={c12} />
                        </a>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={d1} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={d1} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c6} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={d6} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={b4} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={b4} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={a4} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={a4} />
                        </a>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={d3} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={d3} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={c8} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={c8} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={a3} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={a3} />
                        </a>
                    </div>
                    <div className={"item col-sm-3 mb-3"}>
                        <a href={d2} className={"fancybox"} data-fancybox={"gallery1"}>
                            <img src={d2} />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}