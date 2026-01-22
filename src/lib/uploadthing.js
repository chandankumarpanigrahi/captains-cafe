// lib/uploadthing.js
import { createUploadthing } from "uploadthing/react";

const f = createUploadthing();

export const uploadRouter = {
  jobResume: f({
    pdf: { maxFileSize: "4MB" },
    "application/msword": { maxFileSize: "4MB" },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { maxFileSize: "4MB" },
    "text/plain": { maxFileSize: "1MB" },
    "application/rtf": { maxFileSize: "4MB" },
  })
    .middleware(async () => {
      return { userId: "job-application" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { 
        url: file.url,
        name: file.name 
      };
    }),
};