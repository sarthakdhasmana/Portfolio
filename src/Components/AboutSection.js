import '../ComponentCss/AboutSection.css'


function AboutSection() {
    return (
        <>
            <div className='AboutWrapper'>
                <div className="AboutTop">
                    <div className="AboutHeadline">
                        <h2>About Me :</h2>
                        <div></div>
                    </div>
                    <div className="AboutContent">
                        <p className="AboutText">Sample text about me will be written here and the text shouldn’t be small it should be readable and here only about myself will be written and also few things about me would be written as.</p>
                        <p className="AboutText">
                            my name , where do i live, what have i dont, what am i doing right now, what all things are there about me mall it should be readable and here only about myself will be written and also few things about me would be written as.
                        </p>
                    </div>
                </div>
                <div className="AboutBottom">
                    <div className="AboutBottomLeft">
                        <div className="ContentTitle">
                            <h2>Personal Info :</h2>
                            <span></span>
                        </div>
                        <div className="ContentBelow">
                            <p>Name : <span>Sarthak Dhasmana</span></p>
                            <p>Father’s Name : <span>Shri Krishan Dhasmana</span></p>
                            <p>Bachelor : <span>Bachelor of Computer Application(BCA)</span></p>
                            <p>Phone No. : <span>+91 85275 02343</span></p>
                            <p>Email : <span>Sarthakmay09@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="AboutBottomRight">
                        <div className="LanguageInfo">
                            <div className="LanguageTitle">
                                <h2>Language Proficiency :</h2>
                                <span></span>
                            </div>
                            <p>English(C1), Hindi(native), Deutsch(A2)</p>
                        </div>
                        <div className="HobbyInfo">
                            <div className="HobbyTitle">
                                <h2>Language Proficiency :</h2>
                                <span></span>
                            </div>
                            <p>Listening Music, Podcasts, Tv-Shows, Travelling, Video Games.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection