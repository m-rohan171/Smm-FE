import "./Overview.css";

export const Overview = () => {
  return (
    <div className="overview-main">
      <h2>Welcome, John Smith!</h2>
      <div className="container">
        <div className="card-list">
          <div className="card">
            <div className="card-body">
              <img
                className="insta-image"
                src="skill-icons_instagram.png"
                alt=""
              />
              <p>Instagram</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {" "}
              <img
                className="utube-image"
                src="logos_youtube-icon.png"
                alt=""
              />
              <p>Youtube</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img className="facebook-image" src="logos_facebook.png" alt="" />
              <p>Facebook</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {" "}
              <img
                className="tiktok-image"
                src="logos_tiktok-icon.png"
                alt=""
              />
              <p>Tiktok</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {" "}
              <img
                className="linkedin-image"
                src="devicon_linkedin.png"
                alt=""
              />
              <p>Linkedin</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {" "}
              <img className="twiter-image" src="simple-icons_x.png" alt="" />
              <p>X (Twiter)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
