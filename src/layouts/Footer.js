import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#363636" }}>
      <div className="container">
        <div className="footer-two gap no-bottom">
          <p>Copyright © 2024. Nor_WeW_Senior_2024_20735 / Syaris All rights reserved.</p>
          <div className="privacy">
            {" "}
            <a href="https://olympics.com/en/paris-2024"> Olympics </a> <a href="https://olympics.com/en/paris-2024/schedule/grid">Olympics Schedule</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
