import HttpServices from "../services/HttpServies";

// گرفتن ویژگی‌های دسته
export const getCategoryAttrsService = (categoryId) => {
  return HttpServices(`admin/categories/${categoryId}/attributes`, "get");
};

// ایجاد ویژگی جدید
export const createAttrService = (categoryId, data) => {
  return HttpServices(`admin/categories/${categoryId}/attributes`, "post", data);
};

// ویرایش ویژگی
export const editCategoryAttrService = (attrId, data) => {
  return HttpServices(`admin/categories/attributes/${attrId}`, "put", data);
};

// حذف ویژگی
export const deleteAttrService = (attrId) => {
  return HttpServices(`admin/categories/attributes/${attrId}`, "delete");
};



