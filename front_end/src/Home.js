import React,{ Component } from 'react';
import Model from './components/Model';

export default class Home extends Component {

    componentDidMount(){
        // this.props.getData()
        if (localStorage.getItem('apiKey')){
          let data = {...this.props.that.state}
          data.isAuthenticated = true
          data.hasError = false
          
          this.props.that.setState(data)
          this.props.that.getData()
        }
    }

  render() {
    const info=this.props.state.title.map((item,index)=>{
      return <Model url={this.props.state.url[index]} title={this.props.state.title[index]} train_score={this.props.state.train_score[index]} test_score={this.props.state.test_score[index]} key={index} id={this.props.state.id[index]} />
    })
    return (
      <div className='container-fluid'>
        {info}
        <div className='col-12 col-sm-6 col-md-4 card_model'>
        <div className="card border-success mb-5">
        <h4 className="card-header text-center">Add New</h4>
        </div>
        </div>
      </div>
    )
  }
}

