import Logo from "../Logo/Logo";
import { navbarLinks } from "./config";
import { NavbarContainer, NavbarLinkWrapper, StyledLink } from "./styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavbarLinkWrapper>
        {navbarLinks.map((link, index) => (
          <StyledLink href={link.href} key={`navbar${index}key`}>
            {link.text}
          </StyledLink>
        ))}
      </NavbarLinkWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
