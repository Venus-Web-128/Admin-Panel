

const PaginatedTable = ({ data, dataInfo, additionField }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-center text-sm">
        <thead className="bg-gray-200">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field} className="px-4 py-2 border">
                {i.title}
              </th>
            ))}
            {additionField ? (
              <th className="px-4 py-2 border">{additionField.title}</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr
              key={d.id}
              className="hover:bg-gray-100 transition-colors"
            >
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id} className="px-4 py-2 border">
                  {d[i.field]}
                </td>
              ))}
              {additionField ? (
                <td className="px-4 py-2 border">
                  {additionField.elements(d.id)}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>

      {/* صفحه‌بندی */}
      <nav aria-label="Page navigation" className="flex justify-center mt-4">
        <ul className="flex gap-2">
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded hover:bg-gray-100"
              aria-label="Previous"
            >
              &raquo;
            </a>
          </li>
          {[1, 2, 3].map((page) => (
            <li key={page}>
              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded hover:bg-gray-100"
              aria-label="Next"
            >
              &laquo;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginatedTable;
