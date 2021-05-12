import axios from 'axios';

export const getProducts = () => async(dispatch) => {
    try{
        dispatch({ type: "Get products request"});

        const { data } = await axios.get("/api/products");
        console.log(data)

        dispatch({
            type: "get products success",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "get products fail",
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,  
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: "product details request"});

        const {data} = await axios.get(`/api/products/${id}`);

        dispatch({
            type: "Get product details success",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "Get product details fail",
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};
