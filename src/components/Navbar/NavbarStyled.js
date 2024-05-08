import styled from "styled-components";

export const NavbarComponent = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #070724;
  color: #fff;
  border-bottom: 1px solid #838391;
  
  .logo {
    h1 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }
  }

  .navbar-menu {
    ul {
      display: flex;
      list-style: none;
      li {
        color: #838391;
        margin-right: 2rem;
        cursor: pointer;
        text-transform: uppercase;
      }
      li a {
        text-decoration: none;
        color: #838391;
        &:hover {
          color: #fff;
        }
      }
      
    }
    
  }
  @media screen and (max-width: 1100px){
    flex-direction: column;
    gap: 0.3rem;
    .logo {
        h1 {
            font-size: 1.3rem;
        }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    .navbar-menu {
      display: none;
    }

    .open {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 80px;
      left: 0px;
      width: 20%;
      height: calc(100vh - 60px);
      background: #070724;
      z-index: 10;
      padding: 20px;
      transition: all 0.5s ease;
      border: 1px solid #838391;
      ul {
        flex-direction: column;
        li {
          margin: 20px 10px;
          border-bottom: 1px solid #838391;
        }
      }
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none; 
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block; 
  }

  .line {
    width: 25px;
    height: 3px;
    background: ${(props) => (props.isOpen ? "#fff" : "#838391")};
    margin: 5px;
    transition: all 0.3s ease;

    &:first-child {
      transform: ${(props) => (props.isOpen ? "rotate(-45deg) translate(-5px, 6px)" : "none")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }

    &:last-child {
      transform: ${(props) => (props.isOpen ? "rotate(45deg) translate(-5px, -6px)" : "none")};
    }
  }
`;



