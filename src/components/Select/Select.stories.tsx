import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")
export const WithValue = () => {
    const [value, setValue] = useState("2");

    return <>
        <Select onChange={setValue} items={[{title: "Minsk", value: "1"}, {title: "Moscow", value: "2"},
            {title: "Kiev", value: "3"}]} value={value}/>
    </>
}

export const WithoutValue = () => {
    const  [value, setValue] = useState(null);

    return <>
        <Select value = {value} onChange={setValue} items={[{title: "Minsk", value: "1"}, {title: "Moscow", value: "2"},
            {title: "Kiev", value: "3"}] }/>
    </>
}


/*
export const OnChangeCityMode = () => {

    const [value, changeValue] = useState<string>("1")
    return <Select items={[{title: "Minsk", value: "1"}, {title: "Moscow", value: "2"},
        {title: "Kiev", value: "1"}]} value={value}
                   onChange={() => changeValue(value)}/>
}
*/
