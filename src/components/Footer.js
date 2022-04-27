
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <FooterTop  />
        <div class="footer_bottom">
          <div class="info">
            <span>&copy; 2022 Airbnb, Inc.</span>
            <i class="global"></i>
            <a href="#">한국어</a>
            <i class="money"></i>
            <a href="#">KRW</a>
          </div>
          <div class="sns">
            <i class="facebook"></i>
            <i class="twitter"></i>
            <i class="instagram"></i>
            <i class="naver_blog"></i>
            <i class="naver_post"></i>
          </div>
          <ul>
            <li><a href="#">개인정보 처리방침</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">사이트맵</a></li>
            <li><a href="#">한국의 변경된 환불 정책</a></li>
            <li><a href="#">회사 세부정보</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

const FooterTop = () => {
  return (
      <div class="footer_top">
        <List colNum={ 1 }/>
        <List colNum={ 2 }/>
        <List colNum={ 3 }/>
        <List colNum={ 4 }/>
      </div>
  )
}

const List = ({ colNum }) => {
  const col01 = {
    title: '에어비앤비 지원',
    contents : [
      '도움말 센터',
      '안전 정보',
      '예약 취소 옵션',
      '에어비앤비의 코로나19 대응 방안',
      '장애인 지원',
      '이웃 민원 신고'
    ],
  };
  const col02 = {
    title: '커뮤니티',
    contents : [
      'Airbnb.org: 재난 구호 숙소',
      '아프간 난민 지원',
      '차별 철폐를 위한 노력',
    ],
  };
  const col03 = {
    title: '호스팅',
    contents : [
      '호스팅 시작하기',
      '에어커버: 호스트를 위한 보호 프로그램',
      '호스팅 자료 둘러보기',
      '커뮤니티 포럼 방문하기',
      '책임감 있는 호스팅',
    ],
  };
  const col04 = {
    title: '소개',
    contents : [
      '뉴스룸',
      '새로운 기능에 대해 알아보기',
      '에어비앤비 공동창업자의 메시지',
      '채용정보',
      '투자자 정보',
      '에어비앤비 Luxe',
    ],
  };

  let colData;
  switch (colNum) {
    case 1:
      colData = col01;
      break;
    case 2:
        colData = col02;
        break;
    case 3:
      colData = col03;
      break;
    case 4:
      colData = col04;
      break;
    default:
      break;
  }
  return (
    <div>
      <h3>{colData.title}</h3>
      <ul>
        {
          colData.contents.map((item) => {
            return(
              <li key={item}>{ item }</li>
            )
          })
        }
      </ul>
    </div>
  )
}