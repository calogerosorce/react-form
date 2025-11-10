import Card from '../components/Card'

export default function Main({ tasks }) {


    return (

        <div className="container  text-center">
            <Card array={tasks} />
        </div>
    )
}