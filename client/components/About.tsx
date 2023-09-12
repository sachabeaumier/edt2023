export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        <h1>Technologies Utilized and Methodology</h1>
        <p>
          Data to generate these insights were obtained from the{' '}
          <a href="https://elections.nz/democracy-in-nz/political-parties-in-new-zealand/party-donations-and-loans-by-year/">
            NZ Elections
          </a>
          . Automated webscrapping of raw data was completed with the Python{' '}
          <a href="https://pypi.org/project/beautifulsoup4/">BeautifulSoup </a>
          package, with data wrangling and data analysis prodominantly done
          within the <a href="https://www.anaconda.com/">Anaconda </a> suite.
          Tools also used for data analysis include Google Sheets,{' '}
          <a href="https://pandas.pydata.org/">Python Pandas,</a>{' '}
          <a href="">Python Wordcloud</a> and . Batch conversions of addresses
          to their latitudinal and longtitudinal values provided by{' '}
          <a href="https://www.geoapify.com/">Geoapify</a> and geospatial
          mapping uses <a href="https://kepler.gl/">Kepler.gl</a>. Data
          visualization uses{' '}
          <a href="https://recharts.org/en-US/">React Recharts.</a> Where
          possible, opensource solutions are used.
        </p>
      </div>
    </>
  )
}
