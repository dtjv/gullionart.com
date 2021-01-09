import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

export default () => {
  const imageQuery = graphql`
    query {
      allFile(
        filter: {
          base: { in: ["rich-02.jpg", "rich-04.jpg", "studio-01.jpg"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `

  let {
    allFile: { edges: images },
  } = useStaticQuery(imageQuery)

  return (
    <Layout>
      <SEO />
      <div className="px-4 py-8 md:px-12">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:pr-6 lg:w-1/2">
            <div className="prose">
              <h1>My Story</h1>
              <p>
                I graduated in 1968 from Willow Glen High School, where I
                studied mechanical and architectural drawing. My love of art has
                been lifelong, and these classes provided the opportunity to
                improve my skills.
              </p>
              <p>
                After high school, I lived and worked in Hawaii until I was
                drafted in April of 1969. Luckily, I was stationed at Fort Ord,
                close to home and family.
              </p>
              <p>
                On my 20th birthday, I received orders to go to Vietnam, which
                was to be a defining moment in my life, one that still
                influences my art and perception of the world. While there, I
                documented life and experiences in words and pictures in a
                hardcover notebook that I carried with me. Sadly, that notebook
                got stolen about 10 months into my tour, a heartbreaking loss I
                still feel today.
              </p>
              <p>
                Fighting overseas with my fellow soldiers, experiencing the
                stark and immediate juxtaposition of life and death that is war,
                heightened our appreciation of life. Through our shared
                experiences, thoughts and dreams, these soldiers became my
                brothers. This time in my life still influences my art to this
                day.
              </p>
              <p>
                In the intervening years, while continuing to make my own art, I
                had the opportunity to help budding young artists develop their
                skills as an art and photography teacher at Independence High
                School. Nurturing artistic expression in young people has been
                an important and fulfilling part of my artistic journey.
              </p>
              <p>
                My art is a reflection of a lifetime of experiences, making it
                deeply personal, but at the same time, open to interpretation by
                the viewer. While it’s based on my life, I hope it touches the
                lives of my audience and resonates with them.
              </p>
              <p>
                If you have questions about my art or would like to visit my
                studio, please contact me.
              </p>
              <p>Sincerely,</p>
              <p>
                <strong> Richard Gullion </strong>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="pt-8 lg:pt-0">
              {images.map((image) => (
                <Img
                  key={image.node.base.split(`.`)[0]}
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(`.`)[0]}
                  className="mb-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
