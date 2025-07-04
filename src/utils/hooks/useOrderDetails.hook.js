// src/utils/hooks/homePage.hooks.js
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetOrderDetails } from "../../store/slices/homeSlices";
import { useParams, useRouter } from "next/navigation";

function useOrderDetailsHook() {
  const router_nav = useRouter();
  const dispatch = useDispatch();
  const params = useParams();
  const { order_details, loading } = useSelector((state) => state.home_slice);
  const order_id = params?.order_id;
  useEffect(() => {
    dispatch(GetOrderDetails(order_id));
  }, [order_id]);

  return {
    order_details,
    loading,
    router_nav,
  };
}

export default useOrderDetailsHook;
