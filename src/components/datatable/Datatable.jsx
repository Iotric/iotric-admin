import { Link } from "react-router-dom";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { adminColumns } from "../../datatablesource";

import { useSelector, useDispatch } from "react-redux";
import { adminActions } from "../../redux/slice/admin-slice";

const Datatable = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.admin.adminData);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/dashboard/admins/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => dispatch(adminActions.handleDelete(params.row.id))}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Admin
        <Link to="/dashboard/admins/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={adminColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
