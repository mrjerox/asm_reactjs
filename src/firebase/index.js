import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
	apiKey: "AIzaSyCDloRn9PpZkQ9dgaX06p6OqzWuzn15eTI",
	authDomain: "reactjs-889b9.firebaseapp.com",
	databaseURL: "https://reactjs-889b9.firebaseio.com",
	projectId: "reactjs-889b9",
	storageBucket: "reactjs-889b9.appspot.com",
	messagingSenderId: "1032762459581",
	appId: "1:1032762459581:web:294e2dd56b5c06efabbed4",
	measurementId: "G-R00RKH4DRR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
	storage, firebase as default
}