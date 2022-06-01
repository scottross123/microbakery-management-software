import useFetch from "../../hooks/useFetch";

function EditableItem(props) {
    const { record } = props;
    const { updateEditable } = props;
    const { data, loading, error } = useFetch('/get_attribute_types?table=order')

    const ATTRIBUTES_TO_INPUTS = {
        'Integer': 'number',
        'String': 'text',
        'Numeric': 'number',
        'DateTime': 'datetime-local',
    }

    console.log({'types': data.types}, {'record': record})

    const handleCancel = (event) => {
        updateEditable(null)
    }

    const handleSave = (event, new_record) => {
        // do save shit
        updateEditable(null)
    }

    return (
        <tr>
            { loading ? (
                <p>loading</p>
            ) : data.types?.map((type, i) => (
                <td> {                    
                    <input
                        type={ATTRIBUTES_TO_INPUTS[type]}
                        defaultValue={Object.values(record)[i]}
                    ></input> 
                } </td>
            ))}

            <td>
                <button onClick={handleSave}>save</button>
                <button onClick={handleCancel}>cancel</button>
            </td>
        </tr>
    );
}

export default EditableItem;
