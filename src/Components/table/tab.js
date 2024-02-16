
import './tab.scss';
import { useState,useEffect } from 'react';

function mobile(){
    return(
        <div>

        </div>
    )
}
export default function Tab(){
    const tableData = [
        { id: 1, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'] },
        { id: 2, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag3', 'Tag4'] },
        { id: 3, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag3', 'Tag4', 'Tag1', 'Tag2'] },
        { id: 4, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag3'] },
        { id: 5, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag3', 'Tag4', 'Tag2'] },
        
    ];
    document.cookie = "myCookie=myValue; SameSite=None; Secure";

    const [isResponsive, setIsResponsive] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth>1000){
            setIsResponsive((window.innerWidth)/10 <= 768);
            }else{
                setIsResponsive((window.innerWidth)*10 <= 768);
            }
          
          console.log(window.innerWidth);
          console.log(isResponsive);
        };
      
        handleResize();
      
        window.addEventListener("resize", handleResize);
      
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return(
        <div className={`parent ${isResponsive ? "responsive" : ""}`}>
      {isResponsive ? (
        <div className="responsive-design">
          {/* Your responsive design content goes here */}
          <h2>Responsive Design</h2>
          console.log("fakfi");
        </div>
      ) : (
        <div className='table'>
                <table className='my-table'>
                    <thead>
                        <tr className='table-header'>
                        <th>Sl No.</th>
                        <th>Links</th>
                        <th>Prefix</th>
                        <th>Add Tags</th>
                        <th className='select-tag'>Selected Tags</th>
                        </tr>    
                    </thead>
                    <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{ "0"+row.id}</td>
                            <td><a href={row.link} target="_blank" rel="noopener noreferrer">{row.link}</a></td>
                            <td>{row.prefix}</td>
                            <td>
                            <select id="tagSelect">
                                <option value="" disabled >Select Tags</option>
                                <option value="Tag 1">Tag 1</option>
                                <option value="Tag 2">Tag 2</option>
                                <option value="Tag 3">Tag 3</option>
                                <option value="Tag 4">Tag 4</option>
                                <option value="Tag 5">Tag 5</option>
                            </select>
                            </td>
                            <td>
                                <ul className="tag-list">
                                    {row.selectedTags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                                            ))}
                    </tbody>
                    
                </table>

            
        </div>
        )}
        </div>
    )
}