import { cardsMock } from '@/lib/mocks/mockData'
import { QuestionCard } from './QuestionCard'
export default {
    id: 'QuestionCard',
    component: QuestionCard,
    title: 'QuestionCard',
}
export const Default = () => <QuestionCard {...cardsMock[0]} /> 