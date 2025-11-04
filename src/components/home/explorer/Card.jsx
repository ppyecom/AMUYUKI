import React from 'react'
import './card.css'

const Card = ({banner,sub,description,section,button}) => {

  return (
    <div className="card-explorer">
        <div className="banner-explorer"><img src={banner} alt="" /></div>
        <div className="body-card-explorer">
            <div className="sub-card-explorer">
                <span className='subspan'>{sub}</span>
                <div className="stars">
                    {[1,2,3,4,5].map((starIdx) => (
                        <svg key={starIdx} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12.472L12.472 15L11.236 9.764L15 6.528L9.764 5.292L8 0L6.236 5.292L1 6.528L4.764 9.764L3.528 15L8 12.472Z" fill="#FFD700"/>
                        </svg>
                    ))}
                </div>
            </div>
            <div className="description">{description}</div>
            <hr className='wavy'/>
            <div className="sections">
                {section.map((sec,idx) => {
                    return (
                        <div key={idx} className="section-item">
                            <div className="icon-section"><img src={sec.icon} alt="" /></div>
                            <div className="content-section">{sec.content}</div>
                        </div>
                    )
                })}
            </div>
        </div>
        <button>{button}</button>
    </div>
  )
}

export default Card