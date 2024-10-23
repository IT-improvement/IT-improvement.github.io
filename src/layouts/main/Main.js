import React from 'react'
import './Main.css'
import SnowFall from '../snowFall/SnowFall'

export default function Main() {

  const onClickFirstConent = () =>{
    window.open("http://www.bringup.kr");
  }
  const onClickSecondConent = () =>{
    window.open("#");
  }

  return (
    <div className='main'>
        <SnowFall></SnowFall>
        <div className='main-content'>
            <div className='main-title-box'>
                <div>주승재의 포트폴리오</div>
            </div>
            <div className='main-profile'></div>
            <div className='main-box'>
              <div className='box first'>
                <div className='content show'>
                  <div className='preview-image bringup' onClick={onClickFirstConent}></div>
                  <div className='content-info'>
                    <div className='content-title'>Bring Up</div>
                    <div className='content-explanation'>
                      <div>설명 보기</div>
                      <div>git 보기</div>
                      </div>
                  </div>
                </div>
                <div className='content show'>
                  <div className='preview-image geohub' onClick={onClickSecondConent}></div>
                  <div className='content-info'>
                    <div className='content-title'>지오허브</div>
                    <div className='content-explanation'>
                      <div>설명 보기</div>
                      {/* <div>git 보기</div> */}
                      </div>
                  </div>
                </div>
                <div className='content'></div>
              </div>
            </div>
        </div>
    </div>
  )
}
