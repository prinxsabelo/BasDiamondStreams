import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import LayOut from "../components/LayOut"
import Profile from "./profile"
import Projects from "./projects"
import Services from "./services"


export default function Home() {
  return (
    <LayOut>
      <main >
        <div className="index-header ">
          <StaticImage src="../assets/images/bg.jpg" alt="bg" className="index-bg" layout="fullWidth"
            placeholder="blurred" />
          <div className="index-container">
            <div className="bg-container">
              <div className="bg-content">

                <h1 className="frame-1">BAS IS FOR YOU</h1>
                <h1 className="frame-2">
                  <span> BUILD </span>
                  <span> WITH</span>
                  <span> BAS</span>
                </h1>
                <a className="bg-link" href="/">Talk to Us</a>
              </div>
            </div>
          </div>
        </div>

        <Profile />

        <Services />


        <Projects />

      </main>

    </LayOut >
  )
}









