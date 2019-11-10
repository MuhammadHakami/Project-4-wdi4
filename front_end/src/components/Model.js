import React, { Component } from 'react'

export default class logged extends Component {
  render() {
    return (
      <div className='col-12 col-sm-6 col-md-4 card_model'>
      <a href={"/show/"+this.props.id} className='text-decoration-none text-dark'>
        <div className="card border-success mb-3">
          <h4 className="card-header text-center">{this.props.title}</h4>
          <img src={this.props.url} alt="" className='img_model'/>
          <div className='row'>
          <h6 className='col-6 text-left'>Train R2 Score: <span className=''>{this.props.train_score}/1</span></h6>
          <h6 className='col-6 text-right'>Test R2 Score: <span>{this.props.test_score}/1</span></h6>
          </div>
        </div>
        </a>
      </div>
    )
  }
}

