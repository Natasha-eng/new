import React from "react";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

export const AccordionContainer = React.memo(Accordion);

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.setAccordionCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items = {props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => {

        props.onClick(!props.collapsed)}}>--{props.title}--</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map((i, index) => <li onClick = {() => {props.onClick(i.value)}} key = {index}>{i.title}</li>)}
    </ul>

}


