// supabaseStorage.js

import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase credentials

import { getAllCertificate } from '@/services/actions';

const supabase = createClient(import.meta.env.VITE_API_SUPABASE_URL,import.meta.env.VITE_API_SUPABASE_ANON)

export async function updateCerts(){
    const certs = await getAllCertificate();
    
    return certs as any
}

/**
 * Upload a file to Supabase storage
 */
export async function uploadFile(bucketName:string, path:string, file:any) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false, // prevent overwriting
    });

  if (error) throw error;
  return data;
}

/**
 * List files in a bucket/folder
 */
export async function listFiles(bucketName: string, folderPath = '') {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .list(folderPath);

  if (error) throw error;
  return data;
}

/**
 * Download a file and return blob URL
 */
export async function downloadFile(bucketName:string, filePath:any) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(filePath);

  if (error) throw error;

  const blobUrl = URL.createObjectURL(data);
  return blobUrl;
}

/**
 * Get a public URL to a file
 */
export function getPublicUrl(bucketName:string, filePath:string) {
  const { data } = supabase.storage
    .from(bucketName)
    .getPublicUrl(filePath);

  return data.publicUrl;
}

/**
 * Delete a file from storage
 */
export async function deleteFile(bucketName:string, filePath:string) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .remove([filePath]);

  if (error) throw error;
  return data;
}
