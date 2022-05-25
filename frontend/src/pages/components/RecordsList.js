function RecordsList(props) {
    const { records } = props;

    return (
        <tbody className="recordslist">
            {
                records.map((record) => (
                    <tr>
                        {
                            Object.entries(record).map((e) => (
                                <td>{e[0]}: {e[1]}</td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    );
}

export default RecordsList;