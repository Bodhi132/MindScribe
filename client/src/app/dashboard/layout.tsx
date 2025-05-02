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
        <div>
            <aside>
                <nav>
                    <div className="nav-cont">
                        <GrOverview />
                        <h2>Overview</h2>
                    </div>
                </nav>
                <nav>
                    <div className="nav-cont">
                        <MdRecordVoiceOver />
                        <h2>
                            Journal Records
                        </h2>
                    </div>
                </nav>
                <nav>
                    <div className="nav-cont">
                        <BsJournalAlbum />
                        <h2>
                            Journaling
                        </h2>
                    </div>
                </nav>
            </aside>
            {children}
        </div>
    )
}