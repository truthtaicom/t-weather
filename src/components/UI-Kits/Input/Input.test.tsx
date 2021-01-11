import renderer from 'react-test-renderer';
import Input from './Input';

test('Input render', () => {
  const component = renderer.create(
    <Input value="hello" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});