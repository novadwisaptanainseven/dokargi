import React from 'react'
import Banner from './Banner'

const Bantuan = () => {
  const dataBantuan = [
    {
      bantuan:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse voluptates omnis repellendus eaque officiis repudiandae blanditiis magni',
    },
    {
      bantuan:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse voluptates omnis repellendus eaque officiis repudiandae blanditiis magni',
    },
    {
      bantuan:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse voluptates omnis repellendus eaque officiis repudiandae blanditiis magni',
    },
    {
      bantuan:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda esse voluptates omnis repellendus eaque officiis repudiandae blanditiis magni',
    },
  ]

  return (
    <div className="container-bantuan">
      {/* Banner */}
      <Banner />

      {/* Body Content */}
      <div className="content-bantuan mt-5">
        <div className="container">
          {dataBantuan.map((item, idx) => (
            <div className="timeline mt-4" key={idx}>
              <div className={(idx + 1) % 2 > 0 ? 'textbox-left' : 'textbox-right'}>
                {item.bantuan}
              </div>
              {/* Jika index bernilai ganjil */}
              {(idx + 1) % 2 > 0 && (
                <svg
                  className={'pointer-left'}
                  width="161"
                  height="32"
                  // viewBox="0 0 161 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M159 30.5L130.5 2H0" stroke="#16B0C8" strokeWidth="3" />
                </svg>
              )}

              {/* Jika index bernilai genap */}
              {(idx + 1) % 2 === 0 && (
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
              )}
              <div className="circle">{idx + 1}</div>
            </div>
          ))}

          <div className="timeline mobile mt-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Bantuan
