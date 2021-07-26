import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export default class Posts extends React.Component{
    constructor(){
        super();
        this.state={
            data:false
        }
    }

    componentDidMount(){
    let url = BASE_URL;
    fetch(url,{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-TYpe':'application/json'
        }
    }).then((result)=>{
        result.json().then((res)=>{
            this.setState({data:res})

        })
    })
}

render(){
    const data=this.state.data;
    console.log(data)
       return (
        <div>
         <center>
         <Link exact to="/" className="btn btn-primary">Home</Link>
            </center>

            { data ? 
            <div>
            {data.map((data,i)=>(
                <div>
                    <div className="container">
                    <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>User_Id</th>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{data.userId}</td>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.body}</td>
                                    </tr>
                                    </tbody>
                    </table>         
                    </div>
                </div>
            ))}
            </div>
            : <p>Please wait...</p>
            }
        </div>
    )
}
}