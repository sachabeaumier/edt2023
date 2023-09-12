import './App.scss'

export default function Geospatialnotebook() {
  return (
    <>
      <h1>Geospatial breakdown of Electoral Donations</h1>
      <div className="imageauckland">
        <img
          src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/aucklandimage.jpeg"
          alt="map of auckland"
        ></img>
      </div>
      <p>
        For interactive geospatial analysis, please download and run the
        following Jupyter Notebook as available in the link{' '}
        <a href="https://github.com/sachabeaumier/donations_geospatial_breakdown/tree/main">
          here
        </a>
      </p>
    </>
  )
}
