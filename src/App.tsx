import React, {useState} from 'react';
import './App.css';
import {Rating, ratingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordionContainer} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRatingContainer} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOffContainer} from "./components/OnOff/OnOff";
import {UncontrolledOnOffContainer} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App(props: any) {
    let [ratingValue, setRatingValue] = useState<ratingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);



    return (
        <div className={"App"}>
            <UncontrolledOnOffContainer onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOffContainer on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledAccordionContainer titleValue={"Menu"}/>
            <UncontrolledAccordionContainer titleValue={"Users"}/>
            <UncontrolledRatingContainer onChange={setRatingValue}/>
           {/* <Accordion titleValue={"Users"} setAccordionCollapsed={setAccordionCollapsed}
                       collapsed={accordionCollapsed}  />*/}


            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/* <Accordion titleValue={"Menu"} collapsed={true}/>

            <UncontrolledRating value={0}/>
            <UncontrolledRating value={1}/>
            <UncontrolledRating value={2}/>
            <UncontrolledRating value={3}/>
            <UncontrolledRating value={4}/>
            <UncontrolledRating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>

}

export default App;
