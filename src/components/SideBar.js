import React from 'react';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">블로그 소개</Link></li>
        <li><Link to="/login">로그인 관련 기능 구현</Link></li>
        <li><Link to="/">React Query(tanStack) 통신 구현</Link></li>
        <li><Link to="/">SFTP up/download 구현</Link></li>
        <li><Link to="/">S3 up/download 구현</Link></li>
        <li><Link to="/">excel up/download 구현</Link></li>
        <li><Link to="/">viewer 구현</Link></li>
        <li><Link to="/">AG Grid 구현</Link></li>     
      </ul>
    </div>
  );
}

export default Sidebar;