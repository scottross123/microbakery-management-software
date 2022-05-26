function RecordsList(props) {
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
                </tr>
            </thead>
            
            <tbody className="recordslist">
                {
                    records.map((record) => (
                        <tr>
                            {
                                Object.entries(record).map((e) => (
                                    <td>{e[1]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default RecordsList;

// to-do: adding loading component or state to fix null error before first render
// or even better: create custom hook to fetch data