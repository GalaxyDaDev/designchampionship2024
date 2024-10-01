import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout>
      <section
        className="hero-section gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="restaurant">
                <h1>Olympic Pulse</h1>
                <p>
                Welcome to Olympic Pulse – Your Gateway to the Games! Dive into the excitement, celebrate the spirit, and stay updated with everything Paris 2024.
                </p>
    
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="img-restaurant">
                <img   style={{ borderRadius: '15px' }}  src="https://compote.slate.com/images/896c4ddd-9492-4462-ba10-63311fbd53db.jpeg?crop=1560%2C1040%2Cx0%2Cy0" />
                <div className="wilmington">
                  <img  src="https://pbs.twimg.com/profile_images/1421504097719525380/F96MVnon_400x400.jpg" width ="40" height="80"/>
                  <div>
                    <p>"The Olympics? Yeah, I completed it mate"</p>
                    <h6>- Bryony Page</h6>
                  </div>
                </div>
                <div className="wilmington location-restaurant">
                  <i className="fa-solid fa-location-dot" />
                  <div>
                    <h6>Olympics 2024</h6>
                    <p>- Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="works-section gap no-top" id="highlights">
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>Olympic Games 2024 - Paris, Some Unforgettable Highlights</h2>
            <p>
            The 2024 Olympic Games in Paris brought together the world's finest athletes, showcasing extraordinary talent, passion, and the indomitable spirit of sportsmanship. From thrilling victories to awe-inspiring performances.
           The Games were a testament to human potential and perseverance. Here, we revisit some of the most unforgettable highlights that captured the essence of this spectacular event.
            </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card">
                <img style={{ borderRadius: '15px' }} src="https://i.ytimg.com/vi/fZl_LVU7a18/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWC926ddv3kvqPXj8-_gKQWLiuxw" width="300" height="170"/>
                <a href="https://www.youtube.com/watch?v=fZl_LVU7a18">
                <h4>
                   Men's Football Gold Medal Game
                </h4>
                </a>
                <p>
                The Men's Football Gold Medal Game was a thrilling climax to the tournament, featuring a riveting match between two of the most formidable teams. The game was a showcase of skill, strategy, and sheer determination, culminating in a nail-biting finish that kept fans on the edge of their seats.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card">
                <img style={{ borderRadius: '15px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYr7axrYdqJ1s4ApgT2_WuhrBn4URiwtZGw&s" width="300" height="170"/>
              <a href="https://www.youtube.com/watch?v=D8HdQX1jg9c&t">
                <h4>
                Men's Street Skateboarding Final
                </h4>
                </a>
                <p>
                The Men's Street Skateboarding Final was a spectacular display of creativity, technical skill, and fearless athleticism. Competitors pushed the boundaries of the sport, executing incredible tricks and maneuvers on the streets of Paris.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="work-card">
                <img style={{ borderRadius: '15px' }} src="https://i.ytimg.com/vi/sWVPnyyLnFw/maxresdefault.jpg" width="300" height="170"/>
               <a href="https://www.youtube.com/watch?v=sWVPnyyLnFw">
                <h4 >
                  9 Minutes of INSANE Badminton Points
                </h4>
                </a>
                <p>
                Badminton at the 2024 Paris Olympics delivered some of the most electrifying and unforgettable moments of the Games. In a match that has been dubbed "9 Minutes of INSANE Badminton Points," spectators witnessed an extraordinary display of agility, precision, and endurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section
        className="best-restaurants gap"
        style={{ background: "#fcfcfc" }}
        id="champions"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="city-restaurants">
                <h2>The Champions of Paris 2024: Top 3 Players of the Olympics</h2>
                <p>
                The 2024 Paris Olympics showcased extraordinary talent and determination, with athletes from around the world delivering unforgettable performances. Among them, three stood out as the embodiment of excellence, capturing the hearts of fans and the admiration of peers. Here are the top three players of the Paris 2024 Olympics, whose remarkable achievements will be remembered for years to come
                </p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="logos-card">
                <img  src="https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1627219484/primary/cts0yqdhtfm9yowtrv1j" width="100" height="100" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">Simone Biles</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="cafa-button">
                  
                    <a href="https://www.usa.gov/">USA</a> <a href="https://en.wikipedia.org/wiki/Gymnastics">Gymnastics</a>
                   
                  </div>
                  <p>
                  Simone Biles continued to solidify her status as one of the greatest gymnasts of all time at the Paris 2024 Olympics. With an astounding display of strength, precision, and grace, Biles captured multiple gold medals, including in the all-around and apparatus finals. 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="logos-card two">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFHJoPDUDQ-prsjO02T2T_EBx5XX-cF-p0g&s" width="100" height="100" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card"> Eliud Kipchoge</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="https://www.state.gov/countries-areas/kenya/">Kenya</a> <a href="https://en.wikipedia.org/wiki/Marathon">Marathon</a>{" "}
                  </div>
                  <p>
                  Eliud Kipchoge once again proved why he is considered the greatest marathon runner in history. At the 2024 Paris Olympics, Kipchoge delivered a masterclass in endurance and strategy, securing his third consecutive Olympic gold medal in the marathon. 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="logos-card three">
                <img src="https://imgs.search.brave.com/UBN7lNuhqIjjCQRafmKXXAU9Il0nPjtckNhrtjZIKLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/Mzk2NDIzNC9waG90/by9uYW50ZXJyZS1m/cmFuY2UtY2FlbGVi/LWRyZXNzZWwtb2Yt/dGVhbS11bml0ZWQt/c3RhdGVzLWNlbGVi/cmF0ZXMtYWZ0ZXIt/d2lubmluZy1nb2xk/LWluLXRoZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UkVU/Zk1GSXJjMUlTdUpm/TXh0LTBNd0lmRlpI/SVVlSzJUQXFicVdi/QVBnaz0" width="100" height="100"/>
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">Caeleb Dressel</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="https://www.usa.gov">USA</a> <a href="https://en.wikipedia.org/wiki/Swimming">Swimming</a>{" "}
                  </div>
                  <p>
                  Caeleb Dressel was a force to be reckoned with in the pool, dominating the swimming events at the Paris 2024 Olympics. Dressel's extraordinary speed and versatility earned him multiple gold medals, including in the 50m and 100m freestyle, as well as several relay events.                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-gap">
            <Link href="https://olympics.com/en/paris-2024/medals" className="button button-2 non">
              See All
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      
      <section
        className="your-favorite-food gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
        id="impact"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="food-photo-section">
                <img style={{ borderRadius: '15px' }} src="https://img.etimg.com/thumb/width-420,height-315,imgsize-472476,resizemode-75,msid-112444338/news/sports/olympic-gold-medals-are-worth-more-than-ever-after-cost-of-metals-surged/gold-medal.jpg" width="300" height="448" />{" "}
                <a href="https://olympics.com/ioc/ancient-olympic-games/history" className="one">
                  <i className="fa-solid fa-burger" />
                 Olympic History
                </a>{" "}
                <br></br>

                <a href="https://www.bbc.com/sport/olympics" className="two">
                  <i className="fa-solid fa-cheese" />
                  Live Olympic Updates
                </a>{" "}
                <br></br>
                <br></br>
                <br></br>

                <a href="https://www.teamusa.com/" className="three">
                  <i className="fa-solid fa-pizza-slice" />
                  Join The Olympics Movement!
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="food-content-section">
                <h2>The impact a home gold can have on the Olympic host nation</h2>
                <p>
                A home gold at the Olympics boosts national pride and unity, creating a shared sense of achievement. It inspires the public, encourages greater support for sports, and often leads to increased investment in athletic programs. The victory enhances the host nation’s global image, while also generating economic benefits through sponsorship deals, media attention, and tourism. Overall, it strengthens the nation’s identity and fosters a lasting legacy of sporting success.
                </p>{" "}
                <Link href="https://shop.olympics.com/en/" className="button button-2">
                 Olympics Merchandise For You!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="counters-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div>
                <h2>Olympic Milestones</h2>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="count-time">
              <h2
                  className="timer count-title count-number"
                  data-to={10}
                  data-speed={2000}
                  style={{ fontSize: "35px" }}
                >
                  10k+
                </h2>
                <p>
                  Atheletes
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="count-time">
              <h2
                  className="timer count-title count-number"
                  data-to={5}
                  data-speed={2000}
                  style={{ fontSize: "35px" }}
                >
                  5K+
                </h2>
                <p>
                  Medals
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="count-time sp">
                <h2
                  className="timer count-title count-number"
                  data-to={200}
                  data-speed={2000}
                  style={{ fontSize: "35px" }}
                >
                  200
                </h2>

                <p>
                &nbsp;Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="reviews-sections gap" id="voices">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="reviews-content">
                <h2>Voices of Victory: Lessons from Paris 2024</h2>
                <div className="custome owl-carousel">
                  <Swiper {...sliderProps.index1Testmoninal}>
                    <SwiperSlide className="item">
                      <h4>
                      "Every early morning, every missed party, and every hard session led us here. Today, it all came together."​
                      </h4>
                      <div className="thomas">
                        <img src="https://i2-prod.cambridge-news.co.uk/incoming/article14452499.ece/ALTERNATES/s615b/1_ImogenGrantCambridgeUniversityWomenscrewboatrace2018.jpg" width="70" height="70"/>
                        <div>
                          <h6>Imogen Grant- (Gold in Lightweight Double Sculls)</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        "I’m not crying because I came second. I’m crying because it took so much to get here. This silver feels like gold."
                      </h4>
                      <div className="thomas">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/britains-adam-peaty-celebrates-winning-to-take-gold-in-the-news-photo-1627903839.jpg?crop=0.668xw:1.00xh;0.252xw,0&resize=640:*" width="70" height="70"/>
                        <div>
                          <h6>Adam Peaty – (Silver in Men’s 100m Breaststroke)</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        "Sometimes, you have to take the power back. I had to work on my mental health, and now, I’m stronger for it."
                      </h4>
                      <div className="thomas">
                        <img  src="https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1627219484/primary/cts0yqdhtfm9yowtrv1j" width="70" height="70" />
                        <div>
                          <h6>Simone Biles – (Gold In Gymnastics)</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="owl-nav mt-4">
                    <button className="owl-prev">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="owl-next ms-3">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="reviews-img">
                <img  style={{ borderRadius: '15px' }}  src="https://media.assettype.com/outlookindia/2024-08-08/xda2rsgq/AP24221507320274.jpg?w=1080&auto=format%2Ccompress&fit=max" />
                <i className="fa-regular fa-thumbs-up" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section
        className="join-partnership gap"
        style={{ backgroundColor: "#363636" }}
        id="ceremonies"
      >
        <div className="container">
          <h2>A Grand Beginning and a Glorious Finale</h2>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="join-img">
                <img src="https://images.hindustantimes.com/img/2024/07/27/550x309/Philippe_Katerine_1722044836103_1722046829193.jpg" width="640" height="302" />
                <div className="Join-courier">
                  <h3>Opening Ceremony</h3>
                  <Link href="https://www.youtube.com/watch?v=xtlvuPxNKWI" className="button button-2">
                    Watch <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-img">
                <img  src="https://onecms-res.cloudinary.com/image/upload/s--dRq_Oex5--/c_crop,h_562,w_1000,x_0,y_48/c_fill,g_auto,h_468,w_830/fl_relative,g_south_east,l_one-cms:core:watermark:ap_data-1,w_0.1/f_auto,q_auto/v1/one-cms/core/paris_olympics_closing_ceremony_17070.jpg?itok=iLdgXFd2" width="640" height="302" />
                <div className="Join-courier">
                  <h3>Closing Ceremony</h3>
                  <Link href="https://www.youtube.com/watch?v=jcB7QA5N7CE" className="button button-2">
                    Watch <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
    
      {}
      <Subscribe />
    </Layout>
  );
};
export default Index;
