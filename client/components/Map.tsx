import React from 'react'

export const GeoMap = () => {
  return (
    <>
      <div>
        <h2>Geospatial Distribution of Donations made to political parties</h2>
        <iframe
          src="https://kepler.gl/#/demo?mapUrl=https://sachabeaumier.github.io/data/donationsdata.json"
          title="geomap"
          name="geomap"
          width="100%"
          height="400"
        ></iframe>
      </div>
    </>
  )
}

export const GeoMap2 = () => {
  return (
    <>
      <div>
        <iframe
          // src="http://localhost:3000/api/data"
          src="https://kepler.gl/#/demo?mapUrl=https://sachabeaumier.github.io/data/donationsdata.json"
          title="geomap2"
          name="myiFrame"
          width="100%"
          height="400"
        ></iframe>
      </div>
      <br></br>
    </>
  )
}
