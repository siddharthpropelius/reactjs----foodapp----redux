import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
import data from '../../data/data';
import { restroData, couponList } from '../../data/data';
import { useSelector } from 'react-redux';
const FoodSlice = createSlice({
  name: 'food',
  initialState: {
    foodList: data,
    cartList: [],
    couponList: couponList,
    couponData: '',
    completeSubTotal: 0,
    totalAmount: 0,
    restro: restroData,
    totalItem: 0,
    totalDiscount: 0,
    couponApplied: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        if (existingItem.quantity < 5) {
          existingItem.quantity++;
          existingItem.subTotal += newItem.price;
          existingItem.totalPrice += newItem.price;
          state.totalItem++;
          state.totalAmount += newItem.price;
          state.completeSubTotal += newItem.price;
        }
      } else {
        state.cartList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img,
          quantity: 1,
          subTotal: newItem.price,
          totalPrice: newItem.price,
          des: newItem.des,
          deliveryCharge: 15,
        });
        state.totalAmount += newItem.price;
        state.completeSubTotal += newItem.price;
        state.totalItem++;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartList = state.cartList.filter((item) => item.id !== id);
        state.totalAmount -= existingItem.totalPrice;
        // state.totalSubTotal -= existingItem.price;
        state.completeSubTotal -= existingItem.totalPrice;
      } else {
        existingItem.quantity--;
        existingItem.subTotal -= existingItem.price;
        existingItem.totalPrice -= existingItem.price;
        state.totalAmount -= existingItem.price;
        state.completeSubTotal -= existingItem.price;
      }
      state.totalItem--;
    },

    addCoupon(state, action) {
      const coupon = action.payload;
      state.couponData = coupon;
      const found = state.couponList.find(
        (item) => item.name === coupon.toLowerCase()
      );
      state.totalDiscount = Math.round(
        (state.totalAmount / 100) * found.discountedPercentage
      );
      state.totalAmount -= Math.round(
        (state.totalAmount / 100) * found.discountedPercentage
      );

      state.couponApplied = true;
    },

    removeCoupon(state, action) {
      state.couponData = '';
      state.totalAmount = 0;
      state.totalDiscount = 0;
      state.cartList.map((item) => {
        state.totalAmount += item.totalPrice;
      });
      state.couponApplied = false;
    },

    resetRedux(state) {
      state.foodList = data;
      state.cartList = [];
      state.couponData = '';
      state.completeSubTotal = 0;
      state.totalAmount = 0;
      state.totalItem = 0;
      state.totalDiscount = 0;
      state.couponApplied = false;
    },
  },
});

export const FoodActions = FoodSlice.actions;
export default FoodSlice;
