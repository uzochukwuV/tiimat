
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
    // query,
    // where,
  } from "firebase/firestore";
  import { db } from "../firebase";
  
  const COURSE ="Course"
  const FACULTY= "Faculty"
  const SEMESTER="Semester"
  const CURRICULUM="Curriculum"

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
        await addDoc(collection(db, CURRICULUM), payload)
    } catch (error) {
        throw error
    }
}

export const deleteAdminCurriculum= async({payload}:{payload:any})=>{
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


export const createAdminTimester= async({payload}:any)=>{
    try {
        await addDoc(collection(db, SEMESTER), payload)
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
