import './index.css'

const RepositoryItem = props => {
  const {object} = props
  const {issuesCount, forksCount, avatarUrl, starsCount, name} = object

  return (
    <div className="repos-box">
      <img alt={name} src={avatarUrl} className="avatar-image" />
      <p>{name}</p>
      <div className="box">
        <img
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="img"
        />
        <p className="para">{starsCount}</p>
      </div>

      <div className="box">
        <img
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="img"
        />
        <p className="para">{forksCount}</p>
      </div>

      <div className="box">
        <img
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="img"
        />
        <p className="para">{issuesCount}</p>
      </div>
    </div>
  )
}

export default RepositoryItem
