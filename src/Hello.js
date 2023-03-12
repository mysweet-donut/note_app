//import {useState} from 'react'

export default function Hello({name, age}) {
    // const [age, setAge] = useState(15)
    // const [name, setName] = useState('Picaso')

    // function plus(){
    //     setAge(age + 1)
    // }

    // function minus(){
    //     setAge(age - 1)
    // }

    // function chaneName(){
    //     setName(name==='Picaso'? 'Alice' : 'Picaso')
    // }

    return (
        // <div>
        //     <h1>Welcome {name} (<b id ="age">{age}</b>)</h1>
        //     <button onClick={plus}>plus age</button>
        //     <button onClick={minus}>minus age</button>
        //     <button onClick={chaneName}>change name</button>
        // </div>

        <div>
            <h1>Welcome {name} {(age)}</h1>
        </div>
    )
}