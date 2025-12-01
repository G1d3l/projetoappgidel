import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMEdDBjz5ZDKK8qKcdGb53LpqOjQU0Y4M",
  authDomain: "controle-de-tarefas-91303.firebaseapp.com",
  databaseURL: "https://controle-de-tarefas-91303-default-rtdb.firebaseio.com",
  projectId: "controle-de-tarefas-91303",
  storageBucket: "controle-de-tarefas-91303.firebasestorage.app",
  messagingSenderId: "952536951822",
  appId: "1:952536951822:web:939a50e4c6fbbc7f93e05f",
  measurementId: "G-8CLX5D1Y6G"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);


