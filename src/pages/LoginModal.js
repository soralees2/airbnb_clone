import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BiX } from 'react-icons/bi';
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const LoginModal = ({setShowLoginModal}) => {

  const hideModal = () => { setShowLoginModal(false) };

  return (
    <div>
      <div className='login_modal modal'>
        <div className='modal_header'>
          <h1>로그인 또는 회원 가입</h1>
          <button type='button' className='btn_close' onClick={ hideModal }><BiX /></button>
        </div>
        <div className='modal_contents'>
          <section>
            <h2 className='login_title'>에어비앤비에 오신 것을 환영합니다.</h2>
            <div className='input_wrap'>
              <div>
                <select>
                  <option value=''>1</option>
                  <option value=''>2</option>
                  <option value=''>3</option>
                  <option value=''>한국 (+82)</option>
                </select>
              </div>
              <div>
                <span>전화번호</span>
                <input type='tel'/>
              </div>
            </div>
            <p className='noti'>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. <b>개인정보 처리방침</b></p>
            <button className='btn_pink'>계속</button>
          </section>
          <div className='line_txt'>또는</div>
          <section>
            <div className='btns_wrap'>
              <button className='btn_sns btn_border_black facebook'><BsFacebook className='ic'/><span>페이스북으로 로그인하기</span></button>
              <button className='btn_sns btn_border_black google'><FcGoogle className='ic' />구글로 로그인하기</button>
              <button className='btn_sns btn_border_black apple'><GrApple className='ic' />Apple 계정으로 로그인하기</button>
              <button className='btn_sns btn_border_black email'><HiOutlineMail className='ic' />이메일로 로그인하기</button>
            </div>
          </section>
        </div>
      </div>
      <div className='dim'></div>
    </div>
  )
}
export default LoginModal;