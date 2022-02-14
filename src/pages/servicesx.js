import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import LayOut from '../components/LayOut'

const Services = () => {
    const [bg, setBg] = useState("");

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onscroll = () => {
                setOffset(window.pageYOffset)
            }
        }
    }, [bg])
    useEffect(() => {
        if (offset < 400) {
            setBg("bg1");
        }
        if (offset >= 400 && offset <= 800) {
            setBg("bg2");
        }
        else if (offset > 800 && offset <= 1200) {
            setBg("bg3");
        }
        if (offset > 900 && offset <= 1200) {
            setBg("bg4");
        }
        if (offset > 1200 && offset <= 1600) {
            setBg("bg1");
        }
        if (offset > 1600) {
            setBg("bg2");
        }
    }, [setBg, offset])



    return (
        <LayOut>
            <div className={`services-page ${bg}`} >
                <div className='services-bg shadow'>

                    <div className='mobile-hidden'>
                        <StaticImage src="../assets/images/construction.png" alt="bg" layout="constrained"
                            placeholder="blurred" />
                    </div>
                    <div className="services-container">
                        <div className="box">

                            <div className="title">
                                <span className="block"></span>
                                <h1>Anything construction<span></span></h1>
                            </div>

                            <div className="role">
                                <div className="block"></div>
                                <p>BAS DIAMOND STREAMS</p>
                            </div>

                        </div>
                    </div>


                </div>

                <div className='services-main fluid' id="scroller" >
                    <div className='pt-4 '>
                        <h1>Services </h1>
                    </div>
                    <div className='card' data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-easing="ease" >
                        <h3>PROJECT MANAGEMENT PLAN </h3>
                        <p>
                            Project Management Plan provides an avenue
                            for our company to take up the management of our client’s projects
                            whether or not we are initiated its development in the first place.
                            Processes and arrangements have been developed to ensure our seamless integration
                            with your existing on-ground structures and assumption of plans, goals, and missions
                            so that these are achieved as originally intended. We undertake project evaluation,
                            reconstruction (structural design, quantity survey, interior/exterior decoration,
                            landscaping, etc) with pre-installed safeguards against materials wastages, pilfering
                            while undertaking to act in the best interest of our client as we liaise with other
                            stakeholders and parties necessary to project execution.
                        </p>
                    </div>
                    <div className='card' data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-easing="ease">
                        <h3> PROJECT MAINTENANCE AND REPAIRS</h3>
                        <p>
                            Our project maintenance service option enables you to place your cherished project under our watchful eyes and unfailing care. With this option, BAS Diamond Streams Nig. Ltd. on agreed and appropriate schedules will institute regular maintenance checks and processes for your property on a strict monitoring plan. This is done to ensure property health and feasibility even under the most tasking and demanding utilization conditions.
                            Defects, damages, and misfits are costed, procured, fitted, and expertly installed for the best performance for) on without generating any headaches for you financially for minimal service charges payable on agreed terms. The BAS Diamond Streams Nig. Ltd. Project Maintenance and Repairs Plan enjoy high patronage and liquidity as it is backed by a bulk of our financial resources. This explains why we are able to carry many costs for you at cheaper costs to you.
                        </p>
                    </div>
                    <div className='card' data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-easing="ease" >
                        <h3> SALES OF BUILDING MATERIALS  </h3>
                        <p>Our expansive service portfolio includes our possession of dealership, distributorship, and franchise options with a higher number of quality equipment, materials, and project consumables manufacturers within the West African business environment. This ensures that your decision to contract the BAS Diamond Streams Nig. Ltd. Materials &
                            Equipment Sales Options will guarantee that your materials will reach the site at highly discounted rates thus further speeding up project execution for you.

                        </p>
                    </div>
                    <div className='card' data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-easing="ease">
                        <h3>SITE LANDSCAPING, DESIGN  &#38; PREPARATION </h3>
                        <p>The failure of many property developers to plan the available land area for
                            construction adequately always generates the need for making untoward modifications
                            and adjustments to plan once made. The shortfall of this in the Nigerian environment is a phenomenon we are all presently acquainted with as more and more poorly planned Structures keep collapsing by the day. BAS DIAMOND STREAMS NIGERIA LIMITED With us, Site Designs and Preparation Option, we take the burden of such occurrences off your shoulder by providing affordable, accelerated, and comprehensive site layout surveys, preparation, and landscaping services for your proposed structures. Our proven methods are guaranteed to make you smile regardless of the size of your proposed land area or the ruggedness of the terrain.
                        </p>
                    </div>
                    <div className='card' data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-easing="ease">
                        <h3>CIVIL CONSTRUCTION</h3>
                        <p>
                            Via our efficiency, expertise, extensive resources, and broad-based versatility in
                            covering the project development and management arena, our Civil Constructions
                            Consult is well equipped for acting as your project consultant regardless of your
                            size or purse. Our corporate size and flexibility also afford us to act as
                            sub-contractors to larger construction firms and property development corporations
                            with a tested guarantee of excellent performance and timeliness in meeting up with
                            necessary project deadlines.


                        </p>
                    </div>
                </div>
            </div>
        </LayOut>
    )
}

export default Services
