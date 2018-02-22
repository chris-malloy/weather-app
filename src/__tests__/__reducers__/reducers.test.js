import reducer from '../../reducers/WeatherReducer';
import * as types from '../../constants/ActionTypes';

describe('reducers', () => {
    describe('weather reducer', () => {
        it('should return inital state', () => {
            expect(reducer(undefined, {})).toEqual([]);
        })

        it('should handle FETCH_WEAHTER', () => {
            expect(reducer([], {
                type: types.FETCH_WEATHER,
                city: 'Atlanta'
            }))
        })
    })
})