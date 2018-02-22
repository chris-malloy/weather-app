import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { SearchBar } from '../../containers/SearchBar';

Enzyme.configure({ adapter: new Adapter() });

function setup(){
    const props = {
        onInputChanged: jest.fn()
    }

    const enzymeWrapper = mount(<SearchBar />)

    return {
        props,
        enzymeWrapper
    }
}

describe('search bar', () => {
    it('should render correctly and pass term', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('form').hasClass('input-group')).toBe(true);

        expect(enzymeWrapper.find('input').hasClass('form-control')).toBe(true);
        const iProps = enzymeWrapper.find('input').props()
        expect(iProps.placeholder).toEqual("Get a five-day forecast in your favorite cities.")
    })
})