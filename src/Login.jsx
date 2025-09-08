import React from 'react';
import reactLogo from './assets/k.jpeg'
import './Login.css'
function Login() {
  return (
 <div className="settings-container">
      <div className="settings-card">
        <h2 className="settings-title">Account Settings</h2>

        <div className="profile-section">
          {/* Profile Image */}
          <div className="profile-image">
            <img 
              src={reactLogo} 
              alt="Profile" 
            />
            <span className="camera-icon">📷</span>
          </div>

          {/* Email & Info */}
          <div className="profile-info">
            <p className="email">Marry@Gmail.Com</p>
          </div>
        </div>
         <p className="description">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, 
              Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore 
              Magna Aliquyam Erat, Sed Diam
            </p>
      </div>
    </div>

  );
}

export default Login;
