import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { users } from '../types/users-sign';
import { imgs } from '../types/img-post';
import { doc, onSnapshot } from 'firebase/firestore';

export const firebaseConfig = {
	apiKey: 'AIzaSyDgAJvGH4dhqzoRVxqP7xB48nCS9HspO4g',
	authDomain: 'sai-project-9c598.firebaseapp.com',
	projectId: 'sai-project-9c598',
	storageBucket: 'sai-project-9c598.appspot.com',
	messagingSenderId: '133078057541',
	appId: '1:133078057541:web:c94d6d0fb1f2648dd0992c',
	measurementId: 'G-XSVD4VFKFS',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

export const createUser = async (
	email: string,
	password: string,
	name: string,
	username: string,
	confirmPass: string
) => {
	if (password !== confirmPass) {
		throw new Error('Passwords do not match');
	}

	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;

		await addDoc(collection(db, 'users2'), {
			uid: user.uid,
			email: user.email,
			name: name,
			username: username,
			password: password,
		});
		console.log('User created and added to Firestore with ID: ', user.uid);
	} catch (error: unknown) {
		if (error instanceof Error) {
			const errorCode = (error as any).code;
			const errorMessage = error.message;
			console.error('Error creating user: ', errorCode, errorMessage);
		} else {
			console.error('Unknown error', error);
		}
	}
};

export const addUser = async (formData: Omit<users, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'users2'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const addPost = async (formDataImg: Omit<imgs, 'id'>) => {
	if (!formDataImg.user) {
		return;
	}
	try {
		const docRef = await addDoc(collection(db, 'posts'), formDataImg);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getPost = async () => {
	const querySnapshot = await getDocs(collection(db, 'posts'));
	const arrayPost: Array<imgs> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		arrayPost.push({ id: doc.id, ...data });
	});
	console.log('get', arrayPost);
	return arrayPost;
};

export const listenParts = () => {
	onSnapshot;
};
