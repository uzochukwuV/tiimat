import {
  addDoc,
  arrayUnion,
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

export const addFaculty = async (
  name: string,
  description: string,
  img: string
) => {
  const docref = collection(db, "Faculty");
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
    const res = await getDocs(collection(db, "Faculty"));
    return res.docs.map((data)=>{
      return {...data.data(), id: data.id}
    })
  } catch (error) {
    console.log(error);
    
  }
};

export const getCoursesInFaculty = async (document:string) => {
try {
  const ref = collection(db, "Course" );
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
    return  await addDoc(collection(db, "Course"), {
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
  const docref = doc(db, "Course", document);
  const data = await getDoc(docref);
  const res = data.data();

  const v = res?.curriculum?.map(async (c: any) => {
    const coursedoc = await getDoc(c);
    return { data: coursedoc.data(), id: coursedoc.id };
  }) || [null];

  const pro = await Promise.all(v);

  const result = { data: res, curriculum: pro, id: data.id };

  return result;
};

export const getFaculty = async (document: string) => {
  const docref = doc(db, "Faculty", document);
  const data = await getDoc(docref);
  const res = data.data();

  return {id:data.id, ...res}
};

export const getAllCourse = async () => {
  const docref = collection(db, "Course");
  const data = await getDocs(docref);

  return data.docs.map((c) => ({ id: c.id, ...c.data() }));
};

export const getAllSemester = async () => {
  const docref = collection(db, "Semester");
  const data = await getDocs(docref);

  return data.docs.map((c) => ({ id: c.id, data: c.data() }));
};

export const updateCourse = async (
  document: string,
  price: string,
  desc: string,
  image: string
) => {
  const docref = doc(db, "Course", document);
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
  const docref = doc(db, "Course", document);

  const create = await addDoc(collection(db, "Semester"), {
    name: name,
    description: description,
  });

  const update = await updateDoc(docref, {
    semesters: arrayUnion(create),
  });
  console.log(update);

  const res = await getDoc(docref);

  return res.data();
};

export const addCurriculum = async (
  document: string,
  title: string,
  topics: string
) => {
  const docref = doc(db, "Semester", document);

  const create = await addDoc(collection(db, "Curriculum"), {
    title: title,
    topics: topics,
  });
  const update = await updateDoc(docref, {
    curriculum: arrayUnion(create),
  });
  console.log(update);

  const res = await getDoc(docref);

  return res.data();
};

export const sendMessage = async (
  title: string,
  name?: string,
  email?: string,
  phone?: string,
  location?: string,
  info?: string
) => {
  const createMessage = await addDoc(collection(db, "Message"), {
    title: title,
    name: name || "",
    email: email || "",
    phone: phone || "",
    location: location || "",
    info: info || "",
  });

  console.log(createMessage);

  const docref = collection(db, "Message");

  const res = await getDocs(docref);

  return res.docs;
};

export const deleteFaculty = async (document: string) => {
  console.log(document);

  const docref = doc(db, "Faculty", document);
  try {
    await deleteDoc(docref);
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteCourse = async (document: string) => {
  const docref = doc(db, "Course", document);
  try {
    await deleteDoc(docref);
    return true;
  } catch (error) {
    return false;
  }
};


export const getSemester = async (document: string) => {
  const docref = doc(db, "Semester", document);
  const data = await getDoc(docref);
  const res = data.data();

  const v = res?.curriculum?.map(async (c: any) => {
    const coursedoc = await getDoc(c);
    return { data: coursedoc.data(), id: coursedoc.id };
  }) || [null];

  const pro = await Promise.all(v);

  const result = { data: res, curriculum: pro, id: data.id };

  return result;
};
