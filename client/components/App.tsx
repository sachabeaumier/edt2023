import WordCloud from './Wordcloud'
import PieChartComponent from './Totaldonationspiechart'

import StackedAreaChart from './StackedAreaChart'
import {
  ActStackedAreaChart,
  DemocracyNZStackedAreaChart,
  FreedomsNZStackedAreaChart,
  GreensStackedAreaChart,
  NZFirstStackedAreaChart,
  LabourStackedAreaChart,
  NationalStackedAreaChart,
  MaoriStackedAreaChart,
  VisionNZStackedAreaChart,
} from './IndividualAreaCharts'

function App() {
  return (
    <>
      <header className="header"></header>
      <section className="main">
        <p></p>

        <div className="graphcontainer">
          <div className="column left">
            <h2>Electoral Donations Tracker 2023</h2>
            <h2>About</h2>
            <p>
              This website/study attempts to understand and hopefully increase
              transparency concerning the issue of electoral funding for this
              coming New Zealand Election (Saturday, 14 October 2023). Given the
              disproportionate level of donations across political parties - as
              well as the potential public policy consequencies that may arise,
              a key research question of this study was to understand the
              relationship between productive economic sectors and political
              parties - with this information one can make an inference as to
              the policy configurations that may arise should a party come to
              power and therefore whose interests such policies are made for.
            </p>
            <p>
              In order to get greater clarity/insight on this question, an
              analysis has been made for every individual donor in relation to
              the industry they have made their wealth in. This information
              alongside other insights (ie bio, companies they may be
              associated, sectoral interests) are available as a pubicly
              available API endpoint that is free to use{' '}
              <a href="https://edtracker2023-production.up.railway.app/api/data">
                here
              </a>
              . Should this information be used or republished, please provide
              attributation (contact details can be found in footer).
            </p>
            <h2>Technology and Methodologies</h2>
            <p>
              Data to generate these insights were obtained from the{' '}
              <a href="https://elections.nz/democracy-in-nz/political-parties-in-new-zealand/party-donations-and-loans-by-year/">
                NZ Elections
              </a>
              . Automated webscrapping of raw data was completed with the Python{' '}
              <a href="https://pypi.org/project/beautifulsoup4/">
                BeautifulSoup{' '}
              </a>
              package, with data wrangling and data analysis prodominantly done
              within the <a href="https://www.anaconda.com/">Anaconda </a>{' '}
              suite. Tools also used for data analysis include Google Sheets,{' '}
              <a href="https://pandas.pydata.org/">Python Pandas,</a>{' '}
              <a href="https://pypi.org/project/wordcloud/">Python Wordcloud</a>
              . Batch conversions of addresses to their latitudinal and
              longtitudinal values provided by{' '}
              <a href="https://www.geoapify.com/">Geoapify</a> and geospatial
              mapping uses <a href="https://kepler.gl/">Kepler.gl</a> and
              Jupyter Notebooks. Data visualization uses{' '}
              <a href="https://recharts.org/en-US/">React Recharts.</a> Where
              possible, opensource solutions are used.
            </p>
          </div>

          <div className="column right">
            <h2>
              Proportional Breakdown of Donations made to Political Parties
              since 2023 (NZD)
            </h2>

            <PieChartComponent />
          </div>
        </div>
        <h2>Stacked Area Chart of Electoral Donations since 2023</h2>
        <StackedAreaChart />

        <div className="graphcontainer">
          <div className="column left">
            <h2>Financial Donations made to ACT since 2023 (NZD)</h2>
            <ActStackedAreaChart />
          </div>
          <div className="column right">
            <h2>Financial Donations made to DemocracyNZ since 2023 (NZD)</h2>
            <DemocracyNZStackedAreaChart />
          </div>
        </div>
        <div className="graphcontainer">
          <div className="column left">
            <h2>Financial Donations made to FreedomNZ since 2023 (NZD)</h2>
            <FreedomsNZStackedAreaChart />
          </div>
          <div className="column right">
            <h2>Financial Donations made to the Greens since 2023 (NZD)</h2>
            <GreensStackedAreaChart />
          </div>
        </div>

        <div className="graphcontainer">
          <div className="column left">
            <h2>Financial Donations made to NZFirst since 2023 (NZD)</h2>
            <NZFirstStackedAreaChart />
          </div>

          <div className="column right">
            <h2>Financial Donations made to Labour since 2023 (NZD)</h2>
            <LabourStackedAreaChart />
          </div>
        </div>

        <div className="graphcontainer">
          <div className="column left">
            <h2>Financial Donations made to National since 2023 (NZD)</h2>
            <NationalStackedAreaChart />
          </div>
          <div className="column right">
            <h2>Financial Donations made to Te Pāti Māori since 2023 (NZD)</h2>
            <MaoriStackedAreaChart />
          </div>
        </div>
        <div className="graphcontainer">
          <div className="column left">
            <h2>Financial Donations made to VisionNZ since 2023 (NZD)</h2>
            <VisionNZStackedAreaChart />
          </div>
        </div>
        <div className="graphcontainer">
          <div className="column left">
            <img
              src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/aucklandimage.jpeg"
              alt="map of auckland"
            ></img>
          </div>
          <div className="column right">
            <h2>
              Geographical and Geospatial Breakdown of Electoral Donations
            </h2>
            <p></p>
            <p>
              For those with Jupyter Notebook installed on your computer, do
              download this gitrepo and run the consequential codeblock
              accordingly{' '}
              <a href="https://github.com/sachabeaumier/donations_geospatial_breakdown/blob/main/Electoral%20Donations%20Geospatial%20Tracker.ipynb">
                here
              </a>
            </p>
            <p>
              If you do not have Jupyter installed, you can still download and
              use this{' '}
              <a href="https://github.com/sachabeaumier/donations_geospatial_breakdown/blob/main/Electoral%20Donations%20Geospatial%20Tracker.ipynb">
                netbook
              </a>{' '}
              via Jupyter Notebook online which can work within the browser and
              is available through the following link{' '}
              <a href="https://jupyter.org/try"> here</a>.
            </p>
          </div>
          <div className="wordcloud-intro">
            <h2>
              Donor relationship between Economic Sectors and Political Parties
            </h2>
            <p>
              This section attempts to understand the relationship between
              productive economic sectors that donors may align with, in
              relation to political parties that may best represent their
              interests. This is done by cataloging how each donor has made
              their wealth/what industry in connection to the political party
              they have donated to. The larger the word appears within the Word
              Cloud, the more funding this sector has made to a political party.
            </p>
            <p>
              This information was obtained by analyzing donors publicly
              available web presence to determine the industry they may come
              from, alongside companies they may have interest with (this latter
              detail is excluded for this study but available in the API under
              description details).
            </p>
            <p>
              For a further breakdown of donors, do checkout the API as
              available in the link{' '}
              <a href="https://edtracker2023-production.up.railway.app/api/data">
                here
              </a>
            </p>
          </div>
        </div>
        <WordCloud />
        <div>
          <div>
            <h2>Contact</h2>
            <p>
              For questions, queries, further insights, recommendations, errors,
              collaboration, website issues, please{' '}
              <a href="mailto: sacha.beaumier@gmail.com">flick me an email</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
