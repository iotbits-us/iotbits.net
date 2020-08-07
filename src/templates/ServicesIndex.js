import React from 'react'
import { graphql } from 'gatsby'
import qs from 'qs'
import { Location } from '@reach/router'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import ServiceSection from '../components/ServiceSection'
import ServiceCategoriesNav from '../components/ServiceCategoriesNav'

/**
 * filter posts by category.
 * @param {*} services
 * @param {*} title
 * @param {*} contentType
 */
export const byCategory = (services, title, contentType) => {
  const isCategory = contentType === 'serviceCategories'
  const byCategory = service =>
    service.categories &&
    service.categories.filter(cat => cat.category === title).length
  return isCategory ? services.filter(byCategory) : services
}

// Export Template for use in CMS preview
export const ServicesIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  services = [],
  serviceCategories = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredServices =
        services && !!services.length
          ? byCategory(services, title, contentType)
          : []

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredServices = filteredServices.filter(service =>
          service.frontmatter.title.toLowerCase().includes(searchTerm)
        )
      }
      console.log('serviceCategories', serviceCategories)
      console.log('filteredServices', filteredServices)
      return (
        <main className="Blog">
          <PageHeader
            title={title}
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />

          {!!serviceCategories.length && (
            <section className="section thin">
              <div className="container">
                <ServiceCategoriesNav
                  enableSearch
                  categories={serviceCategories}
                />
              </div>
            </section>
          )}

          {!!services.length && (
            <section className="section">
              <div className="container">
                <ServiceSection services={filteredServices} />
              </div>
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

const ServicesIndex = ({ data: { page, services, serviceCategories } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ServicesIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      services={services.edges.map(service => ({
        ...service.node,
        ...service.node.frontmatter,
        ...service.node.fields
      }))}
      serviceCategories={serviceCategories.edges.map(service => ({
        ...service.node,
        ...service.node.frontmatter,
        ...service.node.fields
      }))}
    />
  </Layout>
)

export default ServicesIndex

export const pageQuery = graphql`
  query ServicesIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
        featuredImage
      }
    }
    services: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "services" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage
            categories {
              category
            }
          }
        }
      }
    }
    serviceCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "serviceCategories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
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
