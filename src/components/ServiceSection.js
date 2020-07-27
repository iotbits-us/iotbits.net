import React from 'react'

import ServiceCard from '../components/ServiceCard'
import './ServiceSection.css'

class ServiceSection extends React.Component {
  static defaultProps = {
    services: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { services, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visibleServices = services.slice(0, limit || services.length)
    console.log('visibleServices', visibleServices)
    return (
      <div className="ServiceSection">
        {title && <h2 className="ServiceSection--Title">{title}</h2>}
        {!!visibleServices.length && (
          <div className="ServiceSection--Grid">
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.title + index} {...service} />
            ))}
          </div>
        )}
        {showLoadMore && visibleServices.length < services.length && (
          <div className="taCenter">
            <button className="button" onClick={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default ServiceSection
