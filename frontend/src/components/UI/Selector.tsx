//////////////////////////////////////////
///////////    IMPORTATIONS     //////////
//////////////////////////////////////////
 

// import models
import { RoleModel } from "@/models/Role";
import { SelectorModel } from "@/models/Form";
//////////////////////////////////////////
///////////    COMPONENT     /////////////
//////////////////////////////////////////

const Selector: React.FC<SelectorModel> = ({ data, icon, value, onChange }) => {
    // console.log('\x1b[30m%s\x1b[0m', 'Button-cta.tsx rendered');

    return (
        <>
            <form action="" className="form">
                {icon === "null" ? null : (<img className="btn__svg " src={`assets/img/buttons/white/${icon}.svg`} />)}
                <select className="selector" onChange={onChange} value={value}>
                    {data.map((role: RoleModel, index) => (
                        <option key={index} value={role.id_role}>
                            {role.role_name}
                        </option>
                    ))}
                </select>
            </form>
        </>
    );
};

export default Selector;