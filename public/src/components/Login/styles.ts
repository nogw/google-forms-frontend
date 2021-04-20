import styled from 'styled-components';

export const Bgc = styled.div`
  width: 100%;
  position: absolute;
  z-index: 0;
  left: -70vh;
`;

export const Container = styled.div`
  background-color: #4285f4;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiCircularProgress-circle {
    color: #fff;
  }

  .menu {
    width: 100%;
  }
  .menu-primary-enter {
    position: absolute;
    transform: translateX(160px) scale(0.4);
    opacity: 0;
  }
  .menu-primary-enter-active {
    transform: translateX(0%)  scale(1);
    transition: all 450ms ease;
    opacity: 1;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-160px)  scale(0.4);
    transition: all 450ms ease;
    opacity: 0;
  }
  .menu-secondary-enter {
    transform: translateX(160px) scale(0.4);
    opacity: 0;
  }
  .menu-secondary-enter-active {
    transform: translateX(0%) scale(1);
    transition: all 450ms ease;
    opacity: 1;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(-160px) scale(0.4);
    transition: all 450ms ease;
    opacity: 0;
  }

  @media screen and (max-width: 450px) {
    background-color: #fff;
  }
  
  main {
    z-index: 1;
    background-color: #fff;
    min-width: 26rem;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    padding: 36px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      color: #202020;
      font-weight: bold;
      font-size: 1.5rem;
    }
    h4 {
      color: #202124;
      font-weight: lighter;
      font-size: 1rem;
      line-height: 24px;
      margin-bottom: 12px;
    }
    .input {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 10px 0px 4px 0px;
      
      label {
        color: #202020;
        font-size: 0.7rem;
        margin: 4px 0px 4px 0px;
        font-weight: 600;
      }
    
      input {
        border: none;
        outline: none;
        width: 100%;
        background-color: transparent;
        border: 2px solid #212121;
        padding: 10px 10px 10px 10px;
        height: 2.5rem;
        color: #000;
        font-size: 0.9rem;
        border-radius: 4px;
        transition: all 300ms ease;

        &:focus {
          border: 2px solid #4285f4;
        }

        @media screen and (max-width: 450px) {
          width: auto;
        }
      }
    }
    button {
      margin: 28px 0px 10px 0px;
      border: none;
      outline: none;
      width: 100%;
      background-color: #4285f4;
      height: 2.5rem;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      padding: 10.5px 6px 14px 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 300ms ease;
      &:hover {
        filter: brightness(0.9);
      }
    }
    p {
      margin-right: auto;
      color: #686c73;
      font-size: 0.8rem;
      margin-top: 4px;
      span {
        color: #4285f4;
        transition: all 300ms ease;
        cursor: pointer;
        font-weight: bold;
        &:hover {
          filter: brightness(1.3)
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    main {
      z-index: 1;
      min-width: unset;
      width: 100%;
      box-shadow: none;
      padding: 48px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .MuiCircularProgress-circle {
      color: #4285f4;
    }
  }
`;