import StarRatings from 'react-star-ratings';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getBlogTitle} from '../cache/actions/actions'



 class blogTitle extends Component {
    componentDidMount(){    this.props.getBlogTitle()
         }
    
         render() {
    
          const {blogTitle} = this.props.blogTitle

        return (
          <React.Fragment> 

          <div> <ul >{blogTitle.map((item, index) => <li key={index}> 
            <a style={{ paddingTop: '5px', fontSize: '17px', color: '#434952', fontWeight: 'bold'}} href={item.link}><br/><br/>{item.blog_title}</a> 
            <div style={{ paddingTop: '5px', fontSize: '14px', color: 'gray', fontWeight: 'bold'}} >{item.created}</div>
            <StarRatings
              rating={item.rating}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="darkcyan"
             />
            <div style={{ paddingTop: '5px', fontSize: '12px', color: 'gray', fontWeight: 'bold'}} >Rated {item.vote} times</div>
          </li>)}
        </ul>
          </div>
       </React.Fragment>) }}


const mapStateToProps  = (state) => ({blogTitle:state.blogTitle})

export default connect(mapStateToProps, {getBlogTitle})(blogTitle)

















