import React from 'react'
import Banner from './Banner'

const Bantuan = () => {
  return (
    <div className="container-bantuan">
      {/* Banner */}
      <Banner />

      {/* Body Content */}
      <div className="content-bantuan mt-5">
        <div className="container">
          <div className="timeline">
            <div className="textbox-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse suscipit
              voluptates omnis repellendus eaque officiis repudiandae blanditiis magni
            </div>
            <svg
              className="pointer-left"
              width="161"
              height="32"
              // viewBox="0 0 161 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M159 30.5L130.5 2H0" stroke="#16B0C8" strokeWidth="3" />
            </svg>
            <div className="circle">1</div>
          </div>
          <div className="timeline mt-4">
            <div className="textbox-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse suscipit
              voluptates omnis repellendus eaque officiis repudiandae blanditiis magni
            </div>
            <svg
              className="pointer-right"
              width="160"
              height="33"
              // viewBox="0 0 160 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 31L30.3208 2H160" stroke="#16B0C8" strokeWidth="3" />
            </svg>

            <div className="circle">2</div>
          </div>
          <div className="timeline mt-4">
            <div className="textbox-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse suscipit
              voluptates omnis repellendus eaque officiis repudiandae blanditiis magni
            </div>
            <svg
              className="pointer-left"
              width="161"
              height="32"
              // viewBox="0 0 161 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M159 30.5L130.5 2H0" stroke="#16B0C8" strokeWidth="3" />
            </svg>
            <div className="circle">3</div>
          </div>
          <div className="timeline mt-4">
            <div className="textbox-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse suscipit
              voluptates omnis repellendus eaque officiis repudiandae blanditiis magni
            </div>
            <svg
              className="pointer-right"
              width="160"
              height="33"
              // viewBox="0 0 160 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 31L30.3208 2H160" stroke="#16B0C8" strokeWidth="3" />
            </svg>
            <div className="circle">4</div>
          </div>
          <div className="timeline mt-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Bantuan
