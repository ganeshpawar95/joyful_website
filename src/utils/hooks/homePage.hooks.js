// src/utils/hooks/homePage.hooks.js
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  retrieveBanners,
  retrieveBestSelling,
  retrieveTrending,
  retrieveReviewsAll,
} from "../../store/slices/homeSlices";

const useHomePageHook = () => {
  const dispatch = useDispatch();
  const { banner_list, best_selling, trending, reviews_all } = useSelector(
    (state) => state.home_slice
  );

  useEffect(() => {
    dispatch(retrieveBanners());
    dispatch(retrieveBestSelling("best selling"));
    dispatch(retrieveTrending("trending"));
    dispatch(retrieveReviewsAll());
  }, [dispatch]);

  return {
    banner_list,
    best_selling,
    trending,
    reviews_all,
  };
};

export default useHomePageHook;
