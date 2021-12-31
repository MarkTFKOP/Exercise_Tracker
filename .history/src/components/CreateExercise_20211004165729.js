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

    onChangeDescription(e){
        this.setState({
            description : e.target.value
        })
    }
    onChangedDuration(e){
        this.setState({
            duration : e.target.value
        })
    }
    onChangedDate(e){
        this.setState({
            date: date
        })
    }
    render() {
      return (
          <div>
              create
          </div>
      )}}
    

