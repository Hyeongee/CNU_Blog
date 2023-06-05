import styled from '@emotion/styled';
import PURDUE from '../assets/purdue.jpg';

const Contents = styled.p`
  text-overflow: ellipsis;
  white-space: pre-wrap;
  margin-bottom: 2.5rem;
`;

const Info = styled.div`
  font-size: 1rem;
  color: #696969;
`;
const ProfilePicture = styled.img`
  display: block;
  width: 761px;
  object-fit: cover;
  margin-bottom: 2.5rem;
`;
const Resume = () => {
  return (
    <div style={{ margin: '1.5rem auto' }}>
      <h2>{'Tutoring For Programming Language Class'}</h2>
      <Info>{'03/2023 to Current'}</Info>
      <Contents>
        {'Assisted the junior students practice the programming.\nSupported the students to understand functional languages using OCaml.'}
      </Contents>
      <h2>{'IITP KSW 2023 Winter Program'}</h2>
      <Info>{'01/2023 to 02/2023'}</Info>
      <Contents>
        {
          'Developed the power efficient long range drone networking system for UAV detection.\nDesigned the drone networking system using LoRa on the ESP 32 board.\nPlanned and conducted the experiment about power consumption to measure the power efficiency.'
        }
      </Contents>
      <ProfilePicture src={PURDUE} alt="소개글 사진" />
      <h2>{'Design Sprint Camp & Advanced Flutter Camp'}</h2>
      <Info>{'01/2022'}</Info>
      <Contents style={{ paddingBottom: '50px' }}>
        {
          'Created the idea of making community application using mbti and produced it.\nDesigned the UI of application using Figma.\nPromoted our application to customers through User Test and received feedback.'
        }
      </Contents>
    </div>
  );
};
export default Resume;
