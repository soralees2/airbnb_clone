import React from 'react'

const Experience = () => {
  return (
    <div>
      <div className='contents'>
        <section>
          <div className='container wide_right'>
            <div>
              <h2>이번 주 신규 등록 체험</h2>
              <div className='slider_nav'>
                <button type='button'>left</button>
                <button type='button'>right</button>
              </div>
            </div>
            <div className='slider'>
              <div className='slider_item'>
                <span className='tag'>컬렉션</span>
                <h3>현지인의 팀을 사용해 여행 계획 세우기</h3>
                <button type='button' className='btn_normal btn_sm'>모두 보기</button>
              </div>
              <div className='slider_item'>
                <span className='tag'>컬렉션</span>
                <h3>전 세계 인기 체험</h3>
                <button type='button' className='btn_normal btn_sm'>모두 보기</button>
              </div>
              <div className='slider_item'>
                <span className='tag'>컬렉션</span>
                <h3>팀워크를 다지기에 최적인 체험</h3>
                <button type='button' className='btn_normal btn_sm'>모두 보기</button>
              </div>
              <div className='slider_item'>
                <span className='tag'>컬렉션</span>
                <h3>여행에 대한 갈증을 풀어줄 온라인 체험</h3>
                <button type='button' className='btn_normal btn_sm'>모두 보기</button>
              </div>
              <div className='slider_item'>
                <span className='tag'>컬렉션</span>
                <h3>온 가족이 즐길 수 있는 체험</h3>
                <button type='button' className='btn_normal btn_sm'>모두 보기</button>
              </div>
              <div className='slider_item'>
                <span className='tag'>워크숍</span>
                <h3>성공적인 호스팅의 비결 배우기</h3>
                <button type='button' className='btn_normal btn_sm'>모두 보기</button>
              </div>
            </div>
            <div className='search_area'>
              <div>
                <ul>
                  <li><button type='button'>날짜</button></li>
                  <li><button type='button'>일행당 인원 수</button></li>
                  <li><button type='button'>필터 추가하기</button></li>
                </ul>
              </div>
              <div className='slider'>
                <div className='category_list'>
                  <div className='category_item'>
                    <a href='#'>단체로 즐기기에 적합</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>가족이 즐기기에 적합</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>동물</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>예술 및 글쓰기</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>베이킹</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>쿠킹</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>댄스</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>음주</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>엔터테인먼트</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>피트니스</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>역사문화</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>마술</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>음악</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>사회공언</a>
                  </div>
                  <div className='category_item'>
                    <a href='#'>웰빙</a>
                  </div>
                </div>
                <div>
                  <button type='button'>left</button>
                  <button type='button'>right</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div>
              <h2>전 세계 현지 호스트의 도움을 받아 여행을 계획해보세요</h2>
              <a href='#'>보기(12개)</a>
              <div>
                <button type='button'>left</button>
                <button type='button'>right</button>
              </div>
            </div>
            <div className='slider card_slider'>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(124) 미국</span>
                  </div>
                  <h3>벤과 함께 완벽한 뉴욕 여행 계획하기</h3>
                  <span className='price'>
                    <strong>₩30,730~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(15) 스페인</span>
                  </div>
                  <h3>젬마와 함께하는 바르셀로나 여행</h3>
                  <span className='price'>
                    <strong>₩50,815~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(24) 한국</span>
                  </div>
                  <h3>제이와 함께하는 맞춤식 한국 여행</h3>
                  <span className='price'>
                    <strong>₩35,000~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.75</b>
                    <span>(4) 멕시코</span>
                  </div>
                  <h3>현지인처럼 즐기는 툴룸 투어</h3>
                  <span className='price'>
                    <strong>₩26,996~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(4) 미국</span>
                  </div>
                  <h3>햇살 좋은 포트로더데일의 숨은 명소 만나기</h3>
                  <span className='price'>
                    <strong>₩22,126~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(14) 미국</span>
                  </div>
                  <h3>완벽한 바르셀로나 휴가 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩16,047~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(10) 미국</span>
                  </div>
                  <h3>멋진 오스틴 여행을 계획해보세요</h3>
                  <span className='price'>
                    <strong>₩20,897~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(16) 미국</span>
                  </div>
                  <h3>올랜도, 플로리다 및 테마파크 여행 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩12,784~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.89</b>
                    <span>(35) 이탈리아</span>
                  </div>
                  <h3>데보라와 함께 로마 여행 일정 만들기</h3>
                  <span className='price'>
                    <strong>₩5,349~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.97</b>
                    <span>(30) 태국</span>
                  </div>
                  <h3>태국 여행 계획 세우기</h3>
                  <span className='price'>
                    <strong>₩9,149~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(40) 미국</span>
                  </div>
                  <h3>현지인과 함께하는 내슈빌 여행</h3>
                  <span className='price'>
                    <strong className='line_through'>₩30,730</strong><strong>₩24,584~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(3) 미국</span>
                  </div>
                  <h3>마이애미의 햇살을 즐기는 완벽한 여행 계획 짜기</h3>
                  <span className='price'>
                    <strong>₩12,292~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item last_card'>
                <div>
                  <a href='#'>모두보기 <i className='right'></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div>
              <h2>베스트셀러 체험</h2>
              <a href='#'>보기(225개)</a>
              <div>
                <button type='button'>left</button>
                <button type='button'>right</button>
              </div>
            </div>
            <div className='slider card_slider'>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.92</b>
                    <span>(2,521) 스페인</span>
                  </div>
                  <h3>'no Spain no Game' - 기발한 인터랙티브 가상 게임</h3>
                  <span className='price'>
                    <strong>₩21,396~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(2,917) 이탈리아</span>
                  </div>
                  <h3>할머니 손맛의 파스타 요리 만들기</h3>
                  <span className='price'>
                    <strong>₩42,791~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.94</b>
                    <span>(2,289) 그리스</span>
                  </div>
                  <h3>'진실 혹은 거짓' 재미있는 역사 게임</h3>
                  <span className='price'>
                    <strong>₩21,396~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.96</b>
                    <span>(3,018) 멕시코</span>
                  </div>
                  <h3>세계 최고의 커피 마스터 클래스</h3>
                  <span className='price'>
                    <strong className='line_through'>₩13,007</strong><strong>₩10,406~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.82</b>
                    <span>(97) 프랑스</span>
                  </div>
                  <h3>'From Paris with Laughs' The Scavenger Hunt</h3>
                  <span className='price'>
                    <strong>₩18,722~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(14) 미국</span>
                  </div>
                  <h3>완벽한 바르셀로나 휴가 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩16,047~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(10) 미국</span>
                  </div>
                  <h3>멋진 오스틴 여행을 계획해보세요</h3>
                  <span className='price'>
                    <strong>₩20,897~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(16) 미국</span>
                  </div>
                  <h3>올랜도, 플로리다 및 테마파크 여행 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩12,784~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.89</b>
                    <span>(35) 이탈리아</span>
                  </div>
                  <h3>데보라와 함께 로마 여행 일정 만들기</h3>
                  <span className='price'>
                    <strong>₩5,349~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.97</b>
                    <span>(30) 태국</span>
                  </div>
                  <h3>태국 여행 계획 세우기</h3>
                  <span className='price'>
                    <strong>₩9,149~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(40) 미국</span>
                  </div>
                  <h3>현지인과 함께하는 내슈빌 여행</h3>
                  <span className='price'>
                    <strong className='line_through'>₩30,730</strong><strong>₩24,584~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(3) 미국</span>
                  </div>
                  <h3>마이애미의 햇살을 즐기는 완벽한 여행 계획 짜기</h3>
                  <span className='price'>
                    <strong>₩12,292~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item last_card'>
                <div>
                  <a href='#'>모두보기 <i className='right'></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div>
              <h2>6시간 이내 시작</h2>
              <a href='#'>보기(126개)</a>
              <div>
                <button type='button'>left</button>
                <button type='button'>right</button>
              </div>
            </div>
            <div className='slider time_slider'>
              <div className='time_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div>
                  <p><i className='start'></i><b>4.98</b><span>(249) 아랍에미리트</span></p>
                  <h3>타로점과 명상 가이드/카운슬링</h3>
                  <span className='price'>
                    <strong>₩12,292~</strong> / 인
                  </span>
                  <div className='btn_wrap'>
                    <a href='#' className='btn_black_line'>오후 8:00</a>
                    <a href='#' className='btn_black_line'>오후 9:00</a>
                  </div>
                </div>
              </div>
              <div className='time_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div>
                  <p><i className='start'></i><b>4.99</b><span>(40) 스페인</span></p>
                  <h3>얼굴 요가와 명상 - 맞춤레슨</h3>
                  <span className='price'>
                    <strong>₩33,431~</strong> / 인
                  </span>
                  <div className='btn_wrap'>
                    <a href='#' className='btn_black_line'>오후 8:00</a>
                    <a href='#' className='btn_black_line'>오후 11:00</a>
                  </div>
                </div>
              </div>
              <div className='time_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div>
                  <p><i className='start'></i><b>5.0</b><span>(2) 중국</span></p>
                  <h3>해바라기 리가 알려주는 쿵파오 치킨 쿠킹 클래스</h3>
                  <span className='price'>
                    <strong>₩24,333~</strong> / 인
                  </span>
                  <div className='btn_wrap'>
                    <a href='#' className='btn_black_line'>오후 8:00</a>
                    <a href='#' className='btn_black_line'>오후 9:00</a>
                  </div>
                </div>
              </div>
              <div className='time_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div>
                  <p><i className='start'></i><b>4.94</b><span>(1,836) 일본</span></p>
                  <h3>일본 불교 승려와 함께하는 명상</h3>
                  <span className='price'>
                    <strong>₩15,824~</strong> / 인
                  </span>
                  <div className='btn_wrap'>
                    <a href='#' className='btn_black_line'>오후 9:00</a>
                    <a href='#' className='btn_black_line'>오후 11:00</a>
                  </div>
                </div>
              </div>
              <div className='time_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div>
                  <p><i className='start'></i><b>4.93</b><span>미국</span></p>
                  <h3>맘마미아 - 이탈리아 피자 쿠킹 클래스</h3>
                  <span className='price'>
                    <strong>₩21,316~</strong> / 인
                  </span>
                  <div className='btn_wrap'>
                    <a href='#' className='btn_black_line'>오후 9:00</a>
                    <a href='#' className='btn_black_line'>오전 12:00</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div>
              <h2>이번 주말에 즐길 수 있는 체험</h2>
              <a href='#'>보기(256개)</a>
              <div>
                <button type='button'>left</button>
                <button type='button'>right</button>
              </div>
            </div>
            <div className='slider card_slider'>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(124) 미국</span>
                  </div>
                  <h3>벤과 함께 완벽한 뉴욕 여행 계획하기</h3>
                  <span className='price'>
                    <strong>₩30,730~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(15) 스페인</span>
                  </div>
                  <h3>젬마와 함께하는 바르셀로나 여행</h3>
                  <span className='price'>
                    <strong>₩50,815~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(24) 한국</span>
                  </div>
                  <h3>제이와 함께하는 맞춤식 한국 여행</h3>
                  <span className='price'>
                    <strong>₩35,000~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.75</b>
                    <span>(4) 멕시코</span>
                  </div>
                  <h3>현지인처럼 즐기는 툴룸 투어</h3>
                  <span className='price'>
                    <strong>₩26,996~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(4) 미국</span>
                  </div>
                  <h3>햇살 좋은 포트로더데일의 숨은 명소 만나기</h3>
                  <span className='price'>
                    <strong>₩22,126~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(14) 미국</span>
                  </div>
                  <h3>완벽한 바르셀로나 휴가 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩16,047~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(10) 미국</span>
                  </div>
                  <h3>멋진 오스틴 여행을 계획해보세요</h3>
                  <span className='price'>
                    <strong>₩20,897~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(16) 미국</span>
                  </div>
                  <h3>올랜도, 플로리다 및 테마파크 여행 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩12,784~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.89</b>
                    <span>(35) 이탈리아</span>
                  </div>
                  <h3>데보라와 함께 로마 여행 일정 만들기</h3>
                  <span className='price'>
                    <strong>₩5,349~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.97</b>
                    <span>(30) 태국</span>
                  </div>
                  <h3>태국 여행 계획 세우기</h3>
                  <span className='price'>
                    <strong>₩9,149~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(40) 미국</span>
                  </div>
                  <h3>현지인과 함께하는 내슈빌 여행</h3>
                  <span className='price'>
                    <strong className='line_through'>₩30,730</strong><strong>₩24,584~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(3) 미국</span>
                  </div>
                  <h3>마이애미의 햇살을 즐기는 완벽한 여행 계획 짜기</h3>
                  <span className='price'>
                    <strong>₩12,292~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item last_card'>
                <div>
                  <a href='#'>모두보기 <i className='right'></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div>
              <h2>단체로 즐기기에 적합</h2>
              <a href='#'>보기(225개)</a>
              <div>
                <button type='button'>left</button>
                <button type='button'>right</button>
              </div>
            </div>
            <div className='slider card_slider'>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.92</b>
                    <span>(2,521) 스페인</span>
                  </div>
                  <h3>'no Spain no Game' - 기발한 인터랙티브 가상 게임</h3>
                  <span className='price'>
                    <strong>₩21,396~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(2,917) 이탈리아</span>
                  </div>
                  <h3>할머니 손맛의 파스타 요리 만들기</h3>
                  <span className='price'>
                    <strong>₩42,791~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.94</b>
                    <span>(2,289) 그리스</span>
                  </div>
                  <h3>'진실 혹은 거짓' 재미있는 역사 게임</h3>
                  <span className='price'>
                    <strong>₩21,396~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.96</b>
                    <span>(3,018) 멕시코</span>
                  </div>
                  <h3>세계 최고의 커피 마스터 클래스</h3>
                  <span className='price'>
                    <strong className='line_through'>₩13,007</strong><strong>₩10,406~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.82</b>
                    <span>(97) 프랑스</span>
                  </div>
                  <h3>'From Paris with Laughs' The Scavenger Hunt</h3>
                  <span className='price'>
                    <strong>₩18,722~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(14) 미국</span>
                  </div>
                  <h3>완벽한 바르셀로나 휴가 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩16,047~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(10) 미국</span>
                  </div>
                  <h3>멋진 오스틴 여행을 계획해보세요</h3>
                  <span className='price'>
                    <strong>₩20,897~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(16) 미국</span>
                  </div>
                  <h3>올랜도, 플로리다 및 테마파크 여행 계획하기</h3>
                  <span className='price'>
                    <strong className='line_through'>₩20,059</strong><strong>₩12,784~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.89</b>
                    <span>(35) 이탈리아</span>
                  </div>
                  <h3>데보라와 함께 로마 여행 일정 만들기</h3>
                  <span className='price'>
                    <strong>₩5,349~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.97</b>
                    <span>(30) 태국</span>
                  </div>
                  <h3>태국 여행 계획 세우기</h3>
                  <span className='price'>
                    <strong>₩9,149~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>4.98</b>
                    <span>(40) 미국</span>
                  </div>
                  <h3>현지인과 함께하는 내슈빌 여행</h3>
                  <span className='price'>
                    <strong className='line_through'>₩30,730</strong><strong>₩24,584~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item'>
                <div className='img_wrap'>
                  <img src='' alt='' />
                  <video src=''></video>
                  <button type='button'><i className='heart'></i></button>
                </div>
                <div className='txt_wrap'>
                  <div>
                    <i className='star'></i>
                    <b>5.0</b>
                    <span>(3) 미국</span>
                  </div>
                  <h3>마이애미의 햇살을 즐기는 완벽한 여행 계획 짜기</h3>
                  <span className='price'>
                    <strong>₩12,292~</strong> / 인
                  </span>
                </div>
              </div>
              <div className='card_item last_card'>
                <div>
                  <a href='#'>모두보기 <i className='right'></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button type='btn_normal_black'>더보기</button>
      </div>
    </div>
  )
}

export default Experience;