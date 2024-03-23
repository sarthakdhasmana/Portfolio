import logo from '../Assets/logo.svg'
import '../ComponentCss/HeroSection.css'
import videoSource from '../Assets/1118385_Liquid_4k_Danger_1280x720.mp4';
import moveDown from '../Assets/Chevron_Down_Duo.svg';
import linkdin from '../Assets/Linkdin Social Icons.svg';
import git from '../Assets/Git Social Icons.svg';


function HeroSection() {
    return (
        <>
            <video id="background-video" autoPlay muted loop>
                <source src={videoSource} type="video/mp4" alt="BG Video" />
            </video>
            <header>
                <div className="NavbarLogo">
                    <img src={logo} alt='Sarthak Dhasmana' />
                </div>
                <div className="NavbarLinks">
                    <ul className='NavLinks'>
                        <li className='Links'>About</li>
                        <li className='Links'>Projects</li>
                        <li className='Links'>Skills</li>
                        <li className='Links'>Contact</li>
                    </ul>
                </div>
            </header>

            <div className='HeroSectionContent'>
                <div className='HeroLeftContent'>
                    <div className='Whitebar'></div>
                    <h1 className='HeroTitle'>I'm <span className='highlight'>Sarthak</span>, a<br /> <span className='TypewriteText'>Web Developer</span></h1>
                    <h3 className='HeroTitleInfo'>This is just a small text in which there will be about
                        portfolio text only this would be of 40 words thats alll
                        rest wil be qriteen below. In this video tutorial, you will learn to create Multiple Typing Text Animations using HTML CSS, and JavaScript. Actually, text changes automatically with beautiful animation.</h3>
                </div>
                <div className='HeroRightContent'></div>
            </div>
            <div className='HeroSection_bottom'>
                <div className='MoveDown'>
                    <img src={moveDown} alt="Down Arrrow" />
                </div>
                <div className='HeroBottomContent'>
                    <p className="followTitle">Social Links :</p>
                    <div className='socialProfileLinks'>
                        <a href='https://www.linkedin.com/in/sarthak-dhasmana-121415218/' target='_blank' rel='noreferrer'>
                            <div className='SocialLink'>
                                <img src={linkdin} alt='Linkdin social ICON' />
                                <p className='Social'>Sarthak Dhasmana</p>
                            </div>
                        </a>
                        <span></span>
                        <a href='https://github.com/sarthakdhasmana' target='_blank' rel='noreferrer'>
                            <div className='SocialLink'>
                                <img src={git} alt='Github social ICON' />
                                <p className='Social'>Sarthak Dhasmana</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;