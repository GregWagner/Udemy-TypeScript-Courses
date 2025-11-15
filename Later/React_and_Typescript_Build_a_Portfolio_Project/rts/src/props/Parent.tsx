import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked!')}>
      This is children
    </ChildAsFC>
  );
};

export default Parent;
