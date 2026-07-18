import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Función para obtener el siguiente número
export async function obtenerSiguienteNumero() {
    try {
        const q = query(collection(db, "servicios"), orderBy("numeroControl", "desc"), limit(1));
        const querySnapshot = await getDocs(q);
        let siguiente = 1;
        querySnapshot.forEach((doc) => {
            siguiente = (doc.data().numeroControl || 0) + 1;
        });
        return siguiente;
    } catch (error) {
        console.error("Error al obtener número:", error);
        return 1;
    }
}

// Función para guardar
export async function guardarServicio(data) {
    try {
        await addDoc(collection(db, "servicios"), {
            ...data,
            estado: 'Pendiente',
            fecha: new Date().toLocaleDateString()
        });
        return true;
    } catch (e) {
        console.error("Error al guardar: ", e);
        return false;
    }
}
