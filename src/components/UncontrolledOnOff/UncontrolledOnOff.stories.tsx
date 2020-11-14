import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action("on or off clicked")
export const OnMode = () =>  <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () =>  <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

