import RecordActions from "./RecordActions";

function RecordItem(props) {
    const { record } = props;

    return (
        <tr>
            {
                Object.values(record).map((e) => (
                    <td>{ e }</td>
                ))
            }

            <RecordActions/>
        </tr>
    );
}

export default RecordItem;
