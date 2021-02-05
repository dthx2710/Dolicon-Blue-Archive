import React from 'react'

import Layout from '../../components/Layout'
import { Link } from 'gatsby'

export default class FAQIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <h1
            className="has-text-weight-bold is-size-1 has-text-centered"
            style={{
              boxShadow: '0.5rem 0 0 rgba(102, 204, 255, 0.75), -0.5rem 0 0 rgba(102, 204, 255, 0.75)',
              backgroundColor: 'rgba(102, 204, 255, 0.75)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Newbie FAQ
          </h1>
            <div className="has-text-centered">
                <h3>Q. I'm using bluestacks and my game crashes right after I start it</h3>
                <h3>A. Make sure you're on 32bit instead of 64bit</h3>
                <hr/>
                <h3>Q. Why is my name input showing an error?</h3>
                <img src={`../../img/Katakana_Name_Error.png`} alt="Katakana Name Error" width="600"/>
                <h3>A. You have to use katakana as the game uses a voice synthesizer to force Arona to say your katakana name. Use a converter like <a href="https://www.sljfaq.org/cgi/e2k.cgi" target="_blank" rel="noopener noreferrer">this</a> or something</h3>
                <hr/>
                <h3>Q. Who's good to reroll for?</h3>
                <h3>A. Waifu &gt; D*ck &gt; <Link to='/reroll'>Dolicon's suggestions</Link></h3>
                <hr/>
                <h3>Q. I read the reroll page, but how do you actually bind your account?</h3>  
                <h3>A.</h3>
                <img src={`../../img/bind1.png`} alt="bind1" width="600"/>
                <img src={`../../img/bind2.png`} alt="bind2" width="600"/>
                <hr/>
                <h3>Q. Which banner should I roll for?</h3>  
                <h3>A. Left is rate up banner, with Shiroko and Hoshino on rate up. If you are not aiming for them, roll for right side's normal banner</h3>
                <hr/>
                <h3>Q. Server reset time?</h3>  
                <h3>A. 0400 JST</h3>
                <hr/>
                <h3>Q. How to change name?</h3>  
                <h3>A. First is username, second is katakana name (the one that Arona will call you by)</h3>
                <img src={`../../img/changename1.jpg`} alt="changename1" width="600"/>
                <img src={`../../img/changename2.png`} alt="changename2" width="600"/>
                <hr/>
                <h3>Q. Crafting nodes?</h3>  
                <h3>A. </h3>
                <img src={`../../img/Crafting.jpg`} alt="Crafting" width="600"/>
                <hr/>
                <h3>Q. WTF is FAQ???</h3>
                <h3>A. Miko will explain...</h3>
                <img src={`../../img/FAQ.jfif`} alt="FAQ" width="300"/>
                <hr/>
                <p>Any other questions that are not answered here, you can probably try asking in Blue Archive discord's #question channel</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
