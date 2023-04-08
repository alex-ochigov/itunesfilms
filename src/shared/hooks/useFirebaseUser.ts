import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const useFirebaseUser = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  function onAuthStateChanged(fbuser: FirebaseAuthTypes.User | null) {
    if (fbuser) {
      setUser(fbuser);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return user;
};

export default useFirebaseUser;
