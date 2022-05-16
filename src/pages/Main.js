import React from 'react'
import sectionImg02_1 from '../styles/images/main/sectionImg02_1.png';
import sectionImg02_2 from '../styles/images/main/sectionImg02_2.png';
import sectionImg02_3 from '../styles/images/main/sectionImg02_3.png';
import sectionImg02_4 from '../styles/images/main/sectionImg02_4.png';
import sectionImg03_1 from '../styles/images/main/sectionImg03_1.png';
import sectionImg03_2 from '../styles/images/main/sectionImg03_2.png';
import sectionImg04_1 from '../styles/images/main/sectionImg04_1.png';

const Main = () => {
  return (
    <>
      <Section className='sec_detail bg_black'>
        <div className='box bg_pink'>
          <h2>10만 명에 달하는 우크라이나 피난민에게 임시 숙소를 제공해주세요</h2>
          <a href='#' className='btn_white_line'>자세히 알아보기</a>
        </div>
      </Section>
      <Section className='sec_search'>
        <div className='txt_box' style={{ backgroundImage: `url(${sectionImg04_1})` }}>
          <h2>호기심을 자극하는 숙소로 떠나보세요</h2>
          <a href='#' className='btn_white_radius'>유연한 검색</a>
        </div>
      </Section>
      <Section className='sec_idea'>
        <h2>설레는 다음 여행을 위한 아이디어</h2>
        <AreaList />
      </Section>
      <Section className='sec_exper'>
        <h2>에어비앤비 체험 둘러보기</h2>
        <div className='experience_list'>
          <div style={{ backgroundImage: `url(${sectionImg03_1})` }}>
            <h3>여행 중 만나는 <br />이색적인 즐길거리</h3>
            <a href='#' className='btn_normal'>체험</a>
          </div>
          <div style={{ backgroundImage: `url(${sectionImg03_2})` }}>
            <h3>집에서 만나는 <br />다양한 즐길거리</h3>
            <a href='#' className='btn_normal'>온라인 체험</a>
          </div>
        </div>
      </Section>
      <Section className='sec_qna'>
        <div className='txt_box' style={{ backgroundImage: `url(${sectionImg04_1})` }}>
          <h2>호스팅에 관해<br />궁금하신 점이<br />있나요?</h2>
          <a href='#' className='btn_normal'>슈퍼호스트에게 물어보세요</a>
        </div>
      </Section>
    </>
  )
}

export default Main;

const AreaList = () => {
  const data = [
    { city: '서울', distance: '2km 거리', src: sectionImg02_1 },
    { city: '인천', distance: '29km 거리', src: sectionImg02_2 },
    { city: '대구', distance: '237km 거리', src: sectionImg02_3 },
    { city: '대전', distance: '140km 거리', src: sectionImg02_4 },
  ];
  return (
    <div className='area_list'>
      {
        data.map((item, idx) => {
          return (
            <div className='area_card' key={`${item.city}_${item.idx}`}>
              <img src={item.src} alt='' />
              <div>
                <h3>{item.city}</h3>
                <p>{item.distance}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

/* 
  Section에 className을 줘도 section태그에 스타일이 입혀지지 않았던 이유
  -> section태그를 호출한게 아니라 우리는 Section이라는 상수를 호출한것이기 때문에 
     태그 자체에 클래스가 적용되지 않음. props로 내려받은 후 태그에 적용해주니 적용됨!
 */
const Section = ({ className, children }) => {
  return (
    <section className={className}>
      <div className='container'>
        {children}
      </div>
    </section>
  )
}