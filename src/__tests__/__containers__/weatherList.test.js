import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { WeatherList } from '../../containers/WeatherList';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        renderWeather: jest.fn()
    }
    const enzymeWrapper = mount(<WeatherList />)

    return {
        props,
        enzymeWrapper
    }
}

describe('weather list', () =>{
    it('should render correctly', () => {
        const { enzymeWrapper, props } = setup()

        expect(enzymeWrapper.find('table').hasClass('table table-hover')).toBe(true);
    })
})