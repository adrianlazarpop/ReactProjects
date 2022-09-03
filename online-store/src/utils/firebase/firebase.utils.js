// Tihs is from firebase web page
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	ProviderId,
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA_v2mhdkYZ2HydpIA6ZKf4E0YnICY2isg",
	authDomain: "crwn-cloting-db-2e82a.firebaseapp.com",
	projectId: "crwn-cloting-db-2e82a",
	storageBucket: "crwn-cloting-db-2e82a.appspot.com",
	messagingSenderId: "653538389157",
	appId: "1:653538389157:web:b774d6d20dc534353e714c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	// console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);
	// console.log(userSnapshot.exists());

	// if user data does not exist -> 
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;


	// check if user data exits
	// return userDocRef
};