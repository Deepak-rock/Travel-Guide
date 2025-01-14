import './index.css'

const TravelPackage = props => {
  const {packageDetails} = props
  const {imageUrl, name, description} = packageDetails
  console.log('packageDetails: ', packageDetails)
  return (
    <li className="package-item">
      <div className="package-container">
        <img src={imageUrl} alt={name} className="image" />
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}
export default TravelPackage
