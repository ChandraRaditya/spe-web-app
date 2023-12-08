"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../Services";

export default function ShopSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      setData(response?.data || []);
    });
  }, []);

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
          <div
            key={index}
            className="h-[250px] flex flex-row items-center"
          >
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
              <p className="text-center">10</p>
              <p>10</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
