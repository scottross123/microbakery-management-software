function RecordItem(props) {
    const { record } = props;
    const { updateEditable } = props;

    return (
        <tr>
            {
                Object.values(record).map((e) => (
                    <td>{ e }</td>
                ))
            }

            <td>
                <button>info</button>
                <button onClick={() => updateEditable(record.id)}>edit</button>
                <button>del</button>
            </td>
        </tr>
    );
}

export default RecordItem;
