import { useReducer, useEffect } from 'react';

enum ACTIONS {
    API_REQUEST = "api-request",
    SUCCESS = "success",
    FAILURE = "failure",
}

type Action = 
    | { type: ACTIONS.API_REQUEST; payload?: undefined }
    | { type: ACTIONS.SUCCESS; payload: {} }
    | { type: ACTIONS.FAILURE; payload: Error };

type useFetchState = {
    data: {},
    loading: boolean,
    error?: Error,
}

export const useFetch = (url: string, options: {}) => {
    const initialState: useFetchState = {
        data: {},
        loading: false,
    }

    const reducer = (state: useFetchState, action: Action): useFetchState => {
        const { type, payload } = action;

        switch (type) {
            case ACTIONS.API_REQUEST:
                return {
                    ...state,
                    data: {},
                    loading: true,
                };
            case ACTIONS.SUCCESS:
                return {
                    ...state,
                    data: payload,
                    loading: false,
                };
            case ACTIONS.FAILURE:
                return {
                    ...state,
                    data: {},
                    error: payload, 
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: ACTIONS.API_REQUEST })
        const fetchData = async () => {
            try {
                const response = await fetch(url, options)
                const data = await response.json()
                dispatch({ type: ACTIONS.SUCCESS, payload: data })
            } catch (error: unknown) {
                if (error instanceof Error)
                    dispatch({ type: ACTIONS.FAILURE, payload: error })
            }
        };

        fetchData();
    }, [url]);

    return state;
}
