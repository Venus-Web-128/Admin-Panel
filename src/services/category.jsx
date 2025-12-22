import axios from "axios";
import HttpServices from "./HttpServies";

// سرویس گرفتن دسته‌بندی‌ها
export const getCategoriesService = (id = null) => {
    return HttpServices(
        `admin/categories${id ? `?parent=${id}` : ""}`,
        "get"
    );
};

export const getSingleCategoryService = (id = null) => {
    return HttpServices(
        `admin/categories/${id}`,
        "get"
    );
};


export const createNewCategoryService = (data) => {
    if (data.image) {
        let formdata = new FormData();
        formdata.append('parent_id', data.parent_id)
        formdata.append('title', data.title)
        formdata.append('description', data.description)
        formdata.append('image', data.image)
        formdata.append('is_active', data.is_active)
        formdata.append('show_in_menu', data.show_in_menu)
        data = formdata
    }
    return HttpServices('admin/categories', 'post', data);
}




export const deleteCategoryService = (id) => {
    return HttpServices(`admin/categories/${id}`, "delete");
};

export const editCategoryService = (id, data) => {
    return HttpServices(`admin/categories/${id}`, "put", data);
};



