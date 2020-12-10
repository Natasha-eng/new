import React, {useMemo, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Select} from "../Select";
import {ItemType, SelectContainer} from './SelectUseMemo';
import {inspect} from "util";
import styles from "./SelectUseMemo.module.css"

export default {
    title: 'Select useMemo',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")
export const WithValue = () => {
    const [value1, setValue1] = useState("2");
    const [value2, setValue2] = useState("2");
    const [value3, setValue3] = useState("2");
    const [counter, setCounter] = useState(0);

    let items: Array<ItemType> = [{country: "Belarus", title: "Minsk", population: 5000000, value: "1"},
        {country: "Belarus", title: "Gomel", population: 2000000, value: "2"},
        {country: "Belarus", title: "Brest", population: 3000000, value: "3"},
        {country: "Belarus", title: "Vitebsk", population: 4000000, value: "4"},
        {country: "Russia", title: "Moscow", population: 11000000, value: "5"},
        {country: "Russia", title: "Saint-Petersburg", population: 11000000, value: "6"},
        {country: "Ukraine", title: "Kiev", population: 2000000, value: "7"}]

    let city = items.map(c => c.value);

    let filteredItemsByCountry: Array<ItemType> = useMemo(() => {
        let filteredItemsByCountry = items.filter(i => i.country === "Belarus")
        return filteredItemsByCountry
    }, [value1])

    let filteredItemsByLetter: Array<ItemType> = useMemo(() => {
        let filteredItemsByLetter = items.filter(i => i.title.indexOf("M") === 0);
        return filteredItemsByLetter;
    }, [value2]);

    let filteredItemsByPopulation: Array<ItemType> = useMemo(() => {
        let filteredItemsByPopulation = items.filter(i => i.population > 10000000);
        return filteredItemsByPopulation;
    }, [value3]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <div className={styles.filteredSelect}>
            <SelectContainer onChange={setValue1} items={filteredItemsByCountry} value={value1}/>

            <SelectContainer value={value2} onChange={setValue2} items={filteredItemsByLetter}/>

            <SelectContainer value={value3} onChange={setValue3} items={filteredItemsByPopulation}/>
        </div>
    </>
}


