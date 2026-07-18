import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";

// Función para obtener el siguiente número de control
export async function obtenerSiguienteNumero() {
    const q = query(collection(db, "servicios"), orderBy("numeroControl", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    let siguiente = 1;
    querySnapshot.forEach((doc) => {
        siguiente = (doc.data().numeroControl || 0) + 1;
    });
    return siguiente;
}

// Función para guardar un servicio
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
