import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './ServiceCard.css'

const ServiceCard = ({
  featuredImage = '',
  title = '',
  description = '',
  link = '',
  excerpt = '',
  slug = '',
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`ServiceCard ${className}`}>
    {featuredImage && (
      <div className="ServiceCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="ServiceCard--Content">
      {title && <h3 className="ServiceCard--Title">{title}</h3>}
      <div className="ServiceCard--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {excerpt && <div className="ServiceCard--Excerpt">{excerpt}</div>}
    </div>
  </Link>
)

export default ServiceCard
