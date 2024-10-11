
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Delete } from "../../redux/actions";


const ProductDelete=()=>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleYes=()=>{
        dispatch(Delete(parseInt(id)));
      navigate("/");
    };
    const handleNo=()=>{

      navigate("/");

    };
    return(
        <>
        <h2>Delete Customer</h2>
         <h3>Do you want to delete this Product?</h3>
         <button onClick={handleYes}> Yes</button> |
         <button onClick={handleNo}> No</button>

        </>
    )
}

export default ProductDelete;