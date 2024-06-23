"use client"

import { useState, useRef } from "react"

const CopyButton = () => {
 return (
  <div className="flex items-center justify-center mb-4">
   <button
    type="button"
    onClick={() => navigator.clipboard.writeText("https://thomasjeffersonrecites.com/videos/short_video.mp4")}
    className="btn btn-primary"
   >
    Click to Copy Video
   </button>
  </div>
 )
}

export default CopyButton