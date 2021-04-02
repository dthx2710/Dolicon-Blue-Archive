import React from 'react'
import { Link } from 'gatsby'
//import Img from "gatsby-image"

class Reroll extends React.Component {
  renderRarity(rarity){
    switch(rarity){
      case '1':
        return '★';
      case '2':
        return '★★';
      case '3':
        return '★★★';
      default:
        return;
    }
  }


  render() {

    return (
      <div className="">
        <h3>
            Who to Reroll for
        </h3>
        <ul>
            <li>Should get: <Link to='/student/hina'>Hina</Link> / <Link to='/student/aru'>Aru</Link> / <Link to='/student/Iori'>Iori</Link> / <s><Link to='/student/azusa'>Azusa</Link></s></li>
            <li>Nice to get: <Link to='/student/neru'>Neru</Link> / <Link to='/student/karin'>Karin</Link> / <s><Link to='/student/cherino'>Cherino</Link></s> / <Link to='/student/hibiki'>Hibiki</Link> / <Link to='/student/saya'>Saya</Link> / <Link to='/student/hifumi'>Hifumi</Link> / <Link to='/student/maki'>Maki</Link></li> 
            <li>PVP Meta: <Link to='/student/shun'>Shun</Link> / <Link to='/student/iori'>Iori</Link> / <Link to='/student/haruna'>Haruna</Link></li>
            <li>Core 1/2*: <Link to='/student/fina'>Fina</Link> / <Link to='/student/hasumi'>Hasumi</Link> / <Link to='/student/yuuka'>Yuuka</Link> / <Link to='/student/tsubaki'>Tsubaki</Link> / <Link to='/student/fuuka'>Fuuka</Link> / <Link to='/student/hanae'>Hanae</Link> / <Link to='/student/suzumi'>Suzumi</Link> / <Link to='/student/serina'>Serina</Link></li>
        </ul>
        <p>PLEASE Take all lists with a grain of salt. Don't follow brainlessly as all students have an use somewhere.</p>
        <p>Strikethrough means not in pool atm. Will be subjected to change as time goes.</p>
        <p>Hina and Aru as they are the best explosion DPS, helps u melt through story quickly. Tsurugi will be core for several future raids (from CBT)</p>
        <p>You can also refer to <a target='blank' href='https://docs.google.com/document/d/1oFRrw8ClZaajzkjULpbxAGLvEKXwc-zLme8iGGkq1Fg/'>Hespa's student tier/analysis doc</a>. I agree with most, if not all of what's there.</p>
        <p>Sources: kamigame, gamewith, gamerch, Xeno archive, Nep sensei</p>

        <h3>Gacha Pool</h3>
        <p>Here's the list of students in the gacha pool right now:</p>
        <p>☆☆☆ 2.5%</p>
        <p>Hina, Iori, Haruna, Izumi, Aru, Sumire, Eimi, Karin, Neru, Maki, Hibiki, Saya, Shun, Shiroko, Hoshino, Hifumi, Tsurugi, Mashiro</p>
        <p>☆☆ 18.5%</p>
        <p>Akari, Junko, Mutsuki, Kayoko, Fuuka, Yuuka, Akane, Hare, Utaha, Chise, Tsubaki, Serika, Ayane, Hasumi, Hanae, Airi</p>
        <p>☆ 79%</p>
        <p>Chinatsu, Haruka, Juri, Kotama, Asuna, Kotori, Fina, Suzumi, Shimiko, Serina, Yoshimi</p>

        <h3>
            How to Reroll
        </h3>
        <p>
            Method 1: Rerolling with Salted Email method (no clear data)
        </p>
        <ol>
            <li>Login with guest account</li>
            <li>Do tutorial and the tutorial roll</li>
            <li>(optional) use the prereg rewards to do an extra 10 roll</li>
            <li>Bind using yostar account. use salted email method (example: if you have an email like test@gmail.com, you can add +1 +2 +3, etc.) so it becomes like this; test+1@gmail.com</li>
            <li>Go back to title screen</li>
            <li>Click the lower left button</li>
            <li>Login using guest account</li>
            <li>Rinse and repeat</li>
        </ol>
        <p>
            Method 2: Twitter link
        </p>
        <ol>
            <li>Link to Twitter</li>
            <li>Unlink from Twitter</li>
            <li>Return to the title screen, then select guest account again</li>
            <li>Rinse and repeat</li>
        </ol>
        <p>
          Method 3: Delete shared_prefs (Rooted Android only, example via BStweaker method)
        </p>
        <ol>
            <li>Open BSTweeker and press the play button on the instance menu on the left (broken chain icon)</li>
            <li>When emulator is running, go back to BSTweaker then go to Root submenu on the right and click unpatch</li>
            <li>Go to Info submenu and click File Manager which will open a new window</li>
            <li>Navigate File explorer at the right till you get to /data/data/com/YostarJP.BlueArchive or /data/data/com/YostarEN.BlueArchive when Global get released</li>
            <li>Relaunch the game with guest account and do your standard reroll procedure</li>
            <li>If you fail to get what you want, close the game, go back to the file explorer from earlier and delete the shared_prefs folder.</li>
            <li>Open game again and reroll. Remember to refresh the file manager and delete the shared_prefs folder before every new reroll attempt.</li>
            <li>Rinse and repeat</li>
        </ol><p>
          Method 4: Rename Folder (Android only - not recommended as might cause brick)
        </p>
        <ol>
            <li>Go to Android &gt; Data &gt; com.YostarJP.BlueArchive &#38; rename it with a random character behind it (e.g. com.YostarJP.BlueArchive1)</li>
            <li>Delete the app's data</li>
            <li>Rename the file back to com.YostarJP.BlueArchive</li>
            <li>Relaunch the game</li>
            <li>Rinse and repeat</li>
        </ol>
      </div>
    )
  }
}

export default Reroll;