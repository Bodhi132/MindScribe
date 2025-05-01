import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import '../app/landingPageStyles.css'

export default function Home() {
  return (
    <div className="mainCtn">
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '0.5px solid #dfe1e6', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '0.2rem', paddingRight: '0.2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src='/mainLogo/mascot.png' width={60} height={60} alt="logo" />
          <h2>MindScribe</h2>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button>Sign In</button>
          <button>Get Started</button>
          <button></button>
        </div>
      </header>
      <main style={{ display: "flex", flexDirection: 'column' }}>
        <section className="introduction">
          <div className="intro-content">
            <div style={{ lineHeight: '1', marginBottom: '1rem' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '4rem' }}>Understand Your Mind.</h1>
              <h1 style={{ fontWeight: 'bold', fontSize: '4rem' }}>One Day at a Time.</h1>
            </div>
            <h2 style={{ fontSize: '2rem' }}>Track your mental state through daily journals <br /> and get ai powered insights.</h2>
            <div className="btn-section" style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              <button>Start Your Journey</button>
              <button>Sign In</button>
            </div>
          </div>
          <Image src='/mainLogo/mascot.png' width={700} height={700} alt="Big Logo" />
        </section>
        <section className="info">
          <h1>How MindScribe Helps You</h1>
          <div className="cardSec">
            <div className="cardHolder">
                <FaMicrophone className="icon" />
                <h3>Daily Journaling</h3>
              <p>Record your thought with ease</p>
            </div>
            <div className="cardHolder">
              <div>
                <BsFillJournalBookmarkFill className="icon"/>
                <h3>Daily Journaling</h3>
              </div>
              <p>Recieve key points each day</p>
            </div>
            <div className="cardHolder">
              <div>
                <FaChartLine className="icon" />
                <h3>Mood Charts</h3>
              </div>
              <p>Record your thought with ease</p>
            </div>
          </div>
        </section>
        <section className="joinSection">
          <h1>Ready to Take Control ?</h1>
          <h3>Join thousands of users who trust MindScribe for their Mental health journey.</h3>
          <button>Get Started Now</button>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} MindScribe. All rights reserved.</p>
      </footer>
    </div>
  );
}
