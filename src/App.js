import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import store from 'store'
import { useTeamDispatch, ActionTypes } from './components/TeamContext'
import { validateArr } from './utils'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PairProgramming from './components/PairProgramming'
import Reviewers from './components/Reviewers'

function App() {
  const dispatch = useTeamDispatch()

  useEffect(() => {
    const storedMembers = store.get('members');
    if (validateArr(storedMembers)) {
      dispatch({type: ActionTypes.SAVE_STORED_MEMBERS, payload: storedMembers})
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/pr-reviewers' element={<Reviewers />} />
        <Route path='/pair-programming' element={<PairProgramming />} />
      </Routes>
    </div>
  );
}

export default App;
