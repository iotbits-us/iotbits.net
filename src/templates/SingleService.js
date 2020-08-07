import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SingleService.css'

export const SingleServiceTemplate = ({
  title,
  date,
  body,
  nextServiceURL,
  prevServiceURL,
  categories = []
}) => (
  <main>
    <article
      className="SingleService section light"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="container skinny">
        <Link className="SingleService--BackButton" to="/services/">
          <ChevronLeft /> BACK
        </Link>
        <div className="SingleService--Content relative">
          <div className="SingleService--Meta">
            {date && (
              <time
                className="SingleService--Meta--Date"
                itemProp="dateCreated pubdate datePublished"
                date={date}
              >
                {date}
              </time>
            )}
            {categories && (
              <Fragment>
                <span>|</span>
                {categories.map((cat, index) => (
                  <span
                    key={cat.category}
                    className="SingleService--Meta--Category"
                  >
                    {cat.category}
                    {/* Add a comma on all but last category */}
                    {index !== categories.length - 1 ? ',' : ''}
                  </span>
                ))}
              </Fragment>
            )}
          </div>

          {title && (
            <h1 className="SingleService--Title" itemProp="title">
              {title}
            </h1>
          )}

          <div className="SingleService--InnerContent">
            <Content source={body} />
          </div>

          <div className="SingleService--Pagination">
            {prevServiceURL && (
              <Link
                className="SingleService--Pagination--Link prev"
                to={prevServiceURL}
              >
                Previous Service
              </Link>
            )}
            {nextServiceURL && (
              <Link
                className="SingleService--Pagination--Link next"
                to={nextServiceURL}
              >
                Next Service
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  </main>
)

// Export Default SingleService for front-end
const SingleService = ({ data: { service, services } }) => {
  const thisEdge = services.edges.find(edge => edge.node.id === service.id)
  return (
    <Layout
      meta={service.frontmatter.meta || false}
      title={service.frontmatter.title || false}
    >
      <SingleServiceTemplate
        {...service}
        {...service.frontmatter}
        body={service.html}
        nextServiceURL={_get(thisEdge, 'next.fields.slug')}
        prevServiceURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SingleService

export const pageQuery = graphql`
  ## Query for SingleService data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleService($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        subtitle
        date(formatString: "MMMM Do, YYYY")
        categories {
          category
        }
      }
    }

    services: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "services" } } }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
