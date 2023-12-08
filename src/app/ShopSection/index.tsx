"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../Services";

export default function ShopSection() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(0);

  useEffect(() => {
    getData().then((response) => {
      setData(response?.data || []);
    });
  }, []);

    const onChange = (input: any, price: any) => {
       setItem(input.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-black h-[100px] flex flex-row justify-evenly text-white items-center">
        <div className="text-center grow">
          <p>PRODUCT</p>
        </div>
        <p className="min-w-[200px]">QUANTITY</p>
        <p className="min-w-[200px]">SUBTOTAL</p>
      </div>
      {data.map((val: any, index) => {
        return (
          <div key={index} className="h-[250px] flex flex-row items-center">
            <img
              className="w-[200px] h-[200px] mx-[30px]"
              src={val.product.media_url}
              alt=""
            />
            <div className="flex flex-col gap-3 grow">
              <p className="text-blue-400">{val.product.code}</p>
              <p className="text-lg">{val.product.name}</p>
              <div className="text-xs">
                <div>{val.product.price}</div>
                <div className="text-red-500">{val.product.stock} In Stock</div>
              </div>
            </div>
            <div className="min-w-[400px] flex flex-row justify-evenly">
              {/* <p className="text-center">10</p> */}
              <input
                className="border-[2px] border-black w-[100px]"
                type="number"
                onChange={(input) => onChange(input, val.product.price)}
              />
              <p>{item * val.product.price}</p>
            </div>
          </div>
        );
      })}
      <div className="bg-black h-[100px] flex flex-row-reverse text-white items-center">
        <p className="min-w-[200px]">Rp. 10000</p>
        <p className="min-w-[200px]">Total</p>
      </div>
    </div>
  );
}
