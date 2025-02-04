import { colorSelection } from "@/redux/features/styleSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomizeLayoutSelector = () => {
  const [selectedLayout, setSelectedLayout] = useState("Top");
  const [selectedColumns, setSelectedColumns] = useState("Double");
  const [selectColors, setSelectColors] = useState("bg-slate-700");
  const {layout, column, style} = useSelector((state) =>state.style);
  const dispatch = useDispatch();
  const handleColor = (color) =>{
    setSelectColors(color.bg);
    dispatch(colorSelection(color))
  }

  const layoutOptions = [
    { name: "Top", icon: "w-full h-1/2 pt-8 mb-4 bg-blue-500 rounded-t" },
    { name: "Left", icon: "w-1/2 h-full bg-gray-300 rounded-l" },
    { name: "Right", icon: "w-1/2 h-full bg-gray-300 absolute left-1/2 rounded-r" },
  ];

  const columnOptions = [
    { name: "Single", icon: "h-4 px-12 w-full bg-gray-300 rounded" },
    { name: "Double", icon: "h-4 px-6 w-full bg-gray-300 rounded" },
    { name: "Triple", icon: "h-4 px-3 w-full bg-gray-300 rounded" },
  ];
  const colors = [
    { text: 'text-slate-500', bg: 'bg-slate-500' },
    { text: 'text-slate-600', bg: 'bg-slate-600' },
    { text: 'text-slate-800', bg: 'bg-slate-800' },
    { text: 'text-red-500', bg: 'bg-red-500' },
    { text: 'text-red-600', bg: 'bg-red-600' },
    { text: 'text-red-800', bg: 'bg-red-800' },
    { text: 'text-blue-500', bg: 'bg-blue-500' },
    { text: 'text-blue-600', bg: 'bg-blue-600' },
    { text: 'text-blue-800', bg: 'bg-blue-800' },
    { text: 'text-green-500', bg: 'bg-green-500' },
    { text: 'text-green-600', bg: 'bg-green-600' },
    { text: 'text-green-800', bg: 'bg-green-800' },
    { text: 'text-purple-500', bg: 'bg-purple-500' },
    { text: 'text-purple-600', bg: 'bg-purple-600' },
    { text: 'text-purple-800', bg: 'bg-purple-800' },
    { text: 'text-yellow-500', bg: 'bg-yellow-500' },
    { text: 'text-yellow-600', bg: 'bg-yellow-600' },
    { text: 'text-yellow-800', bg: 'bg-yellow-800' },
    { text: 'text-teal-500', bg: 'bg-teal-500' },
    { text: 'text-teal-600', bg: 'bg-teal-600' },
    { text: 'text-teal-800', bg: 'bg-teal-800' },
    { text: 'text-pink-500', bg: 'bg-pink-500' },
    { text: 'text-pink-600', bg: 'bg-pink-600' },
    { text: 'text-pink-800', bg: 'bg-pink-800' }
  ]
  
  ;
  return (
    <div className="space-y-4 p-6">
      {/* Layout Selector */}
      <div>
        <h3 className="text-2xl font-semibold text-purple-800 mb-4">Layout</h3>
        <div className="flex space-x-4">
          {layoutOptions.map((option) => (
            <button
              key={option.name}
              className={`p-3 w-1/4 border rounded-md ${
                selectedLayout === option.name
                  ? "border-purple-800"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedLayout(option.name)}
            >
              <div className={`flex items-center p-2 justify-center ${option.icon} text-purple-800 relative`}>
                
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Column Selector */}
      <div>
        <h3 className="text-2xl font-semibold text-purple-800 mb-4">Columns</h3>
        <div className="flex space-x-4">
          {columnOptions.map((option, index) => (
            <button
              key={option.name}
              className={`p-2 border rounded-md ${
                selectedColumns === option.name
                  ? "border-purple-800"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedColumns(option.name)}
            >
              <div className="flex flex-col items-center space-y-2">
                {index === 0 && (
                  <>
                    <div className={option.icon}></div>
                  <div className={option.icon}></div>
                  <div className={option.icon}></div>
                  </>
                )}
                {index === 1 &&(
                      <div className="grid grid-cols-2 gap-1">
                      <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    </div>
                    )}
                {index === 2 &&(
                      <div className="grid grid-cols-3 gap-1">
                      <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    <div className={option.icon}></div>
                      <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    <div className={option.icon}></div>
                      <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    <div className={option.icon}></div>
                    </div>
                    )}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-8">
            <h2 className="text-purple-800 text-2xl">Colors</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 mt-8">
            {
                colors?.map((color,idx) =>(
                    <div key={idx}>
                        <div onClick={() =>handleColor(color)} className={`${color.bg} ${selectColors === color.bg && 'border-2 border-purple-800'} p-4 w-2 h-2 rounded-full cursor-pointer`}></div>
                    </div>
                ))
            }
        </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeLayoutSelector;
