import React, { useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegFolderOpen, FaLink } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
const Homepage = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Get all files on component mount
    axios
      .get("http://localhost:3001/api/documents/files")
      .then((response) => {
        setFiles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const recent = [
  //   {
  //     fileName: "My Projects",
  //     location: "Folder: Main",
  //   },
  //   {
  //     fileName: "My Projects",
  //     location: "Folder: Main",
  //   },
  //   {
  //     fileName: "My Projects",
  //     location: "Folder: Main",
  //   },
  // ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleUpload = () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("description", description);

    axios
      .post("http://localhost:3001/api/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        axios
          .get("http://localhost:3001/api/documents/files")
          .then((response) => {
            setFiles(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        setUploading(false);
      })
      .catch((error) => {
        console.error(error);
        setUploading(false);
      });
    setFile(null);
    setFileName("");
    setDescription("");
  };

  // const newFile = {
  //   id: files.length + 1,
  //   fileName,
  //   description,
  //   size: "167kb",
  // };

  // const handleDelete = aysnc (id) => {
  //   try{
  //     const response = await axios.delete(`http://localhost:3001/api/documents/files/delete/${id}`);
  //     if(response.status === 200){

  //     }
  //     .then((response) => {
  //       setFiles(files.filter((file) => file.id !== id));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/documents/delete/${id}`
      );
      if (response.status === 200) {
        setFiles((prevDocuments) =>
          prevDocuments.filter((file) => file._id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredDocuments = files.filter(
    (file) =>
      file.title && file.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const viewDocument = async (id) => {
    const document = await axios.get(
      `http://localhost:3001/api/documents/${id}`
    );
    const url = `https://docs.google.com/gview?url=${document.url}&embedded=true`;
    window.open(url, "_blank");
  };

  const handleViewDocument = (filePath) => {
    const dropboxUrl = `https://www.dropbox.com/s/${filePath}`;
    window.open(dropboxUrl, "_blank");
    console.log(filePath);
  };
  return (
    <>
      <nav className="flex justify-between px-10 py-3 ">
        <h1 className="text-2xl font-bold">Documents Management System</h1>
        <div className="flex space-x-5">
          {/* <form className="flex justify-between row"> */}
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label htmlFor="fileInput">
            <MdOutlineFileUpload />
            Select File
          </label>
          <button
            className="bg-[#4459FD] items-center p-2 rounded-xl flex text-white gap-1"
            onClick={(e) => {
              e.preventDefault(); // prevent page reload
              handleUpload();
            }}
          >
            Upload File
          </button>
          <input
            type="text"
            value={fileName}
            onChange={(event) => setFileName(event.target.value)}
            placeholder="Document Name"
          />
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description"
          />
          {/* </form> */}
          {/* <button className="border-[1px] items-center p-2 rounded-xl flex gap-1">
            <FiFileText />
            New File
          </button>
          <button className="border-[1px] items-center p-2 rounded-xl flex gap-1">
            <FaRegFolderOpen />
            Create Folder
          </button>
          <button className="border-[1px] py-2 flex justify-center px-4 rounded-xl items-center">
            <HiDotsHorizontal />
          </button> */}
        </div>
      </nav>
      <hr />
      {/* <section className="flex flex-col px-10 py-3 gap-3">
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
      </section> */}
      <section className="px-10 py-3 gap-3 flex flex-col">
        <h1 className="text-xl font-semibold">All Files</h1>
        <div className="border-[1px] items-center p-2 rounded-xl flex gap-1 w-80">
          <IoSearch size={25} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent"
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* <div>
            {filteredDocuments.map((doc) => (
              <div key={doc._id}>
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
              </div>
            ))}
          </div> */}
        </div>
        <div>
          <div className="flex justify-between px-3 py-2 bg-slate-100 text-lg">
            <div>Name</div>
            <div>Description</div>
            <div>Size</div>
            <div>Actions</div>
          </div>
          {filteredDocuments.map((file) => (
            <div
              key={file.id}
              className="flex justify-between items-center px-3  "
            >
              {/* <div className="flex gap-2 justify-center items-center "> */}
              {/* <img className="w-8" src="./images/files-logo.png" alt="" /> */}
              <div>{file.title}</div>
              {/* </div> */}
              <div>{file.description}</div>
              <div>{file.size}</div>
              <div className="flex space-x-1 px-3 py-2">
                <button
                  className="border-[1px] items-center p-2 rounded-xl flex gap-1"
                  // onClick={() => viewDocument(file._id)}
                  onClick={() => handleViewDocument(file.filePath)}
                >
                  <FiEye />
                  View
                </button>
                <button
                  className="py-2 flex justify-center px-4 rounded-xl items-center"
                  onClick={() => handleDelete(file._id)}
                >
                  <MdDelete />
                  Delete
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
