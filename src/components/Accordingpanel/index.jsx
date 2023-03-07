
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export const accordionPanel = (props) => {
    <AccordionItemPanel >
        <button onClick={props.addToLocal(props.item)}>
            {props.item.category}
        </button>
    </AccordionItemPanel>
}
