import React, {useState} from "react";


export default {
    title: 'useState demo'
}

function generateData() {
    //difficult counting

    return 354637839;
}


export const Example1 = () => {

    const initValue = generateData();

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}