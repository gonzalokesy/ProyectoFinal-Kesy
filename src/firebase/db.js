import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc
} from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)


export const getItems = async (setProductos) => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const items = []

    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
    })
    setProductos(items)

}
export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"))
    const categories = []

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name)
    })
    return categories
}

export const getProductsByCategory = async (category, setProductos) => {
    const q = query(collection(db, "items"), where("category", "==", category));

    const querySnapshot = await getDocs(q)
    const items = []

    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
    });
    setProductos(items)
}

export const getItem = async (id, setItem) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        setItem({ ...docSnap.data(), id: docSnap.id })
    }
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e
    }
}


