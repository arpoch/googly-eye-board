import renderer from 'react-test-renderer';
import Canvas from "../components/Canvas";


test("render canvas",()=>{
   const tree = renderer.create(<Canvas />).toJSON();
   expect(tree).toMatchSnapshot();
});