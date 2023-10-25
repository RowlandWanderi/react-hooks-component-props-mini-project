import React from 'react'

export default function About(prop) {
    let { imageSrc = "https://via.placeholder.com/215", about} = prop
  return (
    <div>
        <aside>
            <img src={imageSrc} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    </div>
  )
}
