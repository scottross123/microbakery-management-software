import RecordItem from './RecordItem.js';

function RecordList(props) {
    const { records } = props;

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
                        <RecordItem record={record}/>
                    ))
                }
            </tbody>
        </table>
    );
}

export default RecordList;
