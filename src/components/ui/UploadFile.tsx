'use client'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Inbox } from 'lucide-react'

export default function UploadFile() {

  const {getRootProps, getInputProps} = useDropzone({
    accept: {"application/pdf":[".pdf"]},
    maxFiles: 1,
    onDrop: (acceptedFile) => {
        console.log(acceptedFile);
    },
  });

  return (
    <div className='p-2 bg-white rounded-xl'>
        <div {...getRootProps({
            className : "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col"
        })}>
            <input {...getInputProps()} />
            <>
                <Inbox className='text-blue-500 w-10 h-10'/>
                <p className='mt-2 text-sm text-slate-500'>
                    Drag & Drop PDF here.
                </p>
            </>
        </div>
    </div>
  )
}
