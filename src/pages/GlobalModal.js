import React from 'react'
import { BsTranslate } from "react-icons/bs";
import { BiX } from "react-icons/bi";

const GlobalModal = ({ setShowGlobalModal }) => {
  const local_language = [
    { country : "한국어", language: "대한민국" },
    { country : "Azərbaycan dili", language: "Azərbaycan" },
    { country : "Bahasa Indonesia", language: "Indonesia" },
    { country : "Bosanski", language: "Bosna i Hercegovina" },
    { country : "Català", language: "Espanya" },
    { country : "Čeština", language: "Česká republika" },
    { country : "Crnogorski", language: "Crna Gora" },
    { country : "Dansk", language: "Danmark" },
    { country : "Deutsch", language: "Deutschland" },
    { country : "Deutsch", language: "Österreich" },
    { country : "Deutsch", language: "Schweiz" },
    { country : "Eesti", language: "Eesti" },
    { country : "English", language: "Australia" },
    { country : "English", language: "Canada" },
    { country : "English", language: "Guyana" },
    { country : "English", language: "India" },
    { country : "English", language: "Ireland" },
    { country : "English", language: "New Zealand" },
    { country : "English", language: "Singapore" },
    { country : "English", language: "United Arab Emirates" },
    { country : "Español", language: "Argentina" },
    { country : "Español", language: "Belice" },
    { country : "Español", language: "Bolivia" },
    { country : "Español", language: "Chile" },
    { country : "Español", language: "Colombia" },
    { country : "Español", language: "Costa Rica" },
    { country : "Español", language: "Ecuador" },
    { country : "Español", language: "El Salvador" },
    { country : "Español", language: "España" },
    { country : "Español", language: "Estados Unidos" },
    { country : "Español", language: "Guatemala" },
    { country : "Español", language: "Honduras" },
    { country : "Español", language: "Latinoamérica" },
    { country : "Español", language: "México" },
    { country : "Español", language: "Nicaragua" },
    { country : "Español", language: "Panamá" },
    { country : "Español", language: "Paraguay" },
    { country : "Español", language: "Perú" },
    { country : "Español", language: "Venezuela" },
    { country : "Français", language: "Belgique" },
    { country : "Français", language: "Canada" },
    { country : "Français", language: "France" },
    { country : "Français", language: "Suisse" },
    { country : "Gaeilge", language: "Éire" },
    { country : "Hrvatski", language: "Hrvatska" },
    { country : "isiXhosa", language: "eMzantsi Afrika" },
    { country : "isiZulu", language: "iNingizimu Afrika" },
    { country : "Íslenska", language: "Ísland" },
    { country : "Italiano", language: "Italia" },
    { country : "Italiano", language: "Svizzera" },
    { country : "Kiswahili", language: "Āfrika" },
    { country : "Latviešu", language: "Latvija" },
    { country : "Lietuvių", language: "Lietuva" },
    { country : "Magyar", language: "Magyarország" },
    { country : "Malti", language: "Malta" },
    { country : "Melayu", language: "Malaysia" },
    { country : "Nederlands", language: "België" },
    { country : "Nederlands", language: "Nederland" },
    { country : "Norsk", language: "Norge" },
    { country : "Polski", language: "Polska" },
    { country : "Português", language: "Brasil" },
    { country : "Português", language: "Portugal" },
    { country : "Română", language: "România" },
    { country : "Shqip", language: "Shqipëri" },
    { country : "Slovenčina", language: "Slovensko" },
    { country : "Slovenščina", language: "Slovenija" },
    { country : "Srpski", language: "Srbija" },
    { country : "Suomi", language: "Suomi" },
    { country : "Svenska", language: "Sverige" },
    { country : "Tagalog", language: "Pilipinas" },
    { country : "Tiếng Việt", language: "Việt Nam" },
    { country : "Türkçe", language: "Türkiye" },
    { country : "Ελληνικά", language: "Ελλάδα" },
    { country : "Български", language: "България" },
    { country : "Македонски", language: "Северна Македонија" },
    { country : "Русский", language: "Россия" },
    { country : "Українська", language: "Україна" },
    { country : "ქართული", language: "საქართველო" },
    { country : "Հայերեն", language: "Հայաստան" },
    { country : "עברית", language: "ישראל" },
    { country : "العربية", language: "العالم" },
    { country : "हिन्दी", language: "भारत" },
    { country : "ไทย", language: "ประเทศไทย" },
    { country : "日本語", language: "日本" },
    { country : "简体中文", language: "美国" },
    { country : "繁體中文", language: "美國" },
    { country : "简体中文", language: "中国" },
    { country : "繁體中文", language: "香港" },
    { country : "繁體中文", language: "台灣" },
  ];

  const hideModal = () => { setShowGlobalModal(false) };

  return (
    <div className="global_modal">
      <div className="modal_header">
        <button type="button" className="btn_close" onClick={ hideModal }><BiX /></button>
      </div>
      <div className="modal_contents">
        <div className="line_tab">
          <div className="tab_item active">
            <button className="btn_gray_hover focus">언어와 지역</button>
          </div>
          <div className="tab_item">
            <button className="btn_gray_hover">통화</button>
          </div>
        </div>
        <section className="translation">
          <strong>번역 <BsTranslate className="icon" /></strong>
          <button className="btn_onoff">on/off</button>
          <p>설명과 후기가 한국어로 자동 번역됩니다.</p>
        </section>
        <section>
          <h2 className="title">추천 언어 및 지역</h2>
          <div className="recommend_location">
            <button className="btn_gray_hover">
              <b>English</b>
              <span>United States</span>
            </button>
            <button className="btn_gray_hover">
              <b>English</b>
              <span>United Kingdom</span>
            </button>
          </div>
        </section>
        <section>
          <h2 className="title">언어와 지역을 선택하요</h2>
          <div className="btns_wrap">
            {
              local_language.map((item, idx) => {
                return(
                  <button type="button" className={ idx === 0 ? `btn_gray_hover btn_border_black` : `btn_gray_hover`} key={ `${item}_${idx}`}>
                    <b>{ item.country }</b>
                    <span>{ item.language }</span>
                  </button>
                )
              })
            }
          </div>

        </section>
      </div>
    </div>
  )
}

export default GlobalModal;