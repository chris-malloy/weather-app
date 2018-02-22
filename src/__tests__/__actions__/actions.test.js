import configureMockStore from 'redux-mock-store';
import rp from 'redux-promise';
import * as actions from '../../actions/index';
import * as types from '../../constants/ActionTypes';
// import fetchMock from 'fetch-mock'
import expect from 'expect';

const middlewares = [rp]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    describe('fetch weather', () => {
        // afterEach(() => {
        //     fetchMock.reset()
        //     fetchMock.restore()
        // })
        it('should fetch weather data', () => {

        })
    })
})

// TODO
// - fetch-mock not working, possible issu with jest, may need to raise issue