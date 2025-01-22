
import './homework01.css';
import avatar from '../../images/avatar.jpg';

const Homework01 = () => {
  return (
    <>
    <div className="profile-card">
      <img
        src={avatar}
        alt="Profile Avatar"
              className="profile-image"
        />
      <h2 className="profile-name">Aleksandr Gerstenberger</h2>
          <p className="profile-hobby">Мои хобби: программирование,
              ремонт компютерной техники, пчеловодство, путешествия.</p>
      </div>
      </>
  );
};

export default Homework01;