export const  TableSkeleton = () => {
  return (
    <div className="mt-4" id="table-skeleton">
      <div className="animate-pulse flex justify-center">
       {/*  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="h-48 bg-gray-300 rounded"></div> */}
        <table className="w-full mt-4 mx-20  border-slate-300 border border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-gray-200 rounded-tl w-3/4  border border-slate-300">
               
              </th>
              <th className="p-4 bg-gray-200 rounded-tl w-1/4  border border-slate-300">
               
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-0">
                <td className="p-4 border-0">
                  <div className="h-6 bg-gray-300 rounded mx-3"></div>
                </td>
                <td className="p-4  border-0">
                  <div className="h-6 bg-gray-300 rounded mx-3"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-500 mt-2">Loading table data...</p>
    </div>
  );
}