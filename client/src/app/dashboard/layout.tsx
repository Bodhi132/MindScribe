import { ReactNode } from "react"
import { GrOverview } from "react-icons/gr";
import { MdRecordVoiceOver } from "react-icons/md";
import { BsJournalAlbum } from "react-icons/bs";
import './dashboardStyles.css'


interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <main className=" h-screen">
            <header className="header">
                <div className="navBar">
                    <nav className="navCont">
                        <div id="nav-cont">
                            <GrOverview id="icon" />
                            <h2>Overview</h2>
                        </div>
                    </nav>
                    <nav className="navCont">
                        <div id="nav-cont">
                            <MdRecordVoiceOver id="icon" />
                            <h2>
                                Journal Records
                            </h2>
                        </div>
                    </nav>
                    <nav className="navCont">
                        <div id="nav-cont">
                            <BsJournalAlbum id="icon" />
                            <h2>
                                Journaling
                            </h2>
                        </div>
                    </nav>
                </div>
            </header>
            {children}
        </main>
    )
}