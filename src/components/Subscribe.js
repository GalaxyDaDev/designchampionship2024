const Subscribe = () => {
  return (
    <section
      className="subscribe-section gap"
      style={{ background: "#fcfcfc", overflowX: "hidden" }}
      id="diversity"
    >
      <div
        className="container"
        style={{
          maxWidth: "100%",
          paddingRight: "15px",
          paddingLeft: "15px",
          overflow: "hidden",
        }}
      >
        <div
          className="row align-items-center"
          style={{ marginRight: 0, marginLeft: 0 }}
        >
          <div
            className="col-lg-6"
            data-aos="flip-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <div className="img-subscribe">
              <img
                alt="Illustration"
                src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1920/f_auto/primary/ia6gfsfwiry3qqb7iavl"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
                width="680"
                height="450"
              />
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1"
            data-aos="flip-up"
            data-aos-delay={300}
            data-aos-duration={400}
          >
            <div className="get-the-menu">
              <h2>Unity in Motion: The Heart of Paris 2024</h2>
              <br />
              <p>
                Paris 2024 showcases the true spirit of the Olympic Movement—
                uniting athletes from across the globe in a celebration of
                diversity and inclusion. From the inspiring performances of
                Paralympic athletes to the welcoming space of Pride House, these
                Games stand as a symbol of breaking barriers and embracing
                equality through sport. This global event is more than just
                competition—it's a movement toward a more inclusive and united
                world.
              </p>
              <br />
              <a
                href="https://olympics.com/ioc/news/the-olympic-games-celebrate-diversity-on-the-global-stage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button button-2">Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
