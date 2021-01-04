import React from "react";
import "./article.scss";

export const Article = () => {

    return (
        <article>
            <div className="art-box">

                <img className="App-slider-img" src={"../../images/img_top.svg"} alt="philodendrons"/>

                <h1 className="art-box-title">The Right Way to Water Common Houseplants</h1>
                <p className="art-box-txt">
                    Sometimes caring for your plants feels like a full time job. There's so much to remember, from
                    feeding your plants to making sure they get enough sunlight. To make it just a little bit easier for
                    you, I spoke to Christopher Satch, a plant scientist at The Sill, to break down exactly when you
                    should water the most common houseplants. But first, here are a few general rules to remember.
                </p>
                <p className="art-box-txt">
                    Satch suggests thinking of soil like a dry sponge—it repels water at first rather than immediately
                    absorbing it. "If you’ve ever watered a plant, and the water immediately came through the bottom,
                    then you have not watered that plant. The water went around the soil, not into it, and for many
                    plants, it’s wise to have drainage, because you can soak them to be sure that they are absorbing the
                    water," he explains.
                </p>
                <p className="art-box-txt">
                    Another thing to keep in mind is that the amount of water your little green baby needs depends on
                    its size. Smaller plants need more attention and frequent waterings than larger plants.
                    Additionally, plants that get more sunlight also need to be watered more frequently. As a general
                    rule, Satch says, "the amount of water to use is always about ¼ to ⅓ the pot’s volume of water." And
                    if after all that you're still confused, he has a few parting words of wisdom for you: <br/>
                    <i>"When in
                        doubt, feel the soil!"</i>
                </p>
                <p className="art-box-txt">
                    Now without further ado, here's how to water the 15 most popular houseplants.

                </p>
            </div>

        </article>


    );

}


export default Article