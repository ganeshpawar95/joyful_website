// src/utils/hooks/homePage.hooks.js
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { retrieveProductDetails } from "../../store/slices/homeSlices";
import { useParams, useRouter } from "next/navigation";

function useProductDetailsHook() {
  const dispatch = useDispatch();
  const router = useParams();

  const { product_details } = useSelector((state) => state.home_slice);
  useEffect(() => {
    dispatch(retrieveProductDetails(router.id));
  }, [dispatch]);

  return {
    product_details,
  };
}

export default useProductDetailsHook;
