import { Link } from "react-router-dom";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { invitationColumns } from "../../../datatablesource";

import { useSelector, useDispatch } from "react-redux";

const Datatable = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.admin.adminData);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        05 Contacts
        <Link to="/dashboard/admins/new" className="link">
          Import from CSV
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={invitationColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
