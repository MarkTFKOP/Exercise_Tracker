import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            description :'',
            duration : 0 ,
            date : new Date() ,
            users : []
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })  
    }
    render() {
      return (
          <div>
              create
          </div>
      )}}
    

