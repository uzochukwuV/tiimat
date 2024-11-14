import {addDoc, arrayUnion, collection, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../firebase"



export const getFaculties = async () => {
    const data = (await getDocs(collection(db, "Faculty")));
    const edata = data.docs.map(async(d)=>{
        
        const res= d.data()
        const courses = res.courses;
       

        const v = courses.map(async(c:any)=>{
            const coursedoc = await getDoc(c)
            return {data:coursedoc.data(), id:coursedoc.id};
        })

        const pro = await Promise.all(v);
        
        
        const result = {id:d.id, name:d.data().name, courses:pro};
        
        
        return result;
        
        
        
        
        
        
    })
    const alldata =await Promise.all(edata);
    console.log(alldata);
    
    
    
    
    return alldata
        
}




export const addCourse = async(document:string, value:string)=>{
    const docref = doc(db, "Faculty", document)
    const create = await addDoc(collection(db, "Course"), {
        name:value
    })
    const update = await updateDoc(docref, {
        courses: arrayUnion(create)
    })
    console.log(update);
    
    const res = await getDoc((docref))


    return res.data();
}


export const getCourse =async(document:string)=>{
    const docref = doc(db, "Course", document)
    const data = await getDoc(docref);
   
    return data.data();
    
}

export const getAllCourse =async()=>{
    const docref = collection(db, "Course")
    const data = await getDocs(docref);

    
    return data.docs.map((c)=> ({id:c.id, data:c.data()}));
    
}

export const updateCourse = async(document:string, price:string, desc:string)=>{
    console.log(document);
    
    const docref = doc(db, "Course", document)
    const update = await updateDoc(docref, {
        price: price,
        description:desc,
    });
    console.log(update);
    

    const res = await getDoc(docref)

   console.log(res.data());
   
    
    return res.data();

}