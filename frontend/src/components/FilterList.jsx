import { useState, useId,useRef, useEffect } from "react";

export const FilterComponent = ({subset, filterName,content}) => {
  const [openFilter, setOpenFilter] = useState(true); // this will be used to filter the products based on brands
  console.log(subset)

  return (
    <div className="categories border-b-2 border-gray-400 py-3 ">
        <button className=" flex justify-between w-full" onClick={()=>{setOpenFilter(!openFilter)}}>
          <div className="filter-name">{content.name}</div>
          <div className="icon"> {openFilter?"-":"+"}</div>
        </button>
          <div className="list ">
            <div className={`list-cont  ${openFilter ? "max-h-[350px] ":" max-h-0"}   transition-all duration-300 overflow-auto `} >
              <ul className="overflow-y">
                {
                  subset?.map((item,index) => (
                    <li key={index} className="category hover:cursor-pointer">
                      {/* <a href="" className=" w-full flex justify-between">
                        <span className="before:content-['+']">{item}</span>
                        <span>100</span>
                      </a> */}
                      <div className='flex justify-start w-full hover:cursor-pointer ' onClick={(e)=>{
                          if(content.selectedElements.includes(item)){
                            content.removeElement(item);
                        } else{
                            content.addElement(item);
                        }
                        }}>
                          <span className="">
                            <input onChange={()=>{}}className="accent-red-400 text-white mx-2 hover:cursor-pointer" type="checkbox" value={item} checked={content.selectedElements.includes(item)}/>
                            <label className="hover:cursor-pointer">{item}</label>
                          </span>
                        
                      </div>    
                    </li>
                  ))
                }
                          
                            
              </ul>
          </div>
        </div>
      </div>
  )
}

export default FilterComponent;