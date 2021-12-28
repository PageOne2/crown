import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAcLncn2oTl_qibXD8h04YRbsQljRwxH4s",
    authDomain: "crown-db-efd87.firebaseapp.com",
    projectId: "crown-db-efd87",
    storageBucket: "crown-db-efd87.appspot.com",
    messagingSenderId: "289714235011",
    appId: "1:289714235011:web:fb3eb6ec8ef2b101119db6",
    measurementId: "${config.measurementId}"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;