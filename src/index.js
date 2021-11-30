
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue} from 'firebase/database';

import { getFirebaseConfig } from './firebase-config';

import { books } from './libros';

//inicializa firebase
const firebaseAppConfig = getFirebaseConfig(); 
const firebaseApp = initializeApp(firebaseAppConfig);

//DECLARACIONES
const libros = document.getElementById('libros');

function getLibros() {

    const db = getDatabase();
    const dbRef = ref(db, "libros");

    onValue(dbRef, (snapshot) => {

        const data = snapshot.val();
        actLibros(data);

    });

}

function actLibros(data) {

    if (data) {
        
        libros.innerHTML = " ";
       
        Object.keys(data).forEach((key, index)=> {
            
            const card = new books(data[key])

            libros.appendChild(card.render());
           
        });

    }

}

getLibros();