import React, { useEffect, useState } from 'react'
import axios from "axios";
import Item from './Item';
const Url = "http://localhost:7000/Clothes/";
const fetchHandler = async () => {
    return await axios.get(Url).then((res) => res.data);

};

function Clothes() {
    const [clothes, setClothes] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setClothes(data.clothes));
    },[]);
    console.log(clothes);

    return (
        <div>Clothes
           <ul>
           {clothes &&
          clothes.map((item, i) => (
            <li key={i}>
              <Item item={item} />
            </li>
          ))}
           </ul>
        </div>
    )
}

export default Clothes