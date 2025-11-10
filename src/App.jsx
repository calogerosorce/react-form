import Header from './components/Header'
import Main from './components/Main'
function App() {

  const tasks = [{
    id: 1,
    title: 'Learn React'
  },
  {
    id: 2,
    title: 'Build a React App'
  },
  {
    id: 3,
    title: 'Deploy the App'
  }, {
    id: 4,
    title: 'Celebrate!'
  }]


  return (
    <>

      <Header />
      <Main tasks={tasks} />

    </>
  )
}

export default App
