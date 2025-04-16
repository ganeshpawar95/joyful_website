import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HttpRequests from "../../services/Http-request-service";

const initialState = {
  loading: true,
  hasErrors: true,
  banner_list: [],
  best_selling: [],
  trending: [],
  reviews_all: [],
  product_details: null,
};

export const retrieveBanners = createAsyncThunk(
  "home-retrieve-banners",
  async (yrs, { getState }) => {
    const state = getState();
    // const {} = state.home_slice;
    const res = await HttpRequests.get(`home/banners/list/`);
    return res.data;
  }
);

export const retrieveBestSelling = createAsyncThunk(
  "home-retrieve-best-selling",
  async (product_type) => {
    const res = await HttpRequests.get(
      `home/products/list/?product_type=${product_type}`
    );
    return res.data;
  }
);

export const retrieveTrending = createAsyncThunk(
  "home-retrieve-best-trending",
  async (product_type) => {
    const res = await HttpRequests.get(
      `home/products/list/?product_type=${product_type}`
    );
    return res.data;
  }
);

export const retrieveReviewsAll = createAsyncThunk(
  "home-retrieve-review-all",
  async () => {
    const res = await HttpRequests.get(`home/products/reviews/all/`);
    return res.data;
  }
);

export const retrieveProductDetails = createAsyncThunk(
  "home-retrieve-product-details",
  async (product_id) => {
    const res = await HttpRequests.get(
      `home/products/details/?product_id=${product_id}`
    );
    return res.data;
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(retrieveBanners.pending, (state, action) => {
      state.loading = true;
      state.banner_list = [];
    });

    builder.addCase(retrieveBanners.fulfilled, (state, action) => {
      state.loading = false;
      state.banner_list = action.payload;
    });

    builder.addCase(retrieveBanners.rejected, (state, action) => {
      state.loading = false;
      state.banner_list = [];
    });

    // retrieveBestSelling
    builder.addCase(retrieveBestSelling.pending, (state, action) => {
      state.loading = true;
      state.best_selling = [];
    });

    builder.addCase(retrieveBestSelling.fulfilled, (state, action) => {
      state.loading = false;
      state.best_selling = action.payload;
    });

    builder.addCase(retrieveBestSelling.rejected, (state, action) => {
      state.loading = false;
      state.best_selling = [];
    });
    // retrieveTrending
    builder.addCase(retrieveTrending.pending, (state, action) => {
      state.loading = true;
      state.trending = [];
    });

    builder.addCase(retrieveTrending.fulfilled, (state, action) => {
      state.loading = false;
      state.trending = action.payload;
    });

    builder.addCase(retrieveTrending.rejected, (state, action) => {
      state.loading = false;
      state.trending = [];
    });

    // retrieveReviewsAll
    builder.addCase(retrieveReviewsAll.pending, (state, action) => {
      state.loading = true;
      state.reviews_all = [];
    });

    builder.addCase(retrieveReviewsAll.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews_all = action.payload;
    });

    builder.addCase(retrieveReviewsAll.rejected, (state, action) => {
      state.loading = false;
      state.reviews_all = [];
    });

    // retrieveProductDetails
    builder.addCase(retrieveProductDetails.pending, (state, action) => {
      state.loading = true;
      state.product_details = null;
    });

    builder.addCase(retrieveProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.product_details = action.payload;
    });

    builder.addCase(retrieveProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.product_details = null;
    });
  },
  reducers: {
    onchange_search: (state, action) => {
      state.search_name = action.payload;
    },
    change_page: (state, action) => {
      state.current_page = action.payload;
    },

    onchange_sort_by: (state, action) => {
      state.sort_by = action.payload;
    },
    update_loader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// change_page

const { reducer } = HomeSlice;
export const { update_loader, change_page, onchange_sort_by, onchange_search } =
  HomeSlice.actions;
export default reducer;
