import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;

  a {
    color: #777;
  }

  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        {/*todo (1) 프로필 꾸미기*/}
        <div>
          <ProfilePicture
            src="data:image/png;base64,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"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>Nahyeong Kim</Name>
          <Description>실전코딩 실습 블로그</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
