import {useCallback} from 'react';
import {memo} from "react";

function post(address, obj) {
    console.log(address, obj)
}

export default function ProductPage({productId, referrer, theme}) {
    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
        });
    }, [productId, referrer]);

    return (
        <button onClick={handleSubmit}>提交</button>
    )
}