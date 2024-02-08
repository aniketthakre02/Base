    import "./page2.scss";
    import logo from "../../assets/Picture1_baselogo.png"
    import dashboard from "../../assets/Picture1_dashboard.png";
    import upload from "../../assets/Picture1_upload.png";
    import invoice from "../../assets/Picture1_invoice.png";
    import schedule from "../../assets/Picture1_schedule.png";
    import calender from "../../assets/Picture1_calender.png";
    import  notification from "../../assets/Picture1_Notification.png";
    import setting from "../../assets/Picture1_setting.png";
    import uploadIcon from "../../assets/Picture1_uploadicon.png"
    import excel from "../../assets/Picture1_excel.png"
    import rightnoti from "../../assets/Picture_rightNotification.png"
    import profile from "../../assets/Picture1_profile.png"
    export default function Page2(){
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
                        <div className="uploadlogo">< img src={upload} alt=""/></div>
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
                        <div className="upload">
                            <div className="upload1">
                            <img src={excel} alt=""/>
                                <span className="p1">Drop your sheet here or . 
                                    <span className="p2">browse</span>
                                </span>
                            </div>
                        </div>
                        <div className="uploadbutton">
                                <div className="button">    <img src={uploadIcon} alt="icon"/>
                                    <span>Upload</span>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        )
    }