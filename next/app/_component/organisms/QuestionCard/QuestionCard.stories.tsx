import { cardMock } from '@/lib/mockData'
import { QuestionCard } from './QuestionCard'
export default {
    id: 'QuestionCard',
    component: QuestionCard,
    title: 'QuestionCard',
}
export const Default = () => <QuestionCard {...cardMock[0]} /> 