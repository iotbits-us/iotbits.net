import React from 'react'
import { Link } from 'gatsby'

import ServiceSearch from './ServiceSearch'
import './ServiceCategoriesNav.css'

const ServiceCategoriesNav = ({ categories, enableSearch }) => (
  <div className="ServiceCategoriesNav">
    <Link className="NavLink" exact="true" to={`/services/`}>
      All
    </Link>
    {categories.map((category, index) => (
      <Link
        exact="true"
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}

    {enableSearch && <ServiceSearch />}
  </div>
)

export default ServiceCategoriesNav
