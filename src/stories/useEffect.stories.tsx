import React, {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
        //api.getUsers().then('');
        //setInterval;
        //indexedDB;
        //document.getElementById;
        //document.title = "User ";

    })

    useEffect(() => {
        console.log("useEffect first render and every count changing");
        document.title = counter.toString();
    }, [counter])

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, [])

    return <>
        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SetIntervalExample")

    useEffect(() => {
        const intervalId = setInterval(() => {
             setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <>
        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log("Component rendered")

    useEffect(() => {
        console.log('Effect occurred');
        return () => {
            console.log('Reset effect' + counter)
        }

    }, [counter]);

    const increase = () => {
        setCounter(counter + 1)
    }


    return <>
        Hello,counter: {counter}
        <button onClick={increase}>counter+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('');

    console.log("Component rendered with" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText((state) => state + e.key);
        }

        window.addEventListener('keypress', handler);

        return window.removeEventListener('keypress', handler)
    });


    return <>
        Typed text: {text}
    </>
}