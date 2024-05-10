import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, } from "firebase/firestore"; 
import { users } from "../types/users-sign";
import { imgs } from "../types/img-post";
import { Attribute2 } from "../Components/Folder-Home/Folder-Feed/feed/feed";
import { doc, onSnapshot } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDgAJvGH4dhqzoRVxqP7xB48nCS9HspO4g",
    authDomain: "sai-project-9c598.firebaseapp.com",
    projectId: "sai-project-9c598",
    storageBucket: "sai-project-9c598.appspot.com",
    messagingSenderId: "133078057541",
    appId: "1:133078057541:web:c94d6d0fb1f2648dd0992c",
    measurementId: "G-XSVD4VFKFS"
};



export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const adduser = async (formData:  Omit<users, 'id'>) => {

  try {
    const docRef = await addDoc(collection(db, "users2"), formData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

export const addpost = async (formDataImg:  Omit<imgs, 'id'>) => {
  //console.log(formDataImg)
  if(!formDataImg.user){
    return  
  }
  try {
    const docRef = await addDoc(collection(db, "posts"), formDataImg);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

export const getpost = async () => {
	const querySnapshot = await getDocs(collection(db, 'posts'));
	const Arraypost: Array<imgs> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraypost.push({ id: doc.id, ...data });
	});
	console.log('get', Arraypost);
	return Arraypost;
};


// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });