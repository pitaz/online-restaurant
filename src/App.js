import React from "react";
import jumboImage from "./assets/images/jumbo-image.png";
import recipeOne from "./assets/images/recipe-1.png";
import NavBar from "./components/Navbar";
import { images } from "./core";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="jumbo-content">
        <div className="jumbo-img-text-wrapper">
          <p className="jumbo-img-text-1">
            Good food choices are good investments.
          </p>
          <p className="jumbo-img-text-2">
            There is a powerful need for symbolism, and that means the
            architecture must have something that appeals to the human heart.
          </p>
          <div className="jumbo-img-btn-wrapper">
            <button className="jumbo-img-btn">Order Now</button>
            <p className="jumbo-img-action-text">Watch our story</p>
            <button className="jumbo-img-btn-2">Play</button>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="mask-layer">
          <div className="inner-content">
            <div className="more-content">
              <div className="img-wrapper">
                <img src={images.ABOUT} alt="" className="content-img-1" />
              </div>
              <div>
                <p >
                  The best comfort food will always be greens, cornbread, and
                  fried chicken.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren,
                </p>
                <button className="jumbo-img-btn-3">Know more about us</button>
              </div>
            </div>

            <div className="vid-section">
              <div className="vid-section-mask">
                <div className="vid-section-writeup">
                  <p className="vid-section-text">
                    When a man's stomach is full it makes no difference whether
                    he is rich or poor.
                  </p>
                  <p className="vid-section-text-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                  <button className="vid-section-btn">Play</button>
                  <p className="vid-section-text-2">Watch our Story</p>
                </div>
              </div>
            </div>

            <div className="explore-header-section">
              <div className="explore-header-section-writeup">
                <p className="explore-header-section-text">Explore Our Foods</p>
                <p className="explore-header-section-text-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="grid-container">
              <div className="explore-food-card">
                <img
                  src={images.EXPLOREONE}
                  alt=""
                  className="explore-food-card-img"
                />
                <div className="explore-food-card-body">
                  <div className="explore-food-card-body-header">
                    <p className="explore-food-card-body-title">Ham Sandwich</p>
                    <p className="explore-food-card-body-price">{`$10.50`}</p>
                  </div>
                  <div className="explore-food-card-body-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </p>
                  </div>
                </div>
              </div>
              <div className="explore-food-card">
                <img
                  src={images.EXPLORETWO}
                  alt=""
                  className="explore-food-card-img"
                />
                <div className="explore-food-card-body">
                  <div className="explore-food-card-body-header">
                    <p className="explore-food-card-body-title">Ham Sandwich</p>
                    <p className="explore-food-card-body-price">{`$10.50`}</p>
                  </div>
                  <div className="explore-food-card-body-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </p>
                  </div>
                </div>
              </div>
              <div className="explore-food-card">
                <img
                  src={images.EXPLORETHREE}
                  alt=""
                  className="explore-food-card-img"
                />
                <div className="explore-food-card-body">
                  <div className="explore-food-card-body-header">
                    <p className="explore-food-card-body-title">Ham Sandwich</p>
                    <p className="explore-food-card-body-price">{`$10.50`}</p>
                  </div>
                  <div className="explore-food-card-body-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </p>
                  </div>
                </div>
              </div>
              <div className="explore-food-card">
                <img
                  src={images.EXPLOREFOUR}
                  alt=""
                  className="explore-food-card-img"
                />
                <div className="explore-food-card-body">
                  <div className="explore-food-card-body-header">
                    <p className="explore-food-card-body-title">Ham Sandwich</p>
                    <p className="explore-food-card-body-price">{`$10.50`}</p>
                  </div>
                  <div className="explore-food-card-body-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </p>
                  </div>
                </div>
              </div>
              <div className="explore-food-card">
                <img
                  src={images.EXPLOREFIVE}
                  alt=""
                  className="explore-food-card-img"
                />
                <div className="explore-food-card-body">
                  <div className="explore-food-card-body-header">
                    <p className="explore-food-card-body-title">Ham Sandwich</p>
                    <p className="explore-food-card-body-price">{`$10.50`}</p>
                  </div>
                  <div className="explore-food-card-body-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </p>
                  </div>
                </div>
              </div>

              <div className="explore-food-card">
                <img
                  src={images.EXPLORESIX}
                  alt=""
                  className="explore-food-card-img"
                />
                <div className="explore-food-card-body">
                  <div className="explore-food-card-body-header">
                    <p className="explore-food-card-body-title">Ham Sandwich</p>
                    <p className="explore-food-card-body-price">{`$10.50`}</p>
                  </div>
                  <div className="explore-food-card-body-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="explore-header-section">
              <div className="explore-header-section-writeup">
                <button className="jumbo-img-btn">Explore all food</button>
              </div>
            </div>

            <div className="explore-header-section">
              <div className="explore-header-section-writeup">
                <p className="explore-header-section-text">
                  Our Popular Recipes
                </p>
              </div>
            </div>
          </div>
          {/*inner content layer*/}
          <div className="recipes-wrapper">
            <div className="recipe-food-card-inner-container">
              <div className="recipe-food-card">
                <img
                  src={images.RECIPEONE}
                  alt=""
                  className="recipes-card-img"
                />
              </div>

              <div className="recipe-food-card">
                <img
                  src={images.RECIPETWO}
                  alt=""
                  className="recipes-card-img"
                />
              </div>

              <div className="recipe-food-card">
                <img
                  src={images.RECIPETHREE}
                  alt=""
                  className="recipes-card-img"
                />
              </div>
              <div className="recipe-food-card">
                <img
                  src={images.RECIPEFOUR}
                  alt=""
                  className="recipes-card-img"
                />
              </div>
            </div>
          </div>
          <div className="newsletter-section">
            <div className="img-wrapper-recipe">
              <img
                src={images.DOTS}
                alt=""
                className="newsletter-section-content-img"
              />
            </div>
            <div className="newsletter-section-content">
              <p className="explore-header-section-text">
                Want to get the latest Updates?
              </p>
              <div className="explore-header-section-input-wrapper">
                <input
                  placeholder="example@yourmail.com"
                  className="explore-header-section-input"
                />
                <a href="!#" className="subscribe-btn">
                  Subscribe
                </a>
              </div>
            </div>
            <div className="img-wrapper-recipe">
              <img
                src={images.DOTS}
                alt=""
                className="newsletter-section-content-img-2"
              />
            </div>
          </div>

          <div className="footer"></div>
          <Footer />
        </div>{" "}
        {/*mask layer*/}
      </div>
    </div>
  );
}

export default App;
