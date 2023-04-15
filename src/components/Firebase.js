
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCahoyOgcfC8rktAkFgVO78DxTYVcuqVAM",
  authDomain: "userdataentry-9d9da.firebaseapp.com",
  projectId: "userdataentry-9d9da",
  storageBucket: "userdataentry-9d9da.appspot.com",
  messagingSenderId: "521829037432",
  appId: "1:521829037432:web:e4f6b091adf763c45f448d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth()

export {app , auth}