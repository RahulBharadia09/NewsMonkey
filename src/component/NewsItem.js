import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let {title,description,imageUrl,newsUrl, author, time} = this.props;

    return (
      <div className='my-3'>
        <div className="card  " >
            <img src={!imageUrl?"/images/noImage.jpg"
                      :imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>{title}</b></h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {time}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank"  className="btn btn-outline-info bt-sm">Read More</a>

            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
