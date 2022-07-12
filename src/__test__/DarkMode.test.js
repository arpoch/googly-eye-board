import "./matchMedia";
import {render,screen} from "@testing-library/react";
import DarkMode from "../components/DarkMode";

test("render dark-mode component",()=>{
    render(<DarkMode />);
    const modeButton = screen.getByRole('button');
    expect(modeButton).toBeInTheDocument();
});

test("clicking over the dark-mode button should change icons svg",()=>{

});