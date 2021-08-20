import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";

const Page1 = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "Name",
      field: "name",
    },
  
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <>
      <h1>Page1</h1>
      <p>Go to the Page2 by using the following Button:</p>
      <hr />
      <button onClick={() => history.push("/Page2")}>Page2</button>
      <hr />
      <div>
        <MaterialTable
          title="User Table"
          data={data}
          columns={columns}
          options={{
            search: false,
            paging: false,
            filtering: true,
            exportButton: true,
          }}
        />
      </div>
    </>
  );
}

export default Page1;
