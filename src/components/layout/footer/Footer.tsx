import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>footer</div>
      </div>
    </footer>
  );
};

export default Footer;
