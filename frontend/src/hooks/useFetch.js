import { useReducer, useEffect } from 'react';

function useFetch(url, options) {
    const ACTIONS = {
        API_REQUEST: "api-request",
        SUCCESS: "success",
        FAILURE: "failure",
    }

    const initialState = {
        data: {},
        loading: false,
        error: null,
    }

    function reducer(state, { type, payload }) {
        switch(type) {
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
        async function fetchData() {
            try {
                const response = await fetch(url, options)
                const data = await response.json()
                dispatch({ type: ACTIONS.SUCCESS, payload: data })
            } catch (e) {
                dispatch({ type: ACTIONS.FAILURE, payload: e })
            }
        };

        fetchData();
    }, [url]);

    return state;
}

export default useFetch;