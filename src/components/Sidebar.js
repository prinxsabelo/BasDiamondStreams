import React from 'react'
import PageLinks from '../constants/PageLinks'
// import SocialLinks from '../constants/SocialLinks'
const Sidebar = ({ isOpen, toggleSidebar }) => {

    return (
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>

            <div className="side-container">
                <PageLinks styleClass={`${isOpen ? 'sidebar-links' : ''}`} toggleSidebar={toggleSidebar} />
                {/* <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} /> */}
            </div>
        </aside>
    )
}

export default Sidebar
