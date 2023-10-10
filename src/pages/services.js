import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import LayOut from '../components/LayOut'
import '../assets/css/services-banner.scss';

const Services = () => {
    const [bg, setBg] = useState("");
    const [banner, setBanner] = useState("");
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
            setBanner("services-banner");
            setBg("bg2");
        }
        else if (offset > 800 && offset <= 1100) {
            setBanner("services-banner");
            setBg("bg3");
        }
        if (offset > 900 && offset <= 1100) {
            setBanner("services-banner");
            setBg("bg4");
        }
        if (offset > 1100 && offset <= 1600) {
            setBanner("services-banner");
            setBg("bg1");
        }
        if (offset > 1600) {
            setBanner("services-banner");
            setBg("bg2");
        }
    }, [setBg, setBanner, offset])



    return (
        <LayOut>
            <main className={` ${bg}`} id="services" >
                <section className='services-container'>
                    <div className='services-1 shadow m-hidden'>

                        <div className='mobile-hidden'>
                            <StaticImage src="../assets/images/construction.png" alt="bg" layout="constrained"
                                placeholder="blurred" />
                        </div>
                        <div className={` ${banner}`}>
                            <div className="box">

                                <div className="title">
                                    <span className="block"></span>
                                    <h1>Excellent Construction<span></span></h1>
                                </div>

                                <div className="role">
                                    <div className="block"></div>
                                    <p>BAS DIAMOND STREAMS</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='services-2 fluid' >
                        <div className='' >
                            <h1>What We Do </h1>
                        </div>
                        <div className='card' data-sal="slide-up"

                            data-sal-easing="ease" >
                            <h4>PROJECT MANAGEMENT PLAN </h4>
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

                            data-sal-easing="ease">
                            <h4> PROJECT MAINTENANCE AND REPAIRS</h4>
                            <p>
                                Our project maintenance service option enables you to place your cherished project under our watchful eyes and unfailing care. With this option, BAS Diamond Streams Nig. Ltd. on agreed and appropriate schedules will institute regular maintenance checks and processes for your property on a strict monitoring plan. This is done to ensure property health and feasibility even under the most tasking and demanding utilization conditions.
                                Defects, damages, and misfits are costed, procured, fitted, and expertly installed for the best performance for) on without generating any headaches for you financially for minimal service charges payable on agreed terms. The BAS Diamond Streams Nig. Ltd. Project Maintenance and Repairs Plan enjoy high patronage and liquidity as it is backed by a bulk of our financial resources. This explains why we are able to carry many costs for you at cheaper costs to you.
                            </p>
                        </div>
                        <div className='card' data-sal="slide-up"

                            data-sal-easing="ease" >
                            <h4> SALES OF BUILDING MATERIALS  </h4>
                            <p>Our expansive service portfolio includes our possession of dealership, distributorship, and franchise options with a higher number of quality equipment, materials, and project consumables manufacturers within the West African business environment. This ensures that your decision to contract the BAS Diamond Streams Nig. Ltd. Materials &
                                Equipment Sales Options will guarantee that your materials will reach the site at highly discounted rates thus further speeding up project execution for you.

                            </p>
                        </div>
                        <div className='card' data-sal="slide-up"

                            data-sal-easing="ease">
                            <h4>SITE LANDSCAPING, DESIGN  &#38; PREPARATION </h4>
                            <p>The failure of many property developers to plan the available land area for
                                construction adequately always generates the need for making untoward modifications
                                and adjustments to plan once made. The shortfall of this in the Nigerian environment is a phenomenon we are all presently acquainted with as more and more poorly planned Structures keep collapsing by the day. BAS DIAMOND STREAMS NIGERIA LIMITED With us, Site Designs and Preparation Option, we take the burden of such occurrences off your shoulder by providing affordable, accelerated, and comprehensive site layout surveys, preparation, and landscaping services for your proposed structures. Our proven methods are guaranteed to make you smile regardless of the size of your proposed land area or the ruggedness of the terrain.
                            </p>
                        </div>
                        <div className='card' data-sal="slide-up"

                            data-sal-easing="ease">
                            <h4>CIVIL CONSTRUCTION</h4>
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
                         <div className='card' data-sal="slide-up"

                            data-sal-easing="ease">
                            <h4>AGRICULTURE</h4>
                            <p>
                                We are business group vested in the end-to-end agriculture value chain in Nigeria, and Africa by extension, by maximizing existing and emerging opportunities in the agro-allied sector and creating the right platforms for stakeholders. As part of efforts to drive self-sustainability through economic diversification, BAS Diamond Streams Nigeria Limited via its subsidiary company Bas Agro Allied Service Limited a leading business conglomerate in Africa launched an innovative platform to facilitate improved productivity in the agricultural sector of the nation’s economy. This novel initiative poised to complement the efforts of the federal government in the area of self-sustainability in food production targets in the entire agricultural value chain. Our mission is to drive an agricultural revolution across the continent by, and lead the drive to deliver self-sufficiency in food production, cover the entire agriculture value chain from farming to harvesting, processing, production of livestock products through exploitation in aquaculture, such as cattle ranch, poultry farming and agro processing of inputs to the production and exploitation of animal husbandry such as feed mill, storage, transportation, and up to the end-users. This also include exporting agro-products across the globe.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </LayOut>
    )
}

export default Services
