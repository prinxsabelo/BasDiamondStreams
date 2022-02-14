import React from 'react'
import LayOut from '../components/LayOut'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className} role="button" onKeyDown={onClick}
            onClick={onClick}
            style={{ paddingTop: '100px', paddingBottom: '100px', }}
        >
            <FaChevronRight color="#e91e63"
            />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div role="button"
            className={className} onKeyDown={onClick}
            onClick={onClick}
            style={{ paddingTop: '100px', paddingBottom: '100px' }}

        >
            <FaChevronLeft color="#e91e63"
            />
        </div>
    );
}


const ProjectTemplate = ({ data }) => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    if (typeof window !== 'undefined') {
        if (window.innerWidth > 900) {
            settings.dots = true;
            settings.adaptiveHeight = false
        }
    }
    const { title, location, images } = data.contentfulProject;
    console.log(title, location);
    return (
        <LayOut>
            <main className='page'>
                <div className='project-page'>

                    <div className='project-slider'>
                        <Slider {...settings} className="overflow-hidden">
                            {images.map((image, index) => {
                                const pathToImage = getImage(image);
                                return (
                                    <GatsbyImage key={index} image={pathToImage} alt={title} />
                                )
                            })}
                        </Slider>

                    </div>




                    <article className="project-info">
                        <h3>{title}</h3>
                        <p>
                            <strong className='tracking-widest'>{location}</strong>
                        </p>
                        <div>
                            <a href={`javascript:history.back()`} className="btn hover-slide-up">
                                <span>Check Other Projects</span>
                            </a>
                            <p className='tracking-wider'>
                                We focus  on giving you the best
                            </p>

                        </div>



                    </article>

                </div>

            </main >
        </LayOut >
    )
}

export const query = graphql`
query getProject($title: String) {
        contentfulProject(title: {eq: $title}) {
            title
            location
           
            images {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
    }
`

export default ProjectTemplate
