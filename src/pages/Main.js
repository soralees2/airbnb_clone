import React from 'react'
import mainImg01 from '../styles/images/main/sectionImg02_1.png';
import mainImg02 from '../styles/images/main/sectionImg02_2.png';
import mainImg03 from '../styles/images/main/sectionImg02_3.png';
import mainImg04 from '../styles/images/main/sectionImg02_4.png';

const Main = () => {
  return (
    <>
      <section className="sec_detail bg_black">
        <div className="container">
          <div className="box bg_pink">
            <h2>10만 명에 달하는 우크라이나 피난민에게 임시 숙소를 제공해주세요</h2>
            <a href="#" className="btn_white_line">자세히 알아보기</a>
          </div>
        </div>
      </section>
      <section className="sec_search">
        <div className="container">
          <div className="txt_box">
            <h2>호기심을 자극하는 숙소로 떠나보세요</h2>
            <a href="#" className="btn_white_radius">유연한 검색</a>
          </div>
        </div>
      </section>
      <section className="sec_idea">
        <div className="container">
          <h2>설레는 다음 여행을 위한 아이디어</h2>
          <AreaList />
        </div>
      </section>
      <section className="sec_exper">
        <div className="container">
          <h2>에어비앤비 체험 둘러보기</h2>
          <div className="experience_list">
            <div>
              <h3>여행 중 만나는 <br />이색적인 즐길거리</h3>
              <a href="#" className="btn_normal">체험</a>
            </div>
            <div>
              <h3>집에서 만나는 <br />다양한 즐길거리</h3>
              <a href="#" className="btn_normal">온라인 체험</a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_qna">
        <div className="container">
          <div className="txt_box">
            <h2>호스팅에 관해<br />궁금하신 점이<br />있나요?</h2>
            <a href="#" className="btn_normal">슈퍼호스트에게 물어보세요</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;

export const AreaList = () => {
  const data = [
    { city: '서울', distance: '2km 거리', src: mainImg01 },
    { city: '인천', distance: '29km 거리', src: mainImg02 },
    { city: '대구', distance: '237km 거리', src: mainImg03 },
    { city: '대전', distance: '140km 거리', src: mainImg04 },
  ];
  return (
    <div className="area_list">
      {
        data.map((item) => {
          return(
            <div className="area_card">
              <img src={ item.src } alt="" />
              <div>
                <h3>{ item.city }</h3>
                <p>{ item.distance }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
