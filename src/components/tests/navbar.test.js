import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../navbar';

Enzyme.configure({ adapter: new Adapter() });

const component = () => shallow(<App />);

describe('Navbar tests', () => {
    it('it renders')
})