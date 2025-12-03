import ModalsContainer from "../../components/ModalsContiener";

const OrderDetails = () => {
  return (
    <>
      <ModalsContainer
        title="جزئیات سفارش"
        isOpen={true} // این رو بعداً با state کنترل کن
        onClose={() => {}} // تابع بستن مودال
        fullScreen={true}
      >
        <div className="p-4 space-y-6">
          {/* اطلاعات کلی سفارش */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input
              type="text"
              value="قاسم بساکی"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="تاریخ پرداخت"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="مبلغ پرداختی"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="مبلغ تخفیف"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="کد تخفیف"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
          </div>

          <input
            type="text"
            value="آدرس کامل"
            disabled
            className="border rounded-lg px-3 py-2 w-full bg-gray-100"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input
              type="text"
              value="نوع ارسال"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="تلفن"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="ایمیل"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="شماره کارت"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="نام بانک"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
          </div>

          <hr />

          {/* محصولات داخل سفارش */}
          <div className="space-y-2 dir_ltr">
            <div className="flex items-center border rounded-lg p-2">
              <span className="bg-gray-200 px-3 py-1 rounded-l">عدد</span>
              <input
                type="number"
                value="50"
                disabled
                className="border px-3 py-1 text-center w-20 bg-gray-100"
              />
              <span className="flex-1 bg-gray-100 px-3 py-1 rounded-r text-sm">
                محصول شماره 1 (100هزار تومان) (گارانتی فلان)
                <i className="fas fa-circle mx-1 text-black"></i>
              </span>
            </div>

            <div className="flex items-center border rounded-lg p-2">
              <span className="bg-gray-200 px-3 py-1 rounded-l">عدد</span>
              <input
                type="number"
                value="5"
                disabled
                className="border px-3 py-1 text-center w-20 bg-gray-100"
              />
              <span className="flex-1 bg-gray-100 px-3 py-1 rounded-r text-sm">
                محصول ویژه شماره 2 (100هزار تومان) (گارانتی فلان)
                <i
                  className="fas fa-circle mx-1"
                  style={{ color: "rgb(236,16,16)" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default OrderDetails;
