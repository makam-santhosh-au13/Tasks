import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useRef, useEffect } from 'react'


const Navbar = ()=>{
    const [navLinkOpen, navLinkToggle] =useState(false);

    const Ref = useRef(null); 
	const [timer, setTimer] = useState('10:00'); 
	const getTimeRemaining = (e) => { 
		const total = Date.parse(e) - Date.parse(new Date()); 
		const seconds = Math.floor((total / 1000) % 60); 
		const minutes = Math.floor((total / 1000 / 60) % 60); 
		return { 
			total, minutes, seconds 
		}; 
	} 


	const startTimer = (e) => { 
		let { total, minutes, seconds } 
					= getTimeRemaining(e); 
		if (total >= 0) { 
			setTimer( 
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds) 
			) 
		} 
	} 


	const clearTimer = (e) => { 
		setTimer('16:40');  
		if (Ref.current) clearInterval(Ref.current); 
		const id = setInterval(() => { 
			startTimer(e); 
		}, 1000) 
		Ref.current = id; 
	} 

	const getDeadTime = () => { 
		let deadline = new Date(); 
		deadline.setSeconds(deadline.getSeconds() + 1000); 
		return deadline; 
	} 


	useEffect(() => { 
		clearTimer(getDeadTime()); 
	}, []); 

	const onClickReset = () => { 
		clearTimer(); 
	} 

    const hangleNavLinksToggle =() =>{
        navLinkToggle(!navLinkOpen)
    }

    const renderClasses =() =>{
        let classes = "navlinks"

        if(navLinkOpen){
            classes =+ "active"
        }
        return classes
    }

    return(
        <div>
            <nav class="navbar navbar-light bg-light">
                    <div>
                        <h2 className="fas fa-user-secret" >Codingal</h2>
                    </div>
                    <ul className={renderClasses()} >
                        <Link exact to="/posts" className="btn btn-warning" >Posts</Link>
                    </ul>
                    <ul className={renderClasses()} >
                        <a>{timer}</a>
                        <span class="btn btn-danger" data-toggle="modal" data-target="#myModal">End Class</span>
                    </ul>
                    <div onClick={hangleNavLinksToggle} className="hamburger-toggle">
                    <i className="fas fa-bars fa-lg"></i>
                    </div>
                    
            </nav>
            <div class="container">
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title"><b>Select a reason to end the class</b></h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="radio">
                                    <label><input type="radio" name="optradio" checked />Class completed</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="optradio" checked />Class interrupted/aborted</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="optradio" checked />Student didn't show up for the class.</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="optradio" checked />Student didn't show any interest.</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="optradio" checked />Student got disconnected.</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="optradio" checked />I got disconnected.</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio"  name="optradio" checked />Other reason.</label>
                                </div>
                                <div class="text">
                                    <input type="textarea" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <span class="btn btn-danger" onClick={onClickReset} data-dismiss="modal">End Class</span>
                                <span class="btn btn-default" data-dismiss="modal">cancel</span>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
    
        </div>
    )

}

export default Navbar;