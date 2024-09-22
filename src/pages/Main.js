import React from "react";

function Main() {
  return (
    <div className="Main">
      <h4>블로그 소개</h4>
      <p>
        이 프로젝트는 이전에 다루었던 기술 스택을 활용하여 구현한 복습/연습용
        애플리케이션입니다.
        <br />
        <br />
        사용한 기술에 대한 개인적인 설명과 사용법을 기록하였습니다.
      </p>
      <br />
      <div className="tech-stack">
        <h4>
          기술 스택 (프로젝트에 사용중{" "}
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "blue",
              display: "inline-block",
              marginRight: "5px",
            }}
          ></div>
          )
        </h4>
        <ul>
          <li>
            <strong>DB : </strong>
            <span style={{ color: "grey" }}>Oracle</span>,{" "}
            <span style={{ color: "blue" }}>PostgreSQL</span>,{" "}
            <span style={{ color: "grey" }}>MySQL</span>,{" "}
            <span style={{ color: "blue" }}>Redis</span>
          </li>
          <li>
            <strong>Front : </strong>
            <span style={{ color: "grey" }}>Vue3</span>,{" "}
            <span style={{ color: "blue" }}>React</span>,{" "}
            <span style={{ color: "blue" }}>Typescript</span>
          </li>
          <li>
            <strong>Back : </strong>
            <span style={{ color: "blue" }}>Java Spring Boot</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;