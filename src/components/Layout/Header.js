import Logo from "../Layout/Logo";
import LogoText from "./LogoText";

const Header = () => {
  return (
    <div className="flex items-center border-t-8 border-black">
      <Logo />
      <LogoText />
    </div>
  );
};

export default Header;
