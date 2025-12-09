import HttpServices from "./HttpServies";

// سرویس گرفتن دسته‌بندی‌ها
export const getCategoriesService = (id = null) => {
    return HttpServices(
        `admin/categories${id ? `?parent=${id}` : ""}`,
        "get"
    );
};
