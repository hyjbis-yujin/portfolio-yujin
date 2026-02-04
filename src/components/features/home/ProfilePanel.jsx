import React from 'react'

const ProfilePanel = () => {
    return (
        <div className="home-panel profile-panel">
            <div className="profile-info">
                <span className="profile-name">Han Yu Jin</span>
                <span className="profile-email">frontend-dev@email.com</span>
            </div>
            <div className="profile-actions">
                <button className="panel-btn copy-email">
                    <span className="btn-icon btn-arrow-icon"></span>
                    Copy Email
                </button>
                <button className="panel-btn placeholder-btn">
                    <span className="btn-icon btn-arrow-icon"></span>
                    Resume
                </button>
            </div>
        </div>
    )
}

export default ProfilePanel
