import { useContext } from 'react';
import UserContext from './components/UserContext';

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '15px', margin: '15px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{userData.name}</h2>
      <p style={{ fontSize: '16px' }}>
        Email: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{userData.email}</span>
      </p>
    </div>
  );
};

export default UserProfile;
