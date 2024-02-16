            import "./page3.scss";
            import logo from "../../assets/Picture1_baselogo.png"
            import dashboard from "../../assets/Picture1_dashboard.png";
            import upload from "../../assets/Picture1_upload1.png";
            import invoice from "../../assets/Picture1_invoice.png";
            import schedule from "../../assets/Picture1_schedule.png";
            import calender from "../../assets/Picture1_calender.png";
            import  notification from "../../assets/Picture1_Notification.png";
            import setting from "../../assets/Picture1_setting.png";
            import uploadIcon from "../../assets/Picture1_uploadicon.png"
            import excel from "../../assets/Picture1_excel.png";
            import rightnoti from "../../assets/Picture_rightNotification.png"
            import profile from "../../assets/Picture1_profile.png";
            import Ulast from "../../assets/Picture1_uploadLast.png";
            export default function Page3(){


                const tableData = [
                    { id: 1, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'] },
                    { id: 2, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag 3', 'Tag 4'] },
                    { id: 3, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag 3', 'Tag 4', 'Tag 1', 'Tag 2'] },
                    { id: 4, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag 3'] },
                    { id: 5, link: 'https://www.google.com', prefix: 'prefixsample', selectedTags: ['Tag 3', 'Tag 4', 'Tag 2'] },
                    
                ];
                return(
                    <div className="parent">
                        <div className="left">
                            <div className="title">
                                <div className="title1">
                                <div className="logo">
                                <img src={logo} alt=""/>
                                </div>
                                <div className="logoname">BASE</div>
                                </div>
                                
                            </div>
                            <div className="itembar">
                                <div><img src={dashboard} alt=""/><span>Dashboard</span></div>
                                <div>< img src={upload} alt=""/><span style={{ color: '#605BFF' }}>Upload</span></div>
                                <div><img src={invoice} alt=""/><span>Invoice</span></div>
                                <div><img src={schedule} alt=""/><span>Schedule</span></div>
                                <div><img src={calender} alt=""/><span>Calendar</span></div>
                                <div><img src={notification} alt=""/><span>Notification</span></div>
                                <div><img src={setting} alt=""/><span>Setting</span></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="navbar">
                                <div className="left">
                                    <span>Upload CSV</span>
                                </div>
                                <div className="right">
                                    <img src={rightnoti} alt=""/>
                                    <img src={profile} alt=""/>
                                </div>
                            </div>
                            <div className="main">
                                <div className="upload3">
                                    <div className="upload1">
                                    <img src={excel} alt=""/>
                                        <span className="p1">Drop your sheet here or . 
                                            <span className="p2">browse</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="uploadbutton3">
                                        <div className="button">  
                                            <img src={uploadIcon} alt="icon"/>
                                            <span>Upload</span>
                                        </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="upper">
                                    <span>Uploads</span>
                                </div>
                                <div className="lower">
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
                                    <option value="Select Tags" >Select Tags</option>
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

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }