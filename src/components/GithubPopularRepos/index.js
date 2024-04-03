import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GitHubPopularRepos extends Component {
  state = {
    languageId: 'ALL',
    isLoading: false,
    listOfRepos: [],
    showErrorPage: false,
  }

  componentDidMount() {
    this.getRepos()
  }

  getLanguageId = lId => {
    this.setState({languageId: lId}, this.getRepos)
  }

  getRepos = async () => {
    this.setState({isLoading: true})
    const {languageId} = this.state
    console.log(languageId)
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${languageId}`,
    )
    const data = await response.json()
    const repos = data.popular_repos
    console.log('response', response)
    console.log('repos', repos)
    console.log('data', data)

    if (response.ok) {
      const updatedListOfRepos = repos.map(eachObj => ({
        name: eachObj.name,
        id: eachObj.id,
        issuesCount: eachObj.issues_count,
        forksCount: eachObj.forks_count,
        avatarUrl: eachObj.avatar_url,
        starsCount: eachObj.stars_count,
      }))
      this.setState({isLoading: false, listOfRepos: updatedListOfRepos})
    }
    if (response.status === 403) {
      console.log('fetch failed')
      this.setState({showErrorPage: true, isLoading: false})
    }
  }

  render() {
    const {isLoading, showErrorPage, listOfRepos} = this.state
    if (showErrorPage === true) {
      return (
        <img
          alt="failure view"
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          className="fail-image"
        />
      )
    } else {
      return (
        <div className="git-hub-popular-repos-containeer">
          <h1 className="heading">Popular</h1>
          <LanguageFilterItem
            listOfLanguages={languageFiltersData}
            getLanguageId={this.getLanguageId}
          />

          <div className="repositories-container">
            {isLoading && (
              <div data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#0284c7"
                  height={80}
                  width={80}
                />
              </div>
            )}
            {isLoading === false &&
              listOfRepos.map(each => (
                <RepositoryItem object={each} key={each.id} />
              ))}
          </div>
        </div>
      )
    }
  }
}

export default GitHubPopularRepos
