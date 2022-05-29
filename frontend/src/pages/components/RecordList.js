import { useState } from 'react';
import EditableItem from './EditableItem.js';
import RecordItem from './RecordItem.js';

function RecordList(props) {
    const { records } = props;
    const [editableId, setEditableId] = useState(null)

    const updateEditable = (id) => {
        setEditableId(id)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {
                        Object.keys(records[0]).map((e) => (
                            <td>{e}</td>
                        ))
                    }
                    <td>
                        Actions
                    </td>
                </tr>
            </thead>
            
            <tbody>
                {
                    records.map((record) => (
                        editableId === record.id ? (
                            <EditableItem record={record} updateEditable={updateEditable}/>
                        ) : (
                            <RecordItem record={record} updateEditable={updateEditable}/>
                        )
                    ))
                }
            </tbody>
        </table>
    );
}

export default RecordList;
