import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelPackage from '../TravelPackage/index'
import './index.css'

class TravelGuide extends Component {
  state = {travelPackageList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const APIurl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(APIurl)
    const data = await response.json()
    const updateData = data.packages.map(eachItem => ({
      description: eachItem.description,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
    }))
    this.setState({travelPackageList: updateData})
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderPackage = () => {
    const {travelPackageList} = this.state
    return (
      <ul className="travel-guide-list">
        {travelPackageList.map(packageItem => (
          <TravelPackage key={packageItem.id} packageDetails={packageItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {travelPackageList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Travel Guide</h1>
          <hr className="highlighter" />
          {travelPackageList <= 0 ? this.renderLoader() : this.renderPackage()}
        </div>
      </div>
    )
  }
}
export default TravelGuide
