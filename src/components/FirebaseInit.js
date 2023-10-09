import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRUW7WNENXmxGdhEofeGEx9AORUIAzDCA",
  authDomain: "test-project-4b094.firebaseapp.com",
  projectId: "test-project-4b094",
  storageBucket: "test-project-4b094.appspot.com",
  messagingSenderId: "827479118190",
  appId: "1:827479118190:web:2a16a8737aa60ce8f5b17f",
  measurementId: "G-MECPTP4N93"
};

const FirebaseInit = () => {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, []);

  return null;
};

export default FirebaseInit;
