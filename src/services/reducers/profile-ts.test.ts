import { WSActions } from '../../types/wsActions'
import { FeedResponse } from '../../types/responses'
import { StatusCodes } from '../../types/data'
import { wsProfileActions } from '../constants'
import { initialState, wsProfileReducer } from './profile-ws'

describe('Проверка wsReducer', () => {
  it('Проверка начального состояния', () => {
    expect(wsProfileReducer(undefined, {} as WSActions)).toEqual(initialState)
  })

  it('Провека принудительного закрытия соединения', () => {
    const action: WSActions = {
      type: wsProfileActions.PROFILE_CONNECTION_STOP,
    }

    const result = wsProfileReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: false,
      messages: null,
      error: null,
    })
  })

  it('Проверка успешного соединения', () => {
    const action: WSActions = {
      type: wsProfileActions.PROFILE_CONNECTION_SUCCESS,
    }

    const result = wsProfileReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: true,
      error: null,
    })
  })

  it('Провека ошибки соединения', () => {
    const error = new Event('error')

    const action: WSActions = {
      type: wsProfileActions.PROFILE_CONNECTION_ERROR,
      payload: error,
    }

    const result = wsProfileReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: false,
      error: error,
    })
  })

  it('Проверка закрытия соединения', () => {
    const action: WSActions = {
      type: wsProfileActions.PROFILE_CONNECTION_CLOSED,
    }

    const result = wsProfileReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: false,
    })
  })

  it('Проверка получения данных', () => {
    const messages: FeedResponse = {
      success: true,
      orders: [
        {
          _id: '631bd74742d34a001c286f4e',
          ingredients: [
            '60d3b41abdacab0026a733cd',
            '60d3b41abdacab0026a733cc',
            '60d3b41abdacab0026a733c7',
            '60d3b41abdacab0026a733c7',
          ],
          status: StatusCodes.done,
          name: 'Space флюоресцентный spicy бургер',
          createdAt: '2022-09-10T00:16:07.129Z',
          updatedAt: '2022-09-10T00:16:07.484Z',
          number: 25088,
        },
        {
          _id: '631bafdf42d34a001c286e46',
          ingredients: ['60d3b41abdacab0026a733cd', '60d3b41abdacab0026a733c7'],
          status: StatusCodes.done,
          name: 'Space флюоресцентный бургер',
          createdAt: '2022-09-09T21:27:59.181Z',
          updatedAt: '2022-09-09T21:27:59.500Z',
          number: 25087,
        },
      ],
      total: 25001,
      totalToday: 41,
    }

    const action: WSActions = {
      type: wsProfileActions.PROFILE_GET_MESSAGE,
      payload: messages,
    }

    const result = wsProfileReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: null,
      messages,
    })
  })
})
