import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile, FaSun, FaMoon } from "react-icons/fa";

const Sidebar = ({ data, onFileClick, darkMode }) => {
  const [openFolders, setOpenFolders] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((folder) => folder !== folderName)
        : [...prev, folderName]
    );
  };

  const handleFileClick = (file) => {
    if(file?.href!==""){
      console.log(file?.href)
    setSelectedFile(file.href);
    onFileClick(file.href);}
  };

  const renderFolder = (folder, index, parentPath = "", level = "1") => {
    const currentPath = `${parentPath ? parentPath + "." : ""}${index + 1}`;
    return (
      <div key={currentPath} className="mb-2">
        <div
          className={`flex items-center justify-between cursor-pointer p-3 rounded-lg transition-all duration-200 mb-1
          ${
            darkMode
              ? "hover:bg-gray-800 text-white rounded-xl"
              : "hover:bg-gray-100 text-gray-800"
          } 
          ${
            openFolders.includes(folder.name) ? "bg-gray-700 dark:bg-gray-600" : ""
          }`}
          onClick={() => folder.children?.length > 0 && toggleFolder(folder.name)}
        >
          <div onClick={()=>handleFileClick(folder)} className="flex items-center space-x-3">
            {folder.children?.length > 0 ? (
              openFolders.includes(folder.name) ? (
                <FaFolderOpen className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaFolder className="w-5 h-5 text-yellow-500" />
              )
            ) : (
              <FaFile className="w-5 h-5 text-blue-500" />
            )}
            <span className="font-medium text-sm">{`${currentPath} ${folder.name}`}</span>
            
          </div>
        </div>

        {folder.children?.length > 0 && openFolders.includes(folder.name) && (
          <div className={`pl-6 border-l-2 ${darkMode ? "border-gray-600" : "border-gray-300"}`}>
            {folder.children.map((child, childIndex) =>
              renderFolder(child, childIndex, currentPath, `${level}.${childIndex + 1}`)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`w-[25vw] h-[80vh] overflow-y-auto p-4 shadow-lg rounded-xl border-2 
      ${darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-300 text-black"}
      custom-scroll`}
    >
      <h3 className="text-xl font-semibold mb-4">📂 File Explorer</h3>
      {data && data.map((folder, index) => renderFolder(folder, index))}
    </div>
  );
};

const Preview = ({ url, darkMode }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg border-2 transition-all duration-300 
      ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
    >
      <h3 className="text-2xl font-bold mb-4">🔍 Preview</h3>
      {url ? (
        <>
          <iframe
            src={url}
            className="w-full h-[70vh] border rounded-xl transition-all duration-300"
            title="Preview"
          />
          <button
            className={`absolute top-4 right-4 px-4 py-2 rounded-md shadow-md font-semibold 
            ${darkMode ? "bg-blue-700 hover:bg-blue-800 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"} 
            transition-all duration-200`}
            onClick={() => window.open(url, "_blank")}
          >
            Open in New Tab
          </button>
        </>
      ) : (
        <p className="text-lg flex justify-center items-center h-[70vh] text-gray-500">
          Select a file to preview its content.
        </p>
      )}
    </div>
  );
};

const DsaContent = ({ DsaData }) => {
  const [data, setData] = useState(DsaData || []);
  const [previewUrl, setPreviewUrl] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleFileClick = (url) => {
    setPreviewUrl(url);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-11/12 max-md:w-full app flex h-screen p-6 space-x-6 transition-all duration-300 
        ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <Sidebar data={data} onFileClick={handleFileClick} darkMode={darkMode} />
        <div className="flex-1">
          <Preview url={previewUrl} darkMode={darkMode} />
        </div>
        
        {/* Floating Dark Mode Toggle Button */}
        <button
          className={`fixed bottom-6 right-6 p-4 rounded-full shadow-xl text-xl transition-all duration-300
          ${darkMode ? "bg-gray-700 text-yellow-400 hover:bg-gray-600" : "bg-white text-gray-800 hover:bg-gray-200"}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
};

export default DsaContent;
