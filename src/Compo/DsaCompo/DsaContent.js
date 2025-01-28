import React, { useState } from "react";
import { Data_Dsa, Other_Data } from "./Data";
import { FaFolder, FaFolderOpen, FaFile, FaSun, FaMoon } from "react-icons/fa"; // Using React Icons for folder, file, and theme icons

const Sidebar = ({ data, onFileClick, darkMode }) => {
  const [openFolders, setOpenFolders] = useState([]);

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((folder) => folder !== folderName)
        : [...prev, folderName]
    );
  };

  const renderFolder = (folder, parentPath = "") => (
    <div key={folder.name} className="mb-1">
      <div
        className={`flex items-center cursor-pointer space-x-2 p-2  rounded transition-colors duration-200 ${
          darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-200"
        }`}
        onClick={() =>
          folder?.children?.length > 0 && toggleFolder(folder.name)
        }
      >
        {folder?.children?.length > 0 ? (
          <div className="flex items-center space-x-2">
            {openFolders.includes(folder.name) ? (
              <FaFolderOpen className="w-5 h-5 text-yellow-600" />
            ) : (
              <FaFolder className="w-5 h-5 text-yellow-600" />
            )}
            <span
              className={`font-medium ${
                darkMode ? "text-gray-100 " : "text-gray-700 "
              }`}
            >
              {folder.name}
            </span>
          </div>
        ) : (
          <div
            className="flex items-center space-x-2"
            onClick={() => onFileClick(folder.href)}
          >
            <FaFile className="w-5 h-5 text-blue-600" />
            <span
              className={`${darkMode ? "text-gray-200" : "text-gray-700 "}`}
            >
              {folder.name}
            </span>
          </div>
        )}
      </div>

      {folder?.children?.length > 0 && openFolders.includes(folder.name) && (
        <div
          className={`pl-6 border-l-2 ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          {folder.children.map((child) =>
            renderFolder(child, `${parentPath}/${folder.name}`)
          )}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`sidebar w-[25vw] h-[80vh] overflow-y-auto p-4 shadow-lg rounded-lg ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {data && data.map((folder) => renderFolder(folder))}
    </div>
  );
};

const Preview = ({ url, darkMode }) => {
  return (
    <div
      className={`preview-area p-6 rounded-lg shadow-lg relative ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3
        className={`text-2xl font-semibold mb-4 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Preview
      </h3>
      {url ? (
        <>
          <iframe
            src={url}
            className="w-full h-[70vh] border rounded-lg"
            title="Preview"
          />
          <button
            className={`absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 ${
              darkMode ? 'bg-blue-700 hover:bg-blue-800' : ''
            }`}
            onClick={() => window.open(url, '_blank')}
          >
            Open in New Tab
          </button>
        </>
      ) : (
        <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''}`}>
          Select a file to preview its content.
        </p>
      )}

      {/* {url && (
        <button
          className={`absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 ${
            darkMode ? "bg-blue-700 hover:bg-blue-800" : ""
          }`}
          onClick={() => window.open(url, "_blank")}
        >
          Open in New Tab
        </button>
      )} */}
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
        className={`app flex h-screen p-6 space-x-6 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <Sidebar
          data={data}
          onFileClick={handleFileClick}
          darkMode={darkMode}
        />
        <div className="flex-1">
          <Preview url={previewUrl} darkMode={darkMode} />
        </div>
        <button
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-colors duration-200 ${
            darkMode
              ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FaSun className="w-6 h-6" />
          ) : (
            <FaMoon className="w-6 h-6" />
          )}
        </button>
      </div>
      
    </>
  );
};

export default DsaContent;
