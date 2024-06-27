import React from 'react'

export default function DownloadButton() {

    const downloadTextFile=()=>{
        const blob=new Blob(['This is text'],{type:'text/plain'});
        const url=URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url;
        a.download='babycloud.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url)
    }
  return (
          <button
           className="bg-slate-900 p-4 text-white rounded-full mb-9 mt-0"
           onClick={downloadTextFile}
           >
            Download For Free
          </button>
  )
}
