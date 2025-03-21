import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { storage } from "@/firebase"
import {uploadBytes, getDownloadURL, ref} from "firebase/storage"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const uploadPdf = async (file: File) => {
  const storeref = ref(storage, `pdfs/${file.name}`)
  await uploadBytes(storeref, file)
  return getDownloadURL(storeref)
}