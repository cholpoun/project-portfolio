import './ConnectSection.css';
import profileImage from '../../assets/Cholpon.png';

const ConnectSection = ({ name, phone, email, socialLinks }) => {
  return (
    <section className="connect-section">
      <h2 className="connect-title">Let's Talk</h2>
      <div className="connect-content">
        <img src={profileImage} alt={`${name}`} className="connect-image" />
        <div className="connect-info">
          <h3 className="connect-name">{name}</h3>
          <p className="connect-phone">{phone}</p>
          <p className="connect-email">{email}</p>
        </div>
        <div className="connect-social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={link.icon} alt={`${link.name} icon`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
