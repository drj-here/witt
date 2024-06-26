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
    <div>
      <div className="flex justify-center mt-4">
          <button
           className="bg-slate-900 p-5 text-white rounded-full"
           onClick={downloadTextFile}
           >
            Download For Free
          </button>
        </div>
    </div>
  )
}
