import './index.css'

const LanguageFilterItem = props => {
  const state = {selectedId:"ALL"}
  const {listOfLanguages, getLanguageId} = props

  const onClick = lId => {
  const prevStateId = state.selectedId

  const prevElement = document.getElementById(prevStateId);

   prevElement.classList.remove('color-button-class')

   setState({selectedId:lId})
   const {selectedId} = state

  const selectedElement = document.getElementById(selectedId);
selectedElement.classList.add('color-button-class');

    getLanguageId(lId)
    
    
  }

  return (
    <div className="container">
      {listOfLanguages.map(eachObject => (
        <button
          id={eachObject.id}
          key={eachObject.id}
          className="list-item"
          onClick={ () => onClick(eachObject.id)}
        >
          {eachObject.language}
        </button>
      ))}
    </div>
  )
}

export default LanguageFilterItem
