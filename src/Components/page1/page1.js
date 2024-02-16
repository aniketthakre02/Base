    import "./page1.scss";
    import git from "../../assets/Picture1_git.png"
    import twitter from "../../assets/picture_twitter.png"
    import linkedIn from "../../assets/Picture1_linkedin.png"
    import discord from "../../assets/Picture1_discord.png"
    import circle from "../../assets/Picture1_cicle.png"
    import vector from "../../assets/Picture1_vector.png"
    import google from "../../assets/Picture1_google.png"
    import apple from "../../assets/Picture1_apple.png";

    import { Link } from "react-router-dom";
    import Page2 from "../page2/page2";
    import{auth,provider} from "../../config";
    import { signInWithPopup } from "firebase/auth";
    import { useState,useEffect } from "react";

    export default function Page1(){
        const [value,setValue]=useState('');
        const handleclick=()=>{
            signInWithPopup(auth,provider).then((data)=>{
                setValue(data.user.email);
                sessionStorage.setItem("email",data.user.email)

            })
        }
        useEffect(()=>{
            setValue(sessionStorage.getItem('email'));
        },[])
        return(
            <div className="SignIn">
                <div className="left">
                <div className="top">
                    <div className="logo">
                    <div className="img1">
                    <img src= {circle} alt=""/>
                    </div>   
                    <div className="img2">
                    <img src={vector} alt="vector"/>
                    </div>   
                    </div>
                </div>
                <div className="middle">
                    <div className="tag">
                        <span>BASE</span>
                    </div>
                </div>
                <div className="icons">
                <div className="images">
                <img src= {git} alt=""/>
                <img src= {twitter} alt=""/>
                <img src= {linkedIn} alt="" />
                <img src= {discord} alt=""/>
                </div>
                </div>
                </div>
                <div className="right">
                    <div className="main">
                        <div className="div1">
                            <div className="l1"> Sign In</div>
                            <div className="l2">Sign in to your accuount</div>
                        </div>
                        <div className="div2">
                        {/* onClick={handleclick} */}
                        
                            <div  className="d1">          
                            <div className="logo1"><img src={google} alt="google"/></div>
                            <div className="text1">Sign in with Google</div>  
                                 
                            </div>
                                                   
                            <div className="d2">
                                <div className="logo1"><img src={apple} alt ="apple"/></div>
                                <div className="text1">Sign in with Apple</div>                            
                            </div>
                          
                            
                        </div>
                        <div className="div3">
                            <dl>
                                <dt >Email address</dt>
                                <input type="text" placeholder="johndoe@gmail.com"></input>
                                <dt>Password</dt>
                                <input type="password" placeholder="••••••••"></input>
                                <dd>Forget password?</dd>
                                <Link to="/Page2">
                                <button>Sign In</button>
                                </Link>
                            </dl>
                        </div>
                        <div className="div4">
                            <span className="s1">Don't have accuount?</span>
                            <span className="s2">Register here</span>
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        )
    }