import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}


const category: Category = {
  id: "0ce68ddd-4981-4ee2-a23b-a01452b96b01",
  name: "Olive",
  description: "Earum quo at dolor tempore nisi.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:59:09+0000",
  updated_at: "2022-08-15T10:59:09+0000"
};

export const initialState = [
  category,
  { ...category, id: "1ce68ddd-4981-4ee2-a23b-a01452b96b01", name: "Peach"},
  { ...category, id: "2ce68ddd-4981-4ee2-a23b-a01452b96b01", name: "Apple"},
  { ...category, id: "3ce68ddd-4981-4ee2-a23b-a01452b96b01", name: "Banana"},
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, acrtion) {},
    updateCategory(state, acrtion) {},
    deleteCategory(state, acrtion) {},
  },
});

export default categoriesSlice.reducer;