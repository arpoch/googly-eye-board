import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Title from "../components/Title";

const setup = ()=>{
    const utils = render(
        <Router>
            <Title />
        </Router>
    );
    const button = screen.getByRole('button', {hidden: true});
    const inputBox = screen.getByRole("textbox");
    return {
        button,
        inputBox,
        ...utils
    }
}

test("the button should not be visible by default",()=>{
    const {button} = setup();
    expect(button).toBeInTheDocument();
    expect(button).not.toBeVisible();
});

test("the input box should have focus by default",()=>{
    const {inputBox} = setup();
    expect(inputBox).toHaveFocus();
});

test("the button visibility should change as text-box content changes",()=>{
    const {inputBox,button} = setup();
    fireEvent.change(inputBox,{target: {value: 'octopus'}});
    expect(button).toBeVisible();
    fireEvent.change(inputBox, {target: {value: ''}});
    expect(button).not.toBeVisible();
});

test("hovering over button should change the svg-image",()=>{
   const {utils,button} = setup();
    expect(button).toContainHTML('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ri-arrow-btn" height="4.5em" width="4.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>');
    fireEvent.mouseOver(button);
    expect(button).toContainHTML('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ri-arrow-btn" height="4.5em" width="4.5em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>')
});