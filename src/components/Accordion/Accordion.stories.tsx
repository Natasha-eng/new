import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} setAccordionCollapsed={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false}
                                                     setAccordionCollapsed={callback}
                                                     items={[{title: "Dimych", value: 1}, {
                                                         title: "Valera",
                                                         value: 2
                                                     }, {title: "Artem", value: 3},
                                                         {title: "Viktor", value: 4}]}
                                                     onClick={onClickCallback}/>
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(false);
    return <Accordion titleValue={"Users"} collapsed={value} setAccordionCollapsed={setValue}
                      items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3},
                          {title: "Viktor", value: 4}]} onClick = {(value) => {alert (`user with ID ${value} should be happy`)}}/>
}