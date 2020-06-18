import Link from "next/link";
import React, { Component, useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const BsNavLink = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
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

const Header = ({ user, userLoading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
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
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
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
                  <NavItem className="port-navbar-item">
                    <BsNavLink href="/blogs" title={user.name} />
                    <LogoutLink />
                  </NavItem>
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
    </div>
  );
};

export default Header;
