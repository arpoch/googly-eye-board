import renderer from 'react-test-renderer';
import App from "../components/App";

it("App component renders",()=>{
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});