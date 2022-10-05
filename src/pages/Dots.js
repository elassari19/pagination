/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dots = ({ state, children, handelPage }) => {
  const { page, count } = state;

  const [show, setShow] = useState("none");

  const right = count / 5;

  const lenLeft =
    page == right - 2
      ? right - 5
      : page > right - 3
      ? right - 4
      : page > 3
      ? page - 3
      : 0;

  const lenRight =
    page < 3 ? right - 4 : page < right - 2 ? right - page - 2 : 0;

  const pageLeft = page > 3 ? 2 : 0;
  const pageRight = page < right - 2 ? right - lenRight : page - 1;

  console.log(lenLeft);

  const handelClick = (number) => {
    handelPage(number);
    setShow("none");
  };

  const dropLeft = [...Array(lenLeft)].map((_, idx) => {
    return (
      <Link
        onClick={() => handelClick(pageLeft + idx)}
        to={"/" + Number(Number(pageLeft) + idx)}
        key={idx}
      >
        {pageLeft + idx}
      </Link>
    );
  });

  const dropRight = [...Array(lenRight)].map((_, idx) => {
    return (
      <Link
        onClick={() => handelClick(pageRight + idx)}
        to={"/" + Number(Number(pageRight) + idx)}
        key={idx}
      >
        {pageRight + idx}
      </Link>
    );
  });

  return (
    <Container>
      {page > 3 && (
        <span onClick={() => setShow(show === "left" ? "none" : "left")}>
          ...
        </span>
      )}

      {page > 3 && show === "left" && <div className="left">{dropLeft}</div>}

      {children}

      {page < 8 && (
        <span onClick={() => setShow(show === "right" ? "none" : "right")}>
          ...
        </span>
      )}

      {page < 8 && show === "right" && <div className="right">{dropRight}</div>}
    </Container>
  );
};

const Container = styled.span`
  display: inline-block;
  position: relative;
  font-size: 12px;
  height: 20px;
  padding: 0;
  span {
    fon-size: 1rem;
    cursor: pointer;
    padding: 0.5rem;
  }
  .left,
  .right {
    a {
      border: none;
      font-size: 14px;
      z-index: 11;
      margin: 0;
      padding: 0.3rem;
      :hover {
        background: #22ff55;
      }
    }
    position: absolute;
    bottom: 10px;
    box-shadow: 1px 1px 5px black;
    // border: 1px solid black;
    overflow: scroll;
    scroll-behavior: smooth;
    max-height: 60px;
    width: 30px;
    padding-left: 0.5rem;
    background: white;
  }
  .right {
    right: -10px;
  }
`;

export default Dots;
