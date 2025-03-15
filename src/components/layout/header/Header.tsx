import scss from "./Header.module.scss";


const Header = () => {
  return (
    <div id={scss.Header}>
        <div className={scss.content}>header</div>
    </div>
  );
};

export default Header;
