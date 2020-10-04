import React from 'react';


const Book = (props) => {

   let {
       volumeInfo: { title, authors, price, description},
    } = props.book;

    return (
        <div>
            <h2>(title)</h2>
            <h2>(authors)</h2>
            <h2>(price)</h2>
            <h2>(description)</h2>

        </div>
    );
    };

    let amount = () => {
        if (saleInfo.retailPrice) {
            let amount = saleInfo.retailPrice.amount;
            return amount;
        } else {
            let amount = "no amount";
            return amount;
        }
        };
    

export default Books;
