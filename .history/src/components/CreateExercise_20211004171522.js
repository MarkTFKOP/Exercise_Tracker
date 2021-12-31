import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangedDate = this.onChangedDate.bind(this)
        this.onChangedDuration = this.onChangedDuration.bind(this)

        this.state = {
            username : '',
            description :'',
            duration : 0 ,
            date : new Date() ,
            users : []
        }
    }
    componentDidMount(){
        
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
    onChangedDate(date){
        this.setState({
            date: date
        })
    }
    onSubmit(e){
        e.preventDefault();
        const exercise = {
            username : this.state.username,
            description : this.state.description,
            duration : this.state.duration,
            date : this.state.date
        }

        console.log(exercise);
        window.location = '/'
    }
    render() {
      return (
          <div>
              create
          </div>
      )}}
    

