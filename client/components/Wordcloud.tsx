import './App.scss'

export default function WordCloud() {
  return (
    <section>
      <div className="graphcontainer">
        <div className="column left">
          <h2>Green Party</h2>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/greenpartywordcloud.png"
            alt="Green Party wordcloud"
          ></img>
        </div>
        <div className="column right">
          <h2>ACT Party</h2>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/ACTwordcloudv2.png"
            alt="ACT Party wordcloud"
          ></img>
        </div>
      </div>
      <div className="graphcontainer">
        <div className="column left">
          <h2>Vision NZ</h2>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/VisionNZPartyv2.png"
            alt="Vision NZ wordcloud"
          ></img>
        </div>
        <div className="column right">
          <h2>Democracy NZ</h2>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/DemocracyNZwordcloud.png"
            alt="democracy NZ wordcloud"
          ></img>
        </div>
      </div>

      <div className="graphcontainer">
        <div className="column left">
          <h2>NZ First</h2>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/NZFirstwordcloud.png"
            alt="NZ First Word Cloud"
          ></img>
        </div>
        <div className="column right">
          <h2>Labour</h2>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/Labourwordcloud.png"
            alt="Labour Party Word Cloud"
          ></img>
        </div>
      </div>

      <div className="graphcontainer">
        <div className="column left">
          <h2>National Party</h2>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/Nationalwordcloud.png"
            alt="National Party Word Cloud"
          ></img>
        </div>
        <div className="column right"></div>
        <div className="column"></div>
        {/* <div id="middle"></div>
        <div id="right"></div> */}
      </div>
    </section>
  )
}
