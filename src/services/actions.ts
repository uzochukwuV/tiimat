
import {
    // addDoc,
    // collection,
    doc,
    // getDoc,
    // getDocs,
    updateDoc,
    // deleteDoc,
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
        return {error}
    }
}

export const editAdminFaculty=async({payload}:any)=>{
    try {
       return await updateDoc(doc(db, FACULTY, payload.id), payload);
    } catch (error) {
        return {error}
    }
}

export const editTrimesterFaculty=async({payload}:any)=>{
    try {
       return await updateDoc(doc(db, SEMESTER, payload.id), payload);
    } catch (error) {
        return {error}
    }
}

export const editAdminCurriculum=async({payload}:any)=>{
    try {
       return await updateDoc(doc(db, CURRICULUM, payload.id), payload);
    } catch (error) {
        return {error}
    }
}