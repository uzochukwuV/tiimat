import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const getFaculties = async () => {
  const data = await getDocs(collection(db, "Faculty"));
  console.log(data);
  
  const edata = data.docs.map(async (d) => {
    const res = d.data();
    console.log(res);
    
    const courses = res.courses;

    const v = courses.map(async (c: any) => {
      const coursedoc = await getDoc(c);
      return { data: coursedoc.data(), id: coursedoc.id };
    });

    const pro = await Promise.all(v);

    const result = { id: d.id, name: d.data().name, courses: pro };

    return result;
  });
  const alldata = await Promise.all(edata);
  

  return alldata;
};

export const addCourse = async (document: string, value: string) => {
  const docref = doc(db, "Faculty", document);
  const create = await addDoc(collection(db, "Course"), {
    name: value,
  });
  const update = await updateDoc(docref, {
    courses: arrayUnion(create),
  });
  console.log(update);

  const res = await getDoc(docref);

  return res.data();
};

export const getCourse = async (document: string) => {
  const docref = doc(db, "Course", document);
  const data = await getDoc(docref);
  const res = data.data();


  const v =   res?.curriculum?.map(async (c: any) => {
    const coursedoc = await getDoc(c);
    return { data: coursedoc.data(), id: coursedoc.id };
  }) || [null];

  const pro = await Promise.all(v);

  const result = { data: res, curriculum: pro, id: data.id };

  return result;
} ;

export const getAllCourse = async () => {
  const docref = collection(db, "Course");
  const data = await getDocs(docref);

  return data.docs.map((c) => ({ id: c.id, data: c.data() }));
};

export const updateCourse = async (
  document: string,
  price: string,
  desc: string
) => {
  console.log(document);

  const docref = doc(db, "Course", document);
  const update = await updateDoc(docref, {
    price: price,
    description: desc,
  });
  console.log(update);

  const res = await getDoc(docref);

  console.log(res.data());

  return res.data();
};

export const addCurriculum = async (
  document: string,
  title: string,
  topics: string
) => {
  const docref = doc(db, "Course", document);
  console.log(document);

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
    email?:string,
    phone?:string,
    location?:string,
    info?:string
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
    console.log(res.docs);
    
    return res.docs;
  };
  