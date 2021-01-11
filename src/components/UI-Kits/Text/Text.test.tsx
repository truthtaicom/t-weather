import renderer from 'react-test-renderer';
import Text from './Text';

test('Text render', () => {
  const component = renderer.create(
    <Text>Hello !</Text>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});