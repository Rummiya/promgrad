import scss from "./Header.module.scss";

import { useRouter } from "next/navigation";

const Header = () => {
  return (
    <div id={scss.Header}>
      <div className="container">
        <div className={scss.header}>header</div>
      </div>
    </div>
  );
};

export default Header;
