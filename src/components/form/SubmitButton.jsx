import { useFormikContext } from "formik";
import SpinnerLoad from "../SpinnerLoad";

const SubmitButton = () => {
  const { isSubmitting } = useFormikContext();

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-20 py-2 rounded-lg bg-linear-to-r cursor-pointer from-blue-400 to-purple-500 text-white font-bold shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-700 disabled:opacity-50"
    >
      {isSubmitting ? (
        <SpinnerLoad colorClass="text-white" isSmall inline />
      ) : (
        "ذخیره"
      )}
    </button>
  );
};

export default SubmitButton;
