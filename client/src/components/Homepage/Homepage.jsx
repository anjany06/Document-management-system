import React from "react";
import { FiFileText,FiEye  } from "react-icons/fi";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegFolderOpen, FaLink } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
const Homepage = () => {
  const recent = [
    {
      fileName: "My Projects",
      location: "Folder: Main",
    },
    {
      fileName: "My Projects",
      location: "Folder: Main",
    },
    {
      fileName: "My Projects",
      location: "Folder: Main",
    },
  ];
  const files = [
    {
      fileName: "My Projects",
      lastModified: "Folder: Main",
      size: "167kb",
    },
    {
      fileName: "My Projects",
      lastModified: "Folder: Main",
      size: "167kb",
    },
    {
      fileName: "My Projects",
      lastModified: "Folder: Main",
      size: "167kb",
    },
  ];
  return (
    <>
      <nav className="flex justify-between px-10 py-3 ">
        <h1 className="text-2xl font-bold">Documents</h1>
        <div className="flex space-x-5">
          <button className="bg-[#4459FD] items-center p-2 rounded-xl flex text-white gap-1">
            <MdOutlineFileUpload /> Upload File
          </button>
          <button className="border-[1px] items-center p-2 rounded-xl flex gap-1">
            <FiFileText />
            New File
          </button>
          <button className="border-[1px] items-center p-2 rounded-xl flex gap-1">
            <FaRegFolderOpen />
            Create Folder
          </button>
          <button className="border-[1px] py-2 flex justify-center px-4 rounded-xl items-center">
            <HiDotsHorizontal />
          </button>
        </div>
      </nav>
      <hr />
      <section className="flex flex-col px-10 py-3 gap-3">
        <h1 className="text-xl font-semibold">Recently Used</h1>
        <div className="flex flex-row space-x-5">
        {recent.map((item, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <div className="rounded-lg flex justify-center items-center bg-slate-100 w-[10vw] h-[6vw]">
                <img className="w-10" src="./images/files-logo.png" />
              </div>
              <h4>{item.fileName}</h4>
              <p className="text-sm">{item.location}</p>
            </div>
        ))}
        </div>
      </section>
      <section className="px-10 py-3 gap-3 flex flex-col">
        <h1 className="text-xl font-semibold">All Files</h1>
        <div className="border-[1px] items-center p-2 rounded-xl flex gap-1 w-80">
          <IoSearch size={25} />
          <input type="text" placeholder="Search" className="bg-transparent" />
        </div>
        <div>
          <div className="flex justify-between px-3 py-2 bg-slate-100 text-lg">
            <div>Name</div>
            <div>Last Modified</div>
            <div>Size</div>
            <div>Actions</div>
          </div>
          {files.map((item,index)=>(
          <div className="flex justify-between items-center px-3  ">
            <div className="flex gap-2 justify-center items-center ">
              <input className="scale-125" type="checkbox" />
                <img className="w-8" src="./images/files-logo.png" alt="" />
                <div>Financial Report</div>
            </div>
            <div>14/7/2018 2:01 pm</div>
            <div>167 KB</div>
            <div className="flex space-x-1 px-3 py-2">
              <button className="border-[1px] items-center p-2 rounded-xl flex gap-1">
              <FiEye />
                Preview
              </button>
              <button className="py-2 flex justify-center px-4 rounded-xl items-center">
                <FaLink />
              </button>
              <button className="py-2 flex justify-center px-4 rounded-xl items-center">
                <HiDotsHorizontal />
              </button>
            </div>
          </div>
          ))}
          <hr />
        </div>
      </section>
    </>
  );
};

export default Homepage;
