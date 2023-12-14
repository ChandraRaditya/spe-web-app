"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../../Services";

export default function ShopSection() {
  const [data, setData] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getData().then((response: any) => {
      const newData = response?.data.map((val: any) => {
        return {
          quantity: val.quantity,
          code: val.product.code,
          name: val.product.name,
          price: val.product.price,
          image: val.product.media_url,
          stock: val.product.stock,
          stockPrice: val.quantity * val.product.price,
        };
      });
      setData(newData || []);

      calculateTotalPrice(newData);
    });
  }, []);

  const calculateTotalPrice = (data: any) => {
    let totalPrice = 0;
    data.forEach((a: any) => {
      totalPrice += a.stockPrice;
    });

    setTotalPrice(totalPrice);
  };

  const onChange = (input: any, code: any) => {
    const stock = input.target.value;
    const newData = data.map((val: any) => {
      if (val.code == code) {
        const newObj = { ...val, quantity: Number(stock), stockPrice: val.price * Number(stock) }
        return newObj
      }

      return val
    })
  
    setData(newData)

    calculateTotalPrice(newData);
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="bg-black h-[100px] flex flex-row justify-evenly text-white items-center">
        <div className="text-center grow">
          <p>PRODUCT</p>
        </div>
        <p className="min-w-[200px]">QUANTITY</p>
        <p className="min-w-[200px]">SUBTOTAL</p>
      </div>
      {data.map((val: any, index: any) => {
        return (
          <div key={index} className="h-[250px] flex flex-row items-center">
            <img
              className="w-[200px] h-[200px] mx-[30px]"
              src={val.image}
              alt=""
            />
            <div className="flex flex-col gap-3 grow">
              <p className="text-blue-400">{val.code}</p>
              <p className="text-lg">{val.name}</p>
              <div className="text-xs">
                <div>
                  {" "}
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(Number(val.price))}
                </div>
                <div className="text-red-500">{val.stock} In Stock</div>
              </div>
            </div>
            <div className="min-w-[400px] flex flex-row justify-around">
              {/* <p className="text-center">10</p> */}
              <div className="flex flex-col justify-center grow">
                <input
                  className="border-[2px] border-black w-[100px]"
                  placeholder={val.quantity}
                  type="number"
                  onChange={(input) => onChange(input, val.code)}
                />
              </div>
              <div className="flex flex-col justify-end grow">
                <p>
                  {" "}
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(Number(val.stockPrice))}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="bg-black h-[100px] flex flex-row-reverse text-white items-center">
        <p className="min-w-[200px] ml-[30px]">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(Number(totalPrice))}
        </p>
        <p className="min-w-[200px]">Total</p>
      </div>
    </div>
  );
}
