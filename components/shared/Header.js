import Link from "next/link";
import React, { Component, useState } from "react";
import { isAuthorized } from "utils/auth0";
import ReactResizeDetector from "react-resize-detector";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ActiveLink from "components/shared/ActiveLink";

const BsNavLink = (props) => {
  const { title, href, className = "", passHref } = props;
  return (
    <ActiveLink activeClassName="active" href={href} passHref={passHref} >
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  );
};

const BsNavBrand = () => (
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">Anthony Stachowitz</a>
  </Link>
);

const LoginLink = () => (
  <a className="nav-link port-navbar-link" href="/api/v1/login">
    Login
  </a>
);

const LogoutLink = () => (
  <a className="nav-link port-navbar-link" href="/api/v1/logout">
    Logout
  </a>
);

const AdminMenu = ({ user }) => {
  const [_isOpen, _setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={_isOpen ? true : false}
      toggle={() => {
        _setIsOpen(!_isOpen);
      }}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      {user && (
        <>
          {isAuthorized(user, "admin") && (
            <DropdownMenu>
              <DropdownItem>
                <BsNavLink
                  className="port-dropdown-item"
                  href="/portfolios/new"
                  title="Create Portfolio"
                />
              </DropdownItem>

              <DropdownItem>
                <BsNavLink
                  className="port-dropdown-item"
                  href="/blogs/editor"
                  title="Blog Editor"
                />
              </DropdownItem>
              <DropdownItem>
                <BsNavLink
                  className="port-dropdown-item"
                  href="/dashboard"
                  title="Dashboard"
                />
              </DropdownItem>
            </DropdownMenu>
          )}
        </>
      )}
    </Dropdown>
  );
};

const Header = ({ user, userLoading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <Navbar
          className={`port-navbar port-default absolute transparent ${className} ${
            width < 1500 && isOpen ? "is-open" : "is-close"
          }`}
          dark
          expand="md"
        >
          <BsNavBrand />

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/blogs" title="Blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/cv" title="CV" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/portfolios" title="Portfolios" />
              </NavItem>
              <NavItem className="port-navbar-item">
              <BsNavLink href="https://www.linkedin.com/in/anthony-stachowitz-7b4b6937" passHref={true} title="linkedin" />
              </NavItem>
              {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="secretSSR" />
              </NavItem>
              <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyAdmin" title="Admin" />
              </NavItem>
              <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR" />
            </NavItem> */}
            </Nav>
            <Nav navbar>
              {!userLoading && (
                <>
                  {user && (
                    <>
                      <AdminMenu user={user} />
                      <NavItem className="port-navbar-item">
                        <LogoutLink />
                      </NavItem>
                    </>
                  )}

                  {!user && (
                    <NavItem className="port-navbar-item">
                      <LoginLink />
                    </NavItem>
                  )}
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
