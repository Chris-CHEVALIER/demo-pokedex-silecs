import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    // Placer les identifiants Firebase ici (SDK)
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Fire {
    getPokemons(callback) {
        const q = query(collection(db, 'pokemons'), orderBy('number', 'asc'));
        onSnapshot(q, (snapshot) => {
            let pokemons = [];
            snapshot.forEach(doc => {
                pokemons.push({ id: doc.id, ...doc.data() });
            });
            callback(pokemons);
        });
    }

    addPokemon(pokemon) {
        addDoc(collection(db, 'pokemons'), pokemon);
    }

    updatePokemon(pokemon) {
        updateDoc(doc(db, 'pokemons', pokemon.id), pokemon);
    }

    deletePokemon(pokemon) {
        deleteDoc(doc(db, 'pokemons', pokemon.id))
    }
}