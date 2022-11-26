import { Link } from "react-router-dom";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { adminColumns } from "../../datatablesource";

import { useSelector, useDispatch } from "react-redux";
import { adminActions } from "../../redux/slice/admin-slice";
import { deleteAdmin } from "../../redux/actions/admin-actions";

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
            <Link
              to={`/dashboard/admins/${params.row.userId}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => dispatch(deleteAdmin(params.row.userId))}
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
