import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechSol</h1>
            <p>Tech solutions the sign of success.</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
            We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to incease the problem solvinfg ability in childern.
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
          <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi totam eaque officiis error 
            dignissimos adipisci eveniet debitis doloribus illo aspernatur nemo qui, quae, illum commodi 
            sint porro possimus ipsum perferendis consectetur at, molestiae fugit. Nesciunt molestias 
            quisquam minus optio excepturi vel eaque nemo impedit tempore. Voluptatem nesciunt, quia, eum 
            reprehenderit neque commodi molestiae recusandae asperiores dolorum praesentium perferendis 
            laudantium iusto eius autem provident, iste velit beatae laboriosam reiciendis ducimus odio quis. 
            Iusto cum doloribus eaque atque molestias qui praesentium consectetur iure, sed quidem a obcaecati, 
            nam voluptas adipisci nostrum eos tenetur, commodi unde. Atque nulla magnam quisquam vero ex 
            tempore.</p>
          </div>
        </div>

        <div className="home4" id='brands'>
          <div>
            <h1>Brands</h1>
            <article>
              <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
              </div>
              <div style={{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
              </div>
              <div style={{animationDelay:"0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
              </div>
              <div style={{animationDelay:"1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>
    </>
  )
}

export default Home