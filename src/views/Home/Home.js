import React from 'react'
import "./Home.css"
import I18n from '../../utils/I18n.js'
function Home() {
 

  const usersCount = 50;

  return (
    <div>
      <h1 className='text-center heading-I18n'>{I18n("heading")}</h1>
      <h1 className='welcome'>{I18n("welcomeMessage")}</h1>

      <div className='main-container'>
        <h2 className='text-center positive-text'>{I18n("positiveMessage")}</h2>

        <div className='sub-main-container'>
          <h3>{I18n("unstoppable")}</h3>

          <h3>{I18n("learn")}</h3>

          <h3>{I18n("chance")}</h3>
          <h3>{I18n("stronger")}</h3>
          <h3>{I18n("destination")}</h3>
          <h3>{I18n("gift")}</h3>
        </div>
      </div>
<div className='select-lang-container'>
<p className='select-text'>Select Language</p>
      <select defaultValue={localStorage.getItem("lang")}
        onChange={(e) => {
          localStorage.setItem("lang", e.target.value);
          window.location.reload();
        }} className='select-language'>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>
      </div>
      <p className='usercount'>
        {I18n("usersStatmessage", "<studentCount>", usersCount)}
      </p>
      <h5 className='last-msg'>{I18n("endmessage")}</h5>
    </div>

  )
}

export default Home

