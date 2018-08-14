import React from "react"
import WorkCard from "./workCard"
import hero from "./hero.jpeg"
import blackjack from "./blackjack.jpeg"
import code from "./code.jpeg"

export default () => (
      <div className="work-grid">
            <h1>Projects</h1>
            <div className="work-wrapper">
                <WorkCard 
                    title="Vanilla JavaScript BlackJack"
                    image={blackjack}
                    description="A small blackjack game I made in my spare time. Built with vanilla javascript and css. Very fun and simple project."
                    image-alt="Vanilla JavaScript BlackJack"
                />
                <WorkCard 
                    title="MERN Boilerplate"
                    image={code}
                    description="A little boilerplate I made for starting out React Single Page Applications.
                     Gives me a starting point since Authentication can be time consuming to write.
                     Uses React, MongoDB, Webpack and Node.Js."
                    image-alt="Vanilla JavaScript BlackJack"
                />
                <WorkCard 
                    title="Personal Website"
                    image={hero}
                    description="This is the website you are currently viewing. Built using a static site generator called Gatsby.
                     Enbaled me to create a high performing website using React."
                    image-alt="Vanilla JavaScript BlackJack"
                />
                <WorkCard 
                    title="AMR Ecommerce Site"
                    image={hero}
                    description="A hair and beauty supplies ecommerec store. Built this website in a team of 4 developers. We developed custom plugins and a custom theme from scratch for
                    the WooCommerce/WordPress site. Technologies used were PHP, JavaScript, CSS, PHPUnit and jQuery."
                    image-alt="Vanilla JavaScript BlackJack"
                />
                <WorkCard 
                    title="BFE Ecommerce Site"
                    image={hero}
                    description="A ftiness equipment ecommerce website. This site was built all from scratch by myself. Developed custom plugins and a custom theme from scratch for
                    the WooCommerce/WordPress site. Technologies used were PHP, JavaScript, CSS, PHPUnit and jQuery."
                    image-alt="Vanilla JavaScript BlackJack"
                />
                <WorkCard 
                    title="York Ecommerce site"
                    image={hero}
                    description="A ftiness equipment ecommerce website. This site was built all from scratch by myself. Developed custom plugins and a custom theme from scratch for
                    the WooCommerce/WordPress site. Technologies used were PHP, JavaScript, CSS, PHPUnit and jQuery."
                    image-alt="Vanilla JavaScript BlackJack"
                />
            </div>
    </div>
)
