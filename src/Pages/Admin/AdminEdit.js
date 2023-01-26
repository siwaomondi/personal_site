import { useParams } from "react-router-dom";
const AdminEdit = () => {
    const params = useParams();
    const { sub } = params;
    console.log(sub);
    return <>editing</>;
};

export default AdminEdit;
