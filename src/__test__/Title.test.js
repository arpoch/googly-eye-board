
import Title from "../components/Title";
import renderer from "react-test-renderer";

describe("Title component",()=>{
    it("Title renders",()=>{
        const tree = renderer.create(<Title/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
