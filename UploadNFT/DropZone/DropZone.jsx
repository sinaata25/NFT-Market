import React,{useState,useCallback} from 'react'
import Style from "./DropZone.module.css"
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import images from "../../img"
import { title } from 'process'

const DropZone = ({properties,category, fileSize,royalties,description,website,itemName,subHeading,heading,uploadImageToIPFS,setImage}) => {
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(async(acceptedFile)=>{
    const url=await uploadImageToIPFS(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
  });

  const {getRootProps,getInputProps}= useDropzone({
    onDrop,
    accept:"image/*",
    maxSize:5000000
  })

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input} >
          <p>JPG,PNG,WEBM,MAX 100MB</p>
          <div className={Style.DropZone_box_input_img} >
            <Image src={images.upload} alt="upload" width={100} height={100} className={Style.DropZone_box_input_img_img} />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
            <div className={Style.DropZone_box_aside_box}>
              <Image src={fileUrl} alt="nft image" width={200} height={200} />
              <div className={Style.DropZone_box_aside_box_preview} >
                <div className={Style.DropZone_box_aside_box_preview_one}>
                  <p>
                    <samp>NFT Name:</samp>{itemName || ""}
                  </p>
                  <p>
                    <samp>Website:</samp>{website || ""}
                  </p>
                </div>
                <div className={Style.DropZone_box_aside_box_preview_two}>
                  <p>
                    <span>Description</span>
                    {description || ""}
                  </p>
                </div>
                <div className={Style.DropZone_box_aside_box_preview_three}>
                  <p>
                    <span>Royalties</span>
                    {royalties || ""}
                  </p>
                  <p>
                    <span>File Size</span>
                    {fileSize || ""}
                  </p>
                  <p>
                    <span>Properties</span>
                    {properties || ""}
                  </p>
                  <p>
                    <span>Category</span>
                    {category || ""}
                  </p>
                </div>
              </div>
            </div>
        </aside>
      ) }
    </div>
  )
}

export default DropZone 