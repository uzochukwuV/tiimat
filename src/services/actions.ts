
import {
    addDoc,
    collection,
    // addDoc,
    // collection,
    doc,
    // getDoc,
    // getDocs,
    updateDoc,
    deleteDoc,
    getDocs,
    // query,
    // where,
  } from "firebase/firestore";
  import { db } from "../firebase";
import { COURSE, FACULTY, SEMESTER, CURRICULUM, CERTIFICATE, APPDATA, MESSAGE } from "./constants";
import {AppDataType} from "./types"

export const updateAppData = async (payload: AppDataType) => {
  try {
    const docRef = doc(db, APPDATA, "appData");
    await updateDoc(docRef, payload as any);
  } catch (error) {
    console.error("Error updating app data:", error);
    throw error;
  }
}

export const createMessage = async (payload: any) => {
  try {
    await addDoc(collection(db, MESSAGE), payload);
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  }
}

export const editAdminCourse=async({payload}:any)=>{
    console.log(payload);
    
    try {
       return await updateDoc(doc(db, COURSE, payload.id), payload);
    } catch (error) {
        throw error
    }
}

export const editAdminFaculty=async({payload}:any)=>{
    try {
       return await updateDoc(doc(db, FACULTY, payload.id), payload);
    } catch (error) {
        throw error
    }
}

export const editTrimesterFaculty=async({payload}:any)=>{
    try {
       return await updateDoc(doc(db, SEMESTER, payload.id), payload);
    } catch (error) {
        throw error
    }
}

export const editAdminCurriculum=async({payload}:any)=>{
    try {
       return await updateDoc(doc(db, CURRICULUM, payload.id), payload);
    } catch (error) {
        throw error
    }
}

export const createAdminCourse= async({payload}:{payload:any})=>{
    console.log(payload)
    try {
        await addDoc(collection(db, COURSE), payload)
    } catch (error) {
        throw error
    }
}

export const deleteAdminCourses= async({payload}:{payload:any})=>{
    console.log(payload)
    try {
        const alldocs = payload.map((item:any)=> {
            return deleteDoc(doc(db, COURSE, item.id))
        })
        return await Promise.all(alldocs)
    } catch (error) {
        throw error
    }
}


export const createAdminCurriculum= async({payload}:any)=>{
    try {
        await addDoc(collection(db, CURRICULUM), {
            ...payload,
            createdAt: (new Date()).toUTCString()
        })
    } catch (error) {
        throw error
    }
}

export const deleteAdminCurriculum= async({payload}:{payload:any})=>{
    console.log(payload)
    try {
        const alldocs = payload.map((item:any)=> {
            return deleteDoc(doc(db, CURRICULUM, item.id))
        })
        return await Promise.all(alldocs)
    } catch (error) {
        throw error
    }
}


export const createAdminTimester= async({payload}:any)=>{
    try {
        await addDoc(collection(db, SEMESTER), {
            ...payload,
            createdAt: (new Date()).toUTCString()
        })
    } catch (error) {
        throw error
    }
}


export const deleteAdminTrimester= async({payload}:{payload:any})=>{
    console.log(payload)
    try {
        const alldocs = payload.map((item:any)=> {
            return deleteDoc(doc(db, SEMESTER, item.id))
        })
        return await Promise.all(alldocs)
    } catch (error) {
        throw error
    }
}


export const createAdminFaculty= async({payload}:any)=>{
    try {
        await addDoc(collection(db, FACULTY), payload)
    } catch (error) {
        throw error
    }
}

export const deleteAdminFaculty= async({payload}:{payload:any})=>{
    console.log(payload)
    try {
        const alldocs = payload.map((item:any)=> {
            return deleteDoc(doc(db, FACULTY, item.id))
        })
        return await Promise.all(alldocs)
    } catch (error) {
        throw error
    }
}


export const createAdminCertificate= async(payload:any)=>{
    try {
        console.log(payload)
        await addDoc(collection(db, CERTIFICATE), payload)
    } catch (error) {
        throw error
    }
}

export const getAllCertificate= async()=>{
    try {
        const snapshot = await getDocs(collection(db, CERTIFICATE));
        console.log(snapshot.docs)
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return data;
    } catch (error) {
        throw error
    }
}
