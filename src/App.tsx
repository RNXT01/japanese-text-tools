import './styles.css'
import Header from './Header';

import Footer from './Footer';
import CardForInitials from './CardForInitials';
import CardForHalfFullWidthConv from './CardForHalfFullWidthConv';
import CardForCommonChars from './CardForCommonChars';
import CardForCutoffSim from './CardForCutoffSim';
import CardFor3WayConversion from './CardFor3WayConversion';
function App() {

  return (
    <div className="app">
      <Header />
      <div className="body">

        <div className="flex flex-wrap">
          <div className="cardContainer">
            <CardFor3WayConversion />
          </div>
          <div className="cardContainer">
            <CardForInitials />
          </div>
          <div className="cardContainer">
            <CardForHalfFullWidthConv />
          </div>
          <div className="cardContainer">
            <CardForCutoffSim />
          </div>
          <div className="cardContainer">
            <CardForCommonChars />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
