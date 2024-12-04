import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const COURSE ="Course"
const FACULTY= "Faculty"
const SEMESTER="Semester"
const CURRICULUM="Curriculum"

export const addFaculty = async (
  name: string,
  description: string,
  img: string
) => {
  const docref = collection(db, FACULTY);
  const create = await addDoc(docref, {
    name: name,
    description: description,
    image: img,
  });
  console.log(create);
  const res = await getDocs(docref);
  return res.docs;
};

export const getFaculties = async () => {
  try {
    const res = await getDocs(collection(db, FACULTY));
    return res.docs.map((data)=>{
      return {...data.data(), id: data.id}
    })
  } catch (error) {
    console.log(error);
    
  }
};

export const getAdminFacultyData = async () => {
  try {
    const res = await getDocs(collection(db, FACULTY));
    return res.docs.map((data)=>{
      return {...data.data(), id: data.id}
    })
  } catch (error) {
    console.log(error);
    
  }
};

export const getCoursesInFaculty = async (document:string) => {
try {
  const ref = collection(db, COURSE );
  const q = query(ref, where("facultyId", "==", document))
  const res= (await getDocs(q));
  console.log(res.docs.map((data)=>{
    return {...data.data(), id: data.id}
  }));
  
  return res.docs.map((data)=>{
    return {...data.data(), id: data.id}
  })
} catch (error) {
  console.log(error);
  
}
};

export const addCourse = async ({facultyId, name,price,
  description,
  image}:any) => {
    console.log(facultyId, name,price,
      description,
      image);
    
  try {
    return  await addDoc(collection(db, COURSE), {
      name: name,
      facultyId:facultyId,
      price: price,
    description: description,
    image: image,
    }).then((data)=>{
      console.log(data);
      
    })
    
  } catch (error) {
    console.log(error);
    
  }
};

export const getCourse = async (document: string) => {
  
    try {
      const res = await getDoc(doc(db, COURSE, document));
  
      return {id:res.id, ...res.data()}
    } catch (error) {
      console.log(error);
      
    }
  };


export const getFaculty = async (document: string) => {
  const docref = doc(db, FACULTY, document);
  const data = await getDoc(docref);
  const res = data.data();

  return {id:data.id, ...res}
};

export const getAllCourse = async () => {
  const docref = collection(db, COURSE);
  const data = await getDocs(docref);

  return data.docs.map((c) => ({ id: c.id, ...c.data() }));
};

export const getAllSemester = async () => {
  const docref = collection(db, SEMESTER);
  const data = await getDocs(docref);

  return data.docs.map((c) => ({ id: c.id, data: c.data() }));
};

export const updateCourse = async (
  document: string,
  price: string,
  desc: string,
  image: string
) => {
  const docref = doc(db, COURSE, document);
  const update = await updateDoc(docref, {
    price: price,
    description: desc,
    image: image,
  });
  console.log(update);

  const res = await getDoc(docref);

  return res.data();
};

export const addSemester = async (
  document: string,
  name: string,
  description: string
) => {

  try {
    await addDoc(collection(db, SEMESTER), {
      name: name,
      description: description,
      courseId: document
    });
  
    return {response:"success"};
  } catch (error) {
    return {response:"error"};
  }
};

export const addCurriculum = async (
  document: string,
  title: string,
  topics: string
) => {
  try {
    await addDoc(collection(db, CURRICULUM), {
      title: title,
      topics: topics,
      semesterId:document
    });
  
    return {response:"success"};
  } catch (error) {
    return {response:"error"};
  }
};

export const sendMessage = async (
  title: string,
  name?: string,
  email?: string,
  phone?: string,
  location?: string,
  info?: string
) => {
  await addDoc(collection(db, "Message"), {
    title: title,
    name: name || "",
    email: email || "",
    phone: phone || "",
    location: location || "",
    info: info || "",
  });

  const docref = collection(db, "Message");

  const res = await getDocs(docref);

  return res.docs;
};

export const deleteFaculty = async (document: string) => {
  console.log(document);

  const docref = doc(db, FACULTY, document);
  try {
    await deleteDoc(docref);
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteCourse = async (document: string) => {
  const docref = doc(db, COURSE, document);
  try {
    await deleteDoc(docref);
    return true;
  } catch (error) {
    return false;
  }
};


export const getSemester = async (document: string) => {
  try {
    const res = await getDoc(doc(db, SEMESTER, document));

    return {id:res.id, ...res.data()}
  } catch (error) {
    console.log(error);
    
  }
};


export const getAllSemesterInCourse= async (document: string) => {
  try {
    const ref = collection(db, SEMESTER);
    const q = query(ref, where("courseId", "==", document))
    const res= (await getDocs(q));
    console.log(res.docs.map((data)=>{
      return {...data.data(), id: data.id}
    }));
    
    return res.docs.map((data)=>{
      return {...data.data(), id: data.id}
    })
  } catch (error) {
    console.log(error);
    
  }
};

export const getAllCurriculumInSemester =async (document: string) => {
  try {
    const ref = collection(db, CURRICULUM);
    const q = query(ref, where("semesterId", "==", document))
    const res= (await getDocs(q));
    return res.docs.map((data)=>{
      return {...data.data(), id: data.id}
    })
  } catch (error) {
    console.log(error);
    
  }
};

export const getAllCurriculum=async()=>{
  return (await getDocs(collection(db,CURRICULUM))).docs.map((data)=>data.data())
}

export const delSemester=async(id:string)=>{
  console.log("deleting ", id);
  
  try {
    const docdel = await deleteDoc(doc(db, SEMESTER, id));
    console.log(docdel);
    
  } catch (error) {
    console.log(error);
    
  }
}

export const delCurriculum=async(id:string)=>{
  console.log("deleting ", id);
  
  try {
    const docdel = await deleteDoc(doc(db, CURRICULUM, id));
    console.log(docdel);
    
  } catch (error) {
    console.log(error);
    
  }
}