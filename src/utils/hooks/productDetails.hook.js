// src/utils/hooks/homePage.hooks.js
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  retrieveProductDetails,
  AddProductCarts,
  CreateProductDetails,
} from "../../store/slices/homeSlices";
import { useParams, useRouter } from "next/navigation";
import { Form } from "antd";
import { ToastContainer, toast } from "react-toastify";
import {
  getCartFromLocalStorage,
  transformCertificateData,
  getOrCreateSessionId,
} from "../helpers";

function useProductDetailsHook() {
  const router_nav = useRouter();
  const dispatch = useDispatch();
  const router = useParams();
  const [form] = Form.useForm();
  const { product_details, carts } = useSelector((state) => state.home_slice);
  useEffect(() => {
    dispatch(retrieveProductDetails(router.id));
  }, [dispatch]);

  useEffect(() => {
    const carts_data = getCartFromLocalStorage("carts");
    dispatch(AddProductCarts(carts_data));
  }, []);

  function add_to_cart(product) {
    // if (carts.filter((master) => master.id == product.id).length != 0) {
    //   toast.error("Product already added in cart", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });

    //   return false;
    // }

    console.log("user_data", product.user_data);

    const session_id = getOrCreateSessionId();
    transformCertificateData(product.user_data, (output) => {
      console.log("Final Output:", output);
      dispatch(
        CreateProductDetails({
          ...output,
          product_id: product.id,
          session_id: session_id,
        })
      )
        .unwrap()
        .then((res) => {
          form.resetFields();
          toast.success("Product added successfully in cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          router_nav.push("/cart");
        })
        .catch((e) => {
          toast.error(e, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    });
  }

  return {
    product_details,
    add_to_cart,
    form,
  };
}

export default useProductDetailsHook;
