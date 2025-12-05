import { QuestionContainer } from './components/Questions/QuestionContainer'
import { Questions } from './data/Data'
import type { Question } from './models/Question'

function App() {
  const questions: Question[] = Questions
  
  return (
    <div>
      <QuestionContainer question={questions[0]}/>
    </div>
  )
}

export default App