import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram, faEdit, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const Actions = ({ rowData }) => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <>
      {
        !params.categoryId ? (
          <FontAwesomeIcon
            icon={faProjectDiagram}
            className="text-sky-500 mx-1 cursor-pointer hover:text-sky-600"
            title="زیرمجموعه"
            onClick={() => navigate(`/categories/${rowData.id}`, {
              state: {
                parentData: rowData
              }
            })}
          />
        ) : null
       }
      <FontAwesomeIcon
        icon={faEdit}
        className="text-yellow-500 mx-1 cursor-pointer hover:text-yellow-600"
        title="ویرایش دسته"
      />
      <FontAwesomeIcon
        icon={faPlus}
        className="text-green-500 mx-1 cursor-pointer hover:text-green-600"
        title="افزودن ویژگی"
      />
      <FontAwesomeIcon
        icon={faTimes}
        className="text-red-500 mx-1 cursor-pointer hover:text-red-600"
        title="حذف دسته"
      />
    </>
  );
};

export default Actions;
