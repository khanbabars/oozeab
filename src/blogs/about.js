import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAboutText} from '../cache/actions/actions'

 class about extends Component {
    componentDidMount(){
        this.props.getAboutText()
        
    }
    render() {
        const {about} = this.props.about

        
        return (

                <div> 
                {about.map(t => 
                     <p key={t.text_id} style={{ paddingTop: '50px',fontSize: '18px', fontWeight: '400', color: 'black', textAlign: 'justify'}} >
                         {t.text}</p> 
                    
                )}
          </div>
        )
    }
}

const mapStateToProps  = (state) => ({about:state.about})

export default connect(mapStateToProps, {getAboutText})(about)